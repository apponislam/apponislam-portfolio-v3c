import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";

export default function ProjectsPage() {
  const projects = [
    { title: "E-Commerce Platform", category: "Full Stack", status: "Active", tech: "React, Node.js" },
    { title: "Portfolio V3", category: "Web UI", status: "Completing", tech: "Next.js, Tailwind" },
    { title: "AI Image Generator", category: "AI/ML", status: "Planning", tech: "Python, React" },
    { title: "Task Manager Pro", category: "Web App", status: "Archived", tech: "Vue, Firebase" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Projects Management</h1>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium text-sm">Add Project</button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Tech Stack</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.tech}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell className="text-right text-primary cursor-pointer">Edit</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
