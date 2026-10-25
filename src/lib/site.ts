export const site = {
  name: 'Nazia Praveen', firstName: 'Nazia', lastName: 'Praveen',
  handle: 'naziashakil27', brand: 'nazia.dev', email: 'naziawork27@gmail.com',
  location: 'Bangalore, India', timeZone: 'Asia/Kolkata', timeZoneLabel: 'IST',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3002',
  tagline: 'BCA student building full-stack applications, voice assistants, and document-grounded AI.',
  roles: ['Full Stack Developer', 'React & Python', 'AI / LLM Applications', 'BCA Student · Presidency University'],
} as const;

export type SocialKey = 'github' | 'linkedin' | 'email' | 'source';
export const socials: Record<SocialKey, { label: string; href: string }> = {
  github: { label: 'GitHub', href: 'https://github.com/naziashakil27' },
  linkedin: { label: 'LinkedIn', href: 'https://linkedin.com/in/nazia-shakil-667057316' },
  email: { label: 'Email', href: 'mailto:naziawork27@gmail.com' },
  source: { label: 'Design foundation', href: 'https://github.com/aitezazdev/Portfolio' },
};
export const socialList = [socials.linkedin, socials.email, socials.github, socials.source];
export const navLinks = [
  { name: 'Home', href: '/#top', menuOnly: true },
  { name: 'About', href: '/#about' },
  { name: 'Expertise', href: '/#services' },
  { name: 'Work', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
] as const;
