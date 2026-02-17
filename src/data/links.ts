export interface NavLinkItem {
  href: string;
  label: string;
}

export const navLinks: NavLinkItem[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#github', label: 'GitHub' },
  { href: '#leetcode', label: 'Leetcode' },
  { href: '#badges', label: 'Badges' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export interface SocialLinkItem {
  href: string;
  label: string;
  /** Icon identifier for mapping in component (e.g. 'github', 'linkedin') */
  iconKey: string;
}

export const socialLinks: SocialLinkItem[] = [
  {
    href: 'https://github.com/adhilunnikrishnan',
    label: 'GitHub',
    iconKey: 'github',
  },
  {
    href: 'https://www.linkedin.com/in/adhilunnikrishnan/',
    label: 'LinkedIn',
    iconKey: 'linkedin',
  },
  // {
  //   href: '',
  //   label: 'YouTube',
  //   iconKey: 'youtube',
  // },
  // {
  //   href: '',
  //   label: 'Instagram',
  //   iconKey: 'instagram',
  // },
  {
    href: 'https://wa.me/917907933057',
    label: 'WhatsApp',
    iconKey: 'whatsapp',
  },
  {
    href: 'mailto:adhilunnikrishnanofficial@gmail.com',
    label: 'Gmail',
    iconKey: 'gmail',
  },
  {
    href: 'https://leetcode.com/u/adhilunnikrishnan/',
    label: 'LeetCode',
    iconKey: 'leetcode',
  },
];
