// ./nextjs-app/app/pages/index.tsx

import { draftMode } from 'next/headers';
import { getCachedClient } from '@/sanity/lib/getClient';
import { heroQuery } from '@/sanity/lib/queries';
import Hero from '@/app/_components/hero';
import PreviewHero from '@/app/_components/previews/hero-preview';
import PreviewProvider from '@/app/_components/previews/preview-provider';

export default async function Home() {
  const preview = draftMode().isEnabled ? { token: process.env.SANITY_API_READ_TOKEN } : undefined;
  const hero = await getCachedClient(preview)(heroQuery);

  if (preview && preview.token) {
    return (
      <PreviewProvider token={preview.token}>
        <PreviewHero hero={hero} />
      </PreviewProvider>
    );
  }

  return <Hero hero={hero} />;
}
