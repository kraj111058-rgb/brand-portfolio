import type { SVGProps } from "react";
import type { SocialLink } from "@/data/brand";

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.57 14.84L2.2 21.8l5.1-1.33A9.9 9.9 0 1 0 12.04 2Zm5.78 14.07c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.14.11-1.84-.11-.42-.13-.96-.31-1.66-.61-2.92-1.26-4.82-4.2-4.96-4.39-.14-.19-1.18-1.57-1.18-3s.75-2.12 1.02-2.42c.27-.29.59-.36.79-.36h.57c.18 0 .43-.07.67.51.24.59.83 2.02.9 2.17.07.15.12.33.02.52-.1.2-.15.32-.29.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.18.29.78 1.29 1.68 2.09 1.15 1.03 2.12 1.35 2.42 1.5.3.15.47.12.64-.08.18-.2.74-.86.94-1.15.2-.29.4-.24.67-.14.27.1 1.73.82 2.02.97.3.15.49.22.56.34.08.13.08.73-.17 1.41Z" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.5h2.52l.38-2.92H13.5V8.71c0-.85.24-1.42 1.45-1.42h1.55V4.68c-.27-.04-1.19-.12-2.26-.12-2.24 0-3.77 1.37-3.77 3.88v2.14H8v2.92h2.47V21h3.03Z" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5A1.96 1.96 0 1 0 5.3 7.42 1.96 1.96 0 0 0 5.25 3.5ZM20.44 13.02c0-3.04-1.62-4.46-3.79-4.46-1.75 0-2.53.96-2.97 1.64V8.5h-3.37c.04.96 0 11 0 11h3.37v-6.14c0-.33.02-.66.12-.89.26-.66.86-1.34 1.87-1.34 1.32 0 1.85 1.01 1.85 2.49V19.5h3.37v-6.48h-.45Z" />
    </svg>
  );
}

function XSocialIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.58 7.19a2.75 2.75 0 0 0-1.94-1.95C17.93 4.78 12 4.78 12 4.78s-5.93 0-7.64.46a2.75 2.75 0 0 0-1.94 1.95A28.7 28.7 0 0 0 2 12a28.7 28.7 0 0 0 .42 4.81 2.75 2.75 0 0 0 1.94 1.95c1.71.46 7.64.46 7.64.46s5.93 0 7.64-.46a2.75 2.75 0 0 0 1.94-1.95A28.7 28.7 0 0 0 22 12a28.7 28.7 0 0 0-.42-4.81ZM10 15.1V8.9l5.2 3.1L10 15.1Z" />
    </svg>
  );
}

export function SocialIcon({
  id,
  className,
}: {
  id: SocialLink["id"];
  className?: string;
}) {
  switch (id) {
    case "linkedin":
      return <LinkedInIcon className={className} />;
    case "x":
      return <XSocialIcon className={className} />;
    case "instagram":
      return <InstagramIcon className={className} />;
    case "facebook":
      return <FacebookIcon className={className} />;
    case "youtube":
      return <YouTubeIcon className={className} />;
  }
}
