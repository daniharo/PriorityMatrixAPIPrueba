import { useEffect } from "react";
import { useState } from "react";
import Auth from "./Auth";
import SearchAppBar from "./components/Layout/SearchAppBar";
import Projects from "./components/projects/Projects";
import CircularProgressCenter from "./UI/CircularProgressCenter";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const response = await fetch("/api/v1/project/", {
        credentials: "include",
        headers: {
          "Authorization": `Bearer ${Auth.bearerToken}`
        }
      });
      const data = await response.json();
      setProjects(data.objects);
      setLoading(false);
      console.log(data);
    }
    fetchProjects();
  }, []);

  return (
    <>
      <SearchAppBar />
      {!loading && <Projects projects={projects} />}
      {loading && <CircularProgressCenter color="secondary"/>}
    </>
  );
}
