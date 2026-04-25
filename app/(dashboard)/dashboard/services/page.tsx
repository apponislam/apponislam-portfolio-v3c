import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";

export default function ServicesPage() {
  const services = [
    { title: "Web Development", description: "Full-stack web application development.", icon: "Globe", status: "Active" },
    { title: "UI/UX Design", description: "Modern, aesthetic user interface design.", icon: "PenTool", status: "Active" },
    { title: "API Development", description: "RESTful API planning and architecture.", icon: "Server", status: "Active" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Services Management</h1>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium text-sm">Add Service</button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Provided Services</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Icon Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.icon}</TableCell>
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
