import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";

export default function AuditPage() {
  const audits = [
    { id: "LOG-001", action: "User Logged In", user: "Admin", date: "2026-04-25 10:00", ip: "192.168.1.1" },
    { id: "LOG-002", action: "Created Project", user: "Admin", date: "2026-04-24 14:32", ip: "192.168.1.1" },
    { id: "LOG-003", action: "Deleted Blog Post", user: "SuperAdmin", date: "2026-04-23 09:12", ip: "10.0.0.5" },
    { id: "LOG-004", action: "Updated Profile", user: "User", date: "2026-04-22 16:45", ip: "172.16.0.4" },
    { id: "LOG-005", action: "Failed Login Attempt", user: "Unknown", date: "2026-04-22 11:20", ip: "45.22.11.10" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold tracking-tight">Audit Logs</h1>
      <Card>
        <CardHeader>
          <CardTitle>System Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Log ID</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>IP Address</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {audits.map((audit) => (
                <TableRow key={audit.id}>
                  <TableCell className="font-medium text-muted-foreground">{audit.id}</TableCell>
                  <TableCell>{audit.action}</TableCell>
                  <TableCell>{audit.user}</TableCell>
                  <TableCell>{audit.date}</TableCell>
                  <TableCell>{audit.ip}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
