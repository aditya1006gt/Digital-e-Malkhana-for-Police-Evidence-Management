import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { AppBar } from "../components/AppBar";

export function EditProfile() {
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [aboutUs, setAboutUs] = useState<string>("");
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/user/info", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const user = response.data.user;
        setFirstName(user.firstname ?? "");
        setLastName(user.lastname ?? "");
        setAge(user.age != null ? String(user.age) : "");
        setAboutUs(user.about ?? "");
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    }
    fetchUser();
  }, []);

  async function updateProfile() {
    try {
      await axios.put(
        "http://localhost:3000/api/v1/user/update",
        {
          firstname,
          lastname,
          age: Number(age),
          about: aboutUs,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setShowAlert(true);
      setTimeout(() => navigate("/myinfo"), 1000);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  }

  return (
    <>
      {showAlert && (
        <Alert
          className="fixed top-16 left-1/2 -translate-x-1/2 w-max z-50"
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
        >
          Profile Updated Successfully
        </Alert>
      )}

      <AppBar />

      <div className="min-h-screen bg-slate-200 dark:bg-slate-900 flex justify-center items-center px-6">
        <div className="w-full max-w-lg bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md text-slate-800 dark:text-slate-100">
          <h1 className="text-3xl font-semibold mb-6 text-center">
            Edit Profile
          </h1>

          <div className="space-y-4">
            <InputBox
              label="First Name"
              value={firstname}
              placeholder="Aditya"
              onChange={(e: any) => setFirstName(e.target.value)}
            />

            <InputBox
              label="Last Name"
              value={lastname}
              placeholder="Kumar"
              onChange={(e: any) => setLastName(e.target.value)}
            />

            <InputBox
              label="Age"
              value={age}
              placeholder="21"
              onChange={(e: any) => setAge(e.target.value)}
            />

            <InputBox
              label="About"
              value={aboutUs}
              placeholder="Tell us about yourself"
              onChange={(e: any) => setAboutUs(e.target.value)}
            />
          </div>

          <Button
            label="Save Changes"
            onPress={updateProfile}
          />
        </div>
      </div>
    </>
  );
}
