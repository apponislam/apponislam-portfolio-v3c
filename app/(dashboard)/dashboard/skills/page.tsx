import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";

export default function SkillsPage() {
  const skills = [
    { name: "React", category: "Frontend", icon: "react-icon" },
    { name: "Node.js", category: "Backend", icon: "node-icon" },
    { name: "Tailwind CSS", category: "Frontend", icon: "tailwind-icon" },
    { name: "MongoDB", category: "Database", icon: "mongo-icon" },
    { name: "TypeScript", category: "Languages", icon: "ts-icon" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Skills Management</h1>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium text-sm">Add Skill</button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Technical Expertise</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Skill Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Icon</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {skills.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.icon}</TableCell>
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
