import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";

export default function EducationsPage() {
  const educations = [
    { institution: "University of Technology", degree: "B.Sc. in Computer Science", year: "2018 - 2022", grade: "3.8/4.0" },
    { institution: "City College", degree: "Higher Secondary Certificate", year: "2016 - 2018", grade: "A+" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Educations Management</h1>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium text-sm">Add Education</button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Academic Records</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Institution</TableHead>
                <TableHead>Degree/Certificate</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {educations.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">{item.institution}</TableCell>
                  <TableCell>{item.degree}</TableCell>
                  <TableCell>{item.year}</TableCell>
                  <TableCell>{item.grade}</TableCell>
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
