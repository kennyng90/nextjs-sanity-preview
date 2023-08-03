'use client';
import { SanityDocument } from '@sanity/client';

export interface HeroProps extends SanityDocument {
  title: string;
}

export default function Hero({ hero }: { hero: HeroProps }) {
  return (
    <main className='container mx-auto prose prose-lg p-4'>
      <h1>{hero.title}</h1>
    </main>
  );
}
