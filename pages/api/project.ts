import { NextApiResponse, NextApiRequest } from "next";

interface ProjectProps {
  id: number;
  name: string;
}

const projects: ProjectProps[] = [
  { id: 3, name: "Project Gamma" },
  { id: 1, name: "Project Alpha" },
  { id: 2, name: "Project Beta" },
];
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectProps[]>
) {
  if (req.method === "GET") {
    res.status(200).json(projects);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
