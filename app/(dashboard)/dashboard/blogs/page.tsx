import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";

export default function BlogsPage() {
  const blogs = [
    { title: "Understanding React Server Components", author: "Appon", date: "April 10, 2026", views: 1204 },
    { title: "Why Next.js 15 is a Game Changer", author: "Appon", date: "March 22, 2026", views: 856 },
    { title: "Mastering Tailwind CSS Animations", author: "Appon", date: "Feb 15, 2026", views: 2451 },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Blogs Management</h1>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium text-sm">Create Post</button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Published Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Date Published</TableHead>
                <TableHead>Views</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {blogs.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>{item.author}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.views}</TableCell>
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
