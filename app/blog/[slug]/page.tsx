import { blogs } from "../../data/index";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import Image from "next/image";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <article className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto space-y-12">
                    <Link href="/#blog" className="inline-flex items-center gap-2 text-primary font-bold hover:underline group">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>

                    <div className="space-y-6">
                        <div className="flex items-center gap-6 text-sm text-muted-foreground font-medium">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-primary" />
                                <span>{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-primary" />
                                <span>Appon Islam</span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">{blog.title}</h1>
                    </div>

                    <div className="relative h-100 md:h-150 rounded-[40px] overflow-hidden border border-border/50 shadow-2xl">
                        <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
                        <p className="text-xl text-foreground font-medium">{blog.excerpt}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <h2 className="text-2xl font-bold text-foreground">Understanding the core concepts</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className="bg-secondary/30 p-8 rounded-3xl border border-border/50 italic">&ldquo;The best way to predict the future is to invent it. In the world of web development, that means constantly learning and adapting to new technologies.&rdquo;</div>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
