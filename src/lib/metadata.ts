import { Metadata } from 'next';
import { site } from './site';

export const siteMetadata: Metadata = {
  title: { default: 'Nazia Praveen — Full Stack Developer', template: '%s | Nazia Praveen' },
  description: site.tagline,
  authors: [{ name: site.name }], creator: site.name,
  metadataBase: new URL(site.url), alternates: { canonical: './' },
  icons: { icon: '/nazia-mark.svg' },
  openGraph: {
    title: 'Nazia Praveen — Full Stack & AI', description: site.tagline,
    url: site.url, siteName: 'Nazia Praveen Portfolio', type: 'website',
    images: [{ url: '/work/murshid.svg', width: 1200, height: 750, alt: 'Nazia Praveen — Full Stack & AI Projects' }],
  },
  twitter: { card: 'summary_large_image', title: 'Nazia Praveen — Full Stack Developer', description: site.tagline },
};
