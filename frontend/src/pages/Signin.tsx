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

interface SigninInput {
    email: string;
    password: string;
}

export function Signin() {
    const navigate = useNavigate();
    const [signinInput, setSigninInput] = useState<SigninInput>({
        email: "",
        password: ""
    });
    const [showAlert, setShowAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSignin = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post(`${URL}/api/v1/user/signin`, {
                email: signinInput.email,
                password: signinInput.password
            });
            localStorage.setItem("token", response.data.token);
            setShowAlert(true);
            // Navigate to main dashboard
            setTimeout(() => navigate("/dashboard"), 1000);
        } catch (err: any) {
            if (err.response?.data?.error) {
                setError(err.response.data.error);
            } else {
                setError("Invalid email or password. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        // Centered layout with white background
        <div className="min-h-screen flex flex-col justify-center items-center bg-white p-4">
            
            {showAlert && (
                <div className="fixed top-4 left-1/2 -translate-x-1/2 w-fit z-50">
                    <Alert 
                        icon={<CheckIcon fontSize="inherit" />} 
                        severity="success"
                        className="shadow-lg"
                    >
                        Login Successful. Accessing Secure Portal...
                    </Alert>
                </div>
            )}

            {/* Signin Card */}
            <div className="w-full max-w-md bg-gray-50 rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="text-center mb-6">
                    <div className="text-4xl mb-2">
                        ⚖️
                    </div>
                    <Heading label="Officer Sign In" />
                    <SubHeading label="Enter your credentials to access the e-Malkhana" />
                </div>

                <div className="space-y-5">
                    <InputBox
                        value={signinInput.email}
                        onChange={e => setSigninInput({ ...signinInput, email: e.target.value })}
                        label="Official Email"
                        placeholder="officer@police.gov.in"
                    />

                    <InputBox
                        value={signinInput.password}
                        type="password"
                        onChange={e => setSigninInput({ ...signinInput, password: e.target.value })}
                        label="Password"
                        placeholder="••••••••"
                    />

                    <div className="pt-2">
                        <Button
                            loading={loading}
                            onPress={handleSignin}
                            label={loading ? "Verifying..." : "Sign In"}
                        />
                    </div>
                    
                    {error && <Alert severity="error" className="mt-3 py-1">{error}</Alert>}

                    <div className="pt-4 border-t border-gray-200 mt-2">
                        <BottomWarning
                            label1="Not registered?"
                            label2="Create Officer Account"
                            label3="/signup"
                        />
                    </div>
                </div>
            </div>

            <p className="mt-8 text-gray-400 text-sm font-medium tracking-wide">
                POLICE DEPARTMENT • INTERNAL ACCESS ONLY
            </p>
        </div>
    );
}