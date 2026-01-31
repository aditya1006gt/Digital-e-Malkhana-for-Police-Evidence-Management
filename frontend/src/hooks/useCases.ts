// hooks/useCases.ts
import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../config";

export const useCases = () => {
    const [loading, setLoading] = useState(true);
    const [cases, setCases] = useState([]);
    const [stats, setStats] = useState({
        totalCases: 0,
        totalItems: 0,
        pendingDisposal: 0,
        stationId: ""
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                const [casesRes, statsRes] = await Promise.all([
                    axios.get(`${URL}/api/v1/case/my-cases`, { headers: { Authorization: `Bearer ${token}` } }),
                    axios.get(`${URL}/api/v1/case/dashboard-stats`, { headers: { Authorization: `Bearer ${token}` } })
                ]);
                
                setCases(casesRes.data.cases);
                setStats(statsRes.data);
            } catch (e) {
                console.error("Error fetching dashboard data", e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { cases, loading, stats };
};