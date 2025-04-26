import { projects } from '@/data/portfolio-demos';
import { redirect } from 'next/navigation';
import DemoPageClient from './DemoPageClient';

type Props = {
  params: {
    slug: string;
  };
}

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default function DemoPage({ params }: Props) {
  const project = projects.find(p => p.id === params.slug);

  if (!project) {
    redirect('/portfolio');
  }

  return <DemoPageClient project={project} />;
}
