import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";

export default function ExperiencesPage() {
  const experiences = [
    { company: "TechNova Solutions", role: "Senior Frontend Developer", duration: "Jan 2024 - Present", type: "Full-time" },
    { company: "Digital Crafters", role: "Web Developer", duration: "Mar 2022 - Dec 2023", type: "Contract" },
    { company: "WebWizards Inc", role: "Junior Developer", duration: "Jun 2021 - Feb 2022", type: "Full-time" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Experiences Management</h1>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium text-sm">Add Experience</button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Work History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {experiences.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">{item.company}</TableCell>
                  <TableCell>{item.role}</TableCell>
                  <TableCell>{item.duration}</TableCell>
                  <TableCell>{item.type}</TableCell>
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
