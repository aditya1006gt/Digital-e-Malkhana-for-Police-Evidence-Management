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
                // Fetch user info for stationId and stats
                const userRes = await axios.get(`${URL}/api/v1/user/info`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
                });

                // Fetch all cases assigned to the user
                const casesRes = await axios.get(`${URL}/api/v1/case/my-cases`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
                });

                const fetchedCases = casesRes.data.cases || [];
                setCases(fetchedCases);

                // Calculate stats based on fetched data
                const totalItems = fetchedCases.reduce((acc: number, curr: any) => acc + (curr.properties?.length || 0), 0);
                
                setStats({
                    totalCases: fetchedCases.length,
                    totalItems: totalItems,
                    pendingDisposal: Math.floor(totalItems * 0.1), // Placeholder logic
                    stationId: userRes.data.user.stationId
                });

                setLoading(false);
            } catch (e) {
                console.error("Error fetching dashboard data", e);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { loading, cases, stats };
};