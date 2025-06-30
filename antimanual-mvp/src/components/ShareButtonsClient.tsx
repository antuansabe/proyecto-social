'use client';

import { ShareButtons } from '@/components/ui/ShareButtons';

interface ShareButtonsClientProps {
  title: string;
  slug: string;
}

export default function ShareButtonsClient({ title, slug }: ShareButtonsClientProps) {
  const currentUrl = typeof window !== 'undefined' ? 
    `${window.location.origin}/ley/${slug}` : 
    `https://antimanual.com/ley/${slug}`;

  return <ShareButtons title={title} url={currentUrl} />;
}