import { useEffect } from "react";
import { useState } from "react";
import Auth from "./Auth";
import SearchAppBar from "./components/Layout/SearchAppBar";
import Projects from "./components/projects/Projects";
import CircularProgressCenter from "./UI/CircularProgressCenter";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const response = await fetch("/api/v1/project/", {
        credentials: "include",
        headers: {
          Authorization: `Bearer ${Auth.bearerToken}`,
        },
      });
      const data = await response.json();
      setProjects(data.objects);
      setLoading(false);
      //console.log(data);
    };
    fetchProjects();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <SearchAppBar onSearchChange={handleSearchChange} />
      {!loading && <Projects projects={projects} searchWord={searchQuery} />}
      {loading && <CircularProgressCenter color="secondary" height="300px" />}
    </>
  );
}
