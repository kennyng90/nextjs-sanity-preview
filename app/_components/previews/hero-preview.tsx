'use client';
import { useLiveQuery } from '@sanity/preview-kit';
import { heroQuery } from '@/sanity/lib/queries';
import Hero, { HeroProps } from '@/app/_components/hero';

export default function PreviewHero({ hero }: { hero: HeroProps }) {
  const [data] = useLiveQuery(hero, heroQuery);

  return <Hero hero={data} />;
}
