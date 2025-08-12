import Head from "next/head";
import { useState, useEffect } from "react";
interface ListProjectProps {
  id: number;
  name: string;
}
const ListProject: React.FC<ListProjectProps> = () => {
  const [projects, setProjects] = useState<ListProjectProps[]>([]);

  useEffect(() => {
    fetch("/api/project")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div>
      <Head>
        <title>List Project</title>
      </Head>
      <h1>List Project</h1>
      <ul>
        {projects.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListProject;
