import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { URL } from "../config";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

interface SignupInput {
    username: string;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    rank: string;
    stationId: string;
}

export const Signup = () => {
    const navigate = useNavigate();

    const [signupInput, setSignupInput] = useState<SignupInput>({
        username: "",
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        rank: "",
        stationId: ""
    });

    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSignup = async () => {
        setError("");
        setShowSuccess(false);
        setLoading(true);

        try {
            const response = await axios.post(`${URL}/api/v1/user/signup`, signupInput);
            localStorage.setItem("token", response.data.token);
            setShowSuccess(true);
            setTimeout(() => navigate("/dashboard"), 1500);
        } catch (err: any) {
            if (err.response?.data?.details) {
                setError(err.response.data.details[0].message);
            } else if (err.response?.data?.error) {
                setError(err.response.data.error);
            } else {
                setError("Registration failed. Please check all fields.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        // Changed bg-slate-950 to bg-white and ensured full centering
        <div className="min-h-screen flex flex-col justify-center items-center bg-white p-4">
            {showSuccess && (
                <div className="fixed top-4 left-1/2 -translate-x-1/2 w-fit z-50">
                    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" className="shadow-lg">
                        Officer Registered Successfully!
                    </Alert>
                </div>
            )}

            {/* The Signup Card */}
            <div className="w-full max-w-lg bg-gray-50 rounded-2xl shadow-xl p-8 border border-gray-100">
                
                <div className="text-center mb-6">
                    <div className="text-4xl mb-2">⚖️</div>
                    <Heading label="Officer Registration" />
                    <SubHeading label="Create an official e-Malkhana account" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputBox
                        value={signupInput.firstname}
                        label="First Name"
                        placeholder="John"
                        onChange={e => setSignupInput({ ...signupInput, firstname: e.target.value })}
                    />
                    <InputBox
                        value={signupInput.lastname}
                        label="Last Name"
                        placeholder="Doe"
                        onChange={e => setSignupInput({ ...signupInput, lastname: e.target.value })}
                    />
                    <InputBox
                        value={signupInput.username}
                        label="Username"
                        placeholder="officer_789"
                        onChange={e => setSignupInput({ ...signupInput, username: e.target.value })}
                    />
                    <InputBox
                        value={signupInput.email}
                        label="Official Email"
                        placeholder="officer@police.gov.in"
                        onChange={e => setSignupInput({ ...signupInput, email: e.target.value })}
                    />
                    <InputBox
                        value={signupInput.rank}
                        label="Rank / Designation"
                        placeholder="Sub-Inspector"
                        onChange={e => setSignupInput({ ...signupInput, rank: e.target.value })}
                    />
                    <InputBox
                        value={signupInput.stationId}
                        label="Police Station ID"
                        placeholder="PS-DELHI-01"
                        onChange={e => setSignupInput({ ...signupInput, stationId: e.target.value })}
                    />
                </div>

                <div className="mt-4">
                    <InputBox
                        value={signupInput.password}
                        type="password"
                        label="Password"
                        placeholder="Minimum 6 characters"
                        onChange={e => setSignupInput({ ...signupInput, password: e.target.value })}
                    />
                </div>

                <div className="mt-6">
                    <Button
                        label={loading ? "Processing..." : "Register Officer"}
                        onPress={handleSignup}
                        loading={loading}
                    />
                </div>

                {error && <Alert severity="error" className="mt-3 py-1">{error}</Alert>}

                <div className="mt-4">
                    <BottomWarning
                        label1="Already registered?"
                        label2="Sign In"
                        label3="/"
                    />
                </div>
            </div>
            
            {/* Minimal footer for white background style */}
            <p className="mt-6 text-gray-400 text-sm">© 2026 Digital e-Malkhana System • Secure Portal</p>
        </div>
    );
};