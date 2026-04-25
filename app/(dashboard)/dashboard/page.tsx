import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/Table";
import { FolderOpenDot, FileText, MessageSquare, ArrowUpRight, Activity, Eye, MousePointerClick, LineChart } from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-[1400px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Dashboard Overview
          </h1>
          <p className="text-muted-foreground mt-1">Welcome back, here is your portfolio activity at a glance.</p>
        </div>
        <div className="hidden md:flex gap-2">
           <button className="px-4 py-2 border border-border rounded-full hover:bg-muted transition-colors text-sm font-medium">Download Report</button>
           <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 text-sm font-medium">New Campaign</button>
        </div>
      </div>
      
      {/* Metrics Row */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Total Views", icon: Eye, value: "142,304", desc: "+12.5% from last month", trend: "up", color: "text-blue-500", bg: "from-blue-500/10 to-transparent" },
          { title: "Active Projects", icon: FolderOpenDot, value: "18", desc: "+3 deployed this week", trend: "up", color: "text-purple-500", bg: "from-purple-500/10 to-transparent" },
          { title: "Interactions", icon: MousePointerClick, value: "2,405", desc: "+5.2% engagement rate", trend: "up", color: "text-green-500", bg: "from-green-500/10 to-transparent" },
          { title: "Unread Messages", icon: MessageSquare, value: "12", desc: "4 urgent inquiries pending", trend: "down", color: "text-amber-500", bg: "from-amber-500/10 to-transparent" },
        ].map((metric, i) => (
          <Card key={i} className={`overflow-hidden relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 border-border/50 bg-gradient-to-br ${metric.bg} glass`}>
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <metric.icon className="w-16 h-16" />
            </div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
              <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{metric.title}</CardTitle>
              <div className={`p-2 rounded-full bg-background/50 backdrop-blur-sm shadow-sm ${metric.color}`}>
                 <metric.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-black mb-1">{metric.value}</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 font-medium">
                {metric.trend === 'up' ? <ArrowUpRight className="w-3 h-3 text-green-500" /> : <ArrowUpRight className="w-3 h-3 text-amber-500 rotate-90" />}
                {metric.desc}
              </p>
            </CardContent>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </Card>
        ))}
      </div>

      {/* Analytics Chart Mock & Top Skills */}
      <div className="grid gap-6 md:grid-cols-7 lg:grid-cols-12">
        <Card className="col-span-full md:col-span-4 lg:col-span-8 glass border-border/50 flex flex-col group">
          <CardHeader>
             <CardTitle>Audience Engagement</CardTitle>
             <CardDescription>A visual representation of portfolio traffic over the last 7 days.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex items-end gap-2 pb-6 pt-10 px-6 h-[250px]">
             {/* Fake CSS Chart */}
             {[40, 70, 45, 90, 65, 80, 100].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group/bar">
                   <div className="w-full relative bg-secondary rounded-t-sm h-full flex items-end overflow-hidden group-hover/bar:bg-secondary/80 transition-colors">
                      <div 
                         style={{ height: `${height}%` }} 
                         className="w-full bg-gradient-to-t from-primary/80 to-primary rounded-t-sm shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-1000 ease-out group-hover/bar:from-purple-500 group-hover/bar:to-primary"
                      />
                   </div>
                   <span className="text-xs text-muted-foreground font-medium uppercase">Day {i+1}</span>
                </div>
             ))}
          </CardContent>
        </Card>

        <Card className="col-span-full md:col-span-3 lg:col-span-4 glass border-border/50">
          <CardHeader>
            <CardTitle>Top Skills</CardTitle>
            <CardDescription>Key technologies utilized in projects.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", 
                "MongoDB", "Express", "GSAP Animations", "Framer Motion", "UI/UX Design"
              ].map((skill, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Grid for 2 Tables */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="glass border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Recent Messages</CardTitle>
              <CardDescription>Latest prospect inquiries from the contact form.</CardDescription>
            </div>
            <button className="text-sm font-medium text-primary hover:underline">View All</button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead>Contact</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead className="text-right">Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { name: "Sarah Connor", email: "sarah@skynet.com", msg: "Full Stack Developer Role", time: "10 mins ago", unread: true },
                  { name: "Elon Musk", email: "elon@x.com", msg: "Website Redesign Quote", time: "2 hours ago", unread: false },
                  { name: "Jane Smith", email: "jane@design.net", msg: "Collab Opportunity", time: "Yesterday", unread: true },
                  { name: "David Chen", email: "david@startup.io", msg: "Bug fix consultation", time: "2 days ago", unread: false },
                ].map((item, index) => (
                  <TableRow key={index} className="group">
                    <TableCell>
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                           {item.name.charAt(0)}
                         </div>
                         <div>
                           <div className="font-medium flex items-center gap-2">
                             {item.name}
                             {item.unread && <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />}
                           </div>
                           <div className="text-xs text-muted-foreground">{item.email}</div>
                         </div>
                      </div>
                    </TableCell>
                    <TableCell className="max-w-[150px] truncate">{item.msg}</TableCell>
                    <TableCell className="text-right text-xs text-muted-foreground whitespace-nowrap">{item.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="glass border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
             <div>
               <CardTitle>System Audit Logs</CardTitle>
               <CardDescription>Recent modifications in the portfolio structure.</CardDescription>
             </div>
             <button className="text-sm font-medium text-primary hover:underline">View Log</button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead>Action</TableHead>
                  <TableHead>Module</TableHead>
                  <TableHead className="text-right">Timestamp</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { action: "Updated Skill: React", icon: LineChart, context: "Skills Settings", time: "Just now", color: "text-blue-500", bg: "bg-blue-500/10" },
                  { action: "Deleted Blog: Legacy Code...", icon: FileText, context: "Blog Entries", time: "1 hr ago", color: "text-red-500", bg: "bg-red-500/10" },
                  { action: "Created Project: E-Commerce", icon: FolderOpenDot, context: "Portfolio Projects", time: "5 hrs ago", color: "text-green-500", bg: "bg-green-500/10" },
                  { action: "Admin Login Success", icon: Activity, context: "Auth System", time: "12 hrs ago", color: "text-purple-500", bg: "bg-purple-500/10" },
                ].map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                       <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-md ${item.bg} ${item.color}`}>
                             <item.icon className="w-4 h-4" />
                          </div>
                          <span className="font-medium text-sm">{item.action}</span>
                       </div>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">{item.context}</TableCell>
                    <TableCell className="text-right text-xs text-muted-foreground whitespace-nowrap">{item.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
