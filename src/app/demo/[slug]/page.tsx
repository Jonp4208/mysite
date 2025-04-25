import { projects } from '@/data/portfolio-demos';
import { redirect } from 'next/navigation';
import DemoPageClient from './DemoPageClient';

export default function DemoPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.id === params.slug);

  if (!project) {
    redirect('/portfolio');
  }

  return <DemoPageClient project={project} />;
}
