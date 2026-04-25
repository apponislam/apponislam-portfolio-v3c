import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";

export default function ContactsPage() {
  const contacts = [
    { name: "John Doe", email: "john@example.com", subject: "Freelance Project", status: "Unread", date: "Today" },
    { name: "Jane Smith", email: "jane@company.com", subject: "Job Opportunity", status: "Read", date: "Yesterday" },
    { name: "Recruiter Bob", email: "bob@talent.net", subject: "Interview Request", status: "Read", date: "Apr 22" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Contacts Management</h1>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium text-sm">Export Data</button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Messages</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sender Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.subject}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.status === 'Unread' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>{item.status}</span>
                  </TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell className="text-right text-primary cursor-pointer">View</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
