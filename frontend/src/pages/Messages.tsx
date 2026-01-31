import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { AppBar } from "../components/AppBar";
import SideBar from "../components/SideBar";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../components/Footer";

interface SimpleUser {
  id: string;
  firstname: string;
  lastname: string;
  profilepic: string;
  about?: string;
  username?: string;
}

export function Messages() {
  const [users, setUsers] = useState<SimpleUser[]>([]);
  const { path } = useParams<{ path: "followers" | "following" }>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `http://localhost:3000/api/v1/follower/list/${path}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const list = path === "followers" ? res.data.followedBy : res.data.following;
        setUsers(list || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [path]);

  if (loading) {
    return (
      <>
        <AppBar />

        <div className="flex bg-gray-950 min-h-screen pt-20">
        <SideBar />

        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <Loader />
        </div>

        {/* Main Content */}
        <main className="col-span-12 md:col-span-9 lg:col-span-10 p-10 space-y-8 overflow-y-auto">
          {/* Loader */}
          {loading && (
            <div className="space-y-6">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-full rounded-xl bg-gray-900/60 backdrop-blur-sm border border-gray-800 animate-pulse flex items-center gap-4 px-6 py-4"
                >
                  <div className="h-14 w-14 bg-gray-800 rounded-full" />
                  <div className="flex-1 space-y-3">
                    <div className="h-4 w-1/4 bg-gray-800 rounded" />
                    <div className="h-4 w-1/3 bg-gray-800 rounded" />
                    <div className="h-3 w-1/2 bg-gray-800 rounded" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
      </>
    );
  }

  return (<>
    <div className="min-h-screen flex flex-col bg-gray-950">
        <AppBar />
        <div className="flex bg-gray-950 min-h-screen pt-20">
        <SideBar />

        <div className="flex-1 px-6 py-4 text-gray-100">
        </div>
        </div>
        <Footer />
    </div>
  </>);
}


