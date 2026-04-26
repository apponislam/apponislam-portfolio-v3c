import { projects } from "@/app/data";
import ProjectDetailClient from "@/components/sections/ProjectDetailClient";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projects.find((p) => p.id.toString() === id);

    if (!project) {
        notFound();
    }

    return <ProjectDetailClient project={project} />;
}
