import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Rocket } from "lucide-react";

import { Reveal } from "@/components/shared/MotionPrimitives";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TECH_CATEGORIES } from "@/data/services";
import { EASE_CURVE, SPRINGS } from "@/lib/motion";
import { cn } from "@/lib/utils";

function OfficialTechLogo({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  switch (name) {
    case "React":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <circle cx="12" cy="12" r="2.1" fill="#0EA5E9" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#0EA5E9" strokeWidth="1.6" />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.8"
            transform="rotate(60 12 12)"
            stroke="#0EA5E9"
            strokeWidth="1.6"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.8"
            transform="rotate(120 12 12)"
            stroke="#0EA5E9"
            strokeWidth="1.6"
          />
        </svg>
      );

    case "TypeScript":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="#3178C6" />
          <path
            d="M6.8 11.2h4.6M9.1 11.2V17.5"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M17.4 12c-.35-.55-1-.85-1.8-.85-.95 0-1.65.5-1.65 1.3 0 .85.8 1.15 1.8 1.45 1.05.3 1.8.65 1.8 1.65 0 .95-.85 1.55-1.95 1.55-.9 0-1.65-.35-2.05-.95"
            stroke="#FFFFFF"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "Next.js":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <circle cx="12" cy="12" r="9.5" className="fill-foreground" />
          <path
            d="M8.8 16V8.4l7.8 10.1"
            className="stroke-background"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M15.4 8.4v4.6"
            className="stroke-background"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case "Tailwind CSS":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path
            d="M12 6.5c-2.6 0-4.2 1.3-4.8 3.8 1-1.3 2.1-1.8 3.4-1.5.75.2 1.3.75 1.9 1.35.95.95 2.05 2.05 4.35 2.05 2.6 0 4.2-1.3 4.8-3.8-1 1.3-2.1 1.8-3.4 1.5-.75-.2-1.3-.75-1.9-1.35C15.4 7.6 14.3 6.5 12 6.5ZM7.2 12.2c-2.6 0-4.2 1.3-4.8 3.8 1-1.3 2.1-1.8 3.4-1.5.75.2 1.3.75 1.9 1.35.95.95 2.05 2.05 4.35 2.05 2.6 0 4.2-1.3 4.8-3.8-1 1.3-2.1 1.8-3.4 1.5-.75-.2-1.3-.75-1.9-1.35-.95-.95-2.05-2.05-4.35-2.05Z"
            fill="#06B6D4"
          />
        </svg>
      );

    case "Vite":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <defs>
            <linearGradient id="ts-vite-bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#41D1FF" />
              <stop offset="100%" stopColor="#BD34FE" />
            </linearGradient>
          </defs>
          <path
            d="M20.5 5.4 12.4 20a.45.45 0 0 1-.8 0L3.5 5.4a.45.45 0 0 1 .48-.66l8.02 1.44a.45.45 0 0 0 .16 0l7.86-1.44a.45.45 0 0 1 .48.66Z"
            fill="url(#ts-vite-bg)"
          />
          <path
            d="M14.8 4.2 10 11.4h2.8l-1 4.6 4.2-6.6h-2.9l1.7-5.2Z"
            fill="#FFEA83"
          />
        </svg>
      );

    case "Figma":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path d="M9 3.5h3v5.5H9a2.75 2.75 0 0 1 0-5.5Z" fill="#F24E1E" />
          <path d="M12 3.5h3a2.75 2.75 0 0 1 0 5.5h-3V3.5Z" fill="#FF7262" />
          <path d="M9 9h3v5.5H9A2.75 2.75 0 0 1 9 9Z" fill="#A259FF" />
          <path d="M9 14.5h3v2.75A2.75 2.75 0 1 1 9 14.5Z" fill="#0ACF83" />
          <circle cx="14.75" cy="11.75" r="2.75" fill="#1ABCFE" />
        </svg>
      );

    case "Node.js":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path
            d="M12 2.8 20 7.4v9.2l-8 4.6-8-4.6V7.4l8-4.6Z"
            fill="#5FA04E"
            fillOpacity="0.16"
            stroke="#5FA04E"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M9.4 15.2V8.8l5.2 6.4V8.8"
            stroke="#5FA04E"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "Python":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path
            d="M11.9 3C8.8 3 8.6 4.4 8.6 6v2h3.6v.8H7.1C5.2 8.8 3.8 10 3.8 12.1s1.2 3.2 3.1 3.2h1.4v-1.9c0-1.6 1.3-2.9 3-2.9h3.4c1.2 0 2.1-.9 2.1-2.1V5.9C16.8 4.3 15.4 3 11.9 3Z"
            fill="#3776AB"
          />
          <path
            d="M15.7 8.8v1.9c0 1.6-1.3 2.9-3 2.9H9.3c-1.2 0-2.1.9-2.1 2.1v2.5c0 1.6 1.4 2.8 4.9 2.8 3.1 0 3.3-1.4 3.3-3v-2h-3.6v-.8h5.1c1.9 0 3.3-1.2 3.3-3.3s-1.2-3.1-3.1-3.1h-1.4Z"
            fill="#FFD43B"
          />
          <circle cx="10.2" cy="5.5" r="0.85" fill="#FFFFFF" />
          <circle cx="13.8" cy="18.5" r="0.85" fill="#FFFFFF" />
        </svg>
      );

    case "Go":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path
            d="M2.8 9.2h4.8M2 12h4.2M3.4 14.8h3.8"
            stroke="#00ADD8"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M13.5 11.8h3.6c-.2 2.1-1.7 3.7-3.8 3.7-2.4 0-4.1-1.7-4.1-4s1.7-4 4.1-4c1.5 0 2.7.6 3.4 1.6"
            stroke="#00ADD8"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
          <circle cx="19.5" cy="11.5" r="2.6" stroke="#00ADD8" strokeWidth="1.9" />
        </svg>
      );

    case "Laravel":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path
            d="M4.2 6.4 7.8 4.4l3.6 2v7.8l4.6-2.6V7.4l3.6-2v8.2l-8.2 4.7-7.2-4.1V6.4Z"
            stroke="#FF2D20"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M7.8 10.4 11.4 8.4M16 14.2l3.6-2"
            stroke="#FF2D20"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case "GraphQL":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <polygon
            points="12,3.5 19.3,7.7 19.3,16.3 12,20.5 4.7,16.3 4.7,7.7"
            stroke="#E10098"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <polygon
            points="12,4.2 18.8,16 5.2,16"
            stroke="#E10098"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="3.8" r="1.4" fill="#E10098" />
          <circle cx="19.2" cy="7.9" r="1.4" fill="#E10098" />
          <circle cx="19.2" cy="16.1" r="1.4" fill="#E10098" />
          <circle cx="12" cy="20.2" r="1.4" fill="#E10098" />
          <circle cx="4.8" cy="16.1" r="1.4" fill="#E10098" />
          <circle cx="4.8" cy="7.9" r="1.4" fill="#E10098" />
        </svg>
      );

    case "Kafka":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <circle cx="8" cy="12" r="2.7" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="16.8" cy="6" r="2.1" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="16.8" cy="18" r="2.1" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="8" cy="4.8" r="1.8" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="8" cy="19.2" r="1.8" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M10.4 10.6 15 7.4M10.4 13.4 15 16.6M8 9.3V6.6M8 14.7v2.7"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );

    case "Flutter":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path d="M13.8 3 4.8 12l2.8 2.8L19.4 3h-5.6Z" fill="#47C5FB" />
          <path d="M13.8 11.2 9.4 15.6l4.4 4.4h5.6l-4.4-4.4 4.4-4.4h-5.6Z" fill="#00569E" />
          <path d="m9.4 15.6 2.8 2.8 2.8-2.8-2.8-2.8-2.8 2.8Z" fill="#00B5F8" />
        </svg>
      );

    case "React Native":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <rect x="6.5" y="2.8" width="11" height="18.4" rx="2.4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="1.4" fill="#0EA5E9" />
          <ellipse
            cx="12"
            cy="12"
            rx="4.2"
            ry="1.8"
            transform="rotate(45 12 12)"
            stroke="#0EA5E9"
            strokeWidth="1.3"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="4.2"
            ry="1.8"
            transform="rotate(-45 12 12)"
            stroke="#0EA5E9"
            strokeWidth="1.3"
          />
        </svg>
      );

    case "Swift":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <rect x="2.5" y="2.5" width="19" height="19" rx="4.5" fill="#F05138" />
          <path
            d="M17.8 15.7c-2.1 1.6-5.2 1.9-8.1.5-1.8-.9-3.3-2.2-4.1-3.8 1.7 1.1 3.8 1.6 5.8 1.3-2-1.7-3.6-4.1-4.2-6.6 2 1.8 4.1 3.3 6.3 4.3-1-1.8-1.5-3.8-1.6-5.7 2.4 2 4 5.1 4.3 8.2.6.6 1.2 1.2 1.6 1.8Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "Kotlin":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <defs>
            <linearGradient id="ts-kotlin-grad" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#0095D5" />
              <stop offset="50%" stopColor="#7F52FF" />
              <stop offset="100%" stopColor="#E44857" />
            </linearGradient>
          </defs>
          <path d="M4 4h16l-8 8 8 8H4V4Z" fill="url(#ts-kotlin-grad)" />
        </svg>
      );

    case "Fastlane":
      return <Rocket className={cn("text-brand-blue", className)} />;

    case "Bitrise":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path
            d="M12 3.2 4.4 7.6v8.8L12 20.8l7.6-4.4V7.6L12 3.2Z"
            fill="#683D87"
            fillOpacity="0.16"
            stroke="#683D87"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 13.5 12 10l3.5 3.5M12 10v6"
            stroke="#0BC2AA"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "PostgreSQL":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <ellipse cx="12" cy="6.5" rx="7" ry="2.8" fill="#336791" fillOpacity="0.2" stroke="#336791" strokeWidth="1.7" />
          <path d="M5 6.5v5c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8v-5" stroke="#336791" strokeWidth="1.7" />
          <path d="M5 11.5v5.5c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8v-5.5" stroke="#336791" strokeWidth="1.7" />
        </svg>
      );

    case "Redis":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path d="m12 4 8 3.6-8 3.6-8-3.6L12 4Z" fill="#FF4438" fillOpacity="0.25" stroke="#FF4438" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="m4 11.8 8 3.6 8-3.6M4 15.8l8 3.6 8-3.6" stroke="#FF4438" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "pgvector":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path d="M6.5 17.5 12 5.5l6.5 10.5-12 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="12" cy="5.5" r="2.2" fill="#7C3AED" />
          <circle cx="6.5" cy="17.5" r="2.2" fill="#2563EB" />
          <circle cx="18.5" cy="16" r="2.2" fill="#2563EB" />
        </svg>
      );

    case "Pinecone":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path
            d="M12 3.2 18.2 7.8l-2.2 10.8-4 2.2-4-2.2L5.8 7.8 12 3.2Z"
            fill="#10B981"
            fillOpacity="0.16"
            stroke="#10B981"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M12 3.2v17.6M6.6 9.1l5.4 3.4 5.4-3.4" stroke="#10B981" strokeWidth="1.4" />
        </svg>
      );

    case "ClickHouse":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path d="M5.5 6v12" stroke="#EF4444" strokeWidth="2.4" strokeLinecap="round" />
          <path
            d="M9.8 6v12M14.2 6v12M18.5 9.5v5"
            stroke="#F59E0B"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      );

    case "SQLite":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <rect x="4.5" y="3.8" width="15" height="16.4" rx="3" fill="#0F80CC" fillOpacity="0.14" stroke="#0F80CC" strokeWidth="1.6" />
          <path d="M8.5 9h7M8.5 12.5h7M8.5 16h4.5" stroke="#0F80CC" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );

    case "AWS":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path
            d="M6.8 14H17a3.2 3.2 0 0 0 .4-6.37A4.8 4.8 0 0 0 8 7a3.8 3.8 0 0 0-1.2 7Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M5 17.2c4.4 2.6 9.6 2.6 14 0M16.8 16.4l2.2.8-.8 2.2"
            stroke="#FF9900"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "GCP":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path
            d="M12 6.2a5.8 5.8 0 0 1 5.45 3.82A3.8 3.8 0 0 1 17 17.5H7.2a4 4 0 0 1-.82-7.92A5.8 5.8 0 0 1 12 6.2Z"
            stroke="#4285F4"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12.5" r="2.1" fill="#34A853" />
          <path d="M8.2 9.4A5.4 5.4 0 0 1 15.8 9" stroke="#EA4335" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );

    case "Docker":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path
            d="M5.2 9.5h3v3h-3v-3Zm3.8 0h3v3H9v-3Zm3.8 0h3v3h-3v-3ZM9 5.8h3v3H9v-3Z"
            fill="#1D63ED"
          />
          <path
            d="M3.2 13.8h15c1.5 0 2.6-.7 3-1.8-.3 4.2-3.4 7.5-8.7 7.5-4.9 0-8.4-2.2-9.3-5.7Z"
            fill="#1D63ED"
            fillOpacity="0.18"
            stroke="#1D63ED"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "Kubernetes":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <polygon
            points="12,3.2 18.8,6.5 20.5,14 15.8,19.8 8.2,19.8 3.5,14 5.2,6.5"
            fill="#326CE5"
            fillOpacity="0.14"
            stroke="#326CE5"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="2.8" stroke="#326CE5" strokeWidth="1.6" />
          <path
            d="M12 4.5v4.5M12 15v4.5M5.5 13.5l3.7-1M14.8 12.5l3.7 1M7.8 6.8l2.5 2.7M16.2 6.8l-2.5 2.7"
            stroke="#326CE5"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );

    case "Terraform":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path d="m4.5 4.8 4.6 2.6v5.2l-4.6-2.6V4.8Z" fill="#7B42BC" />
          <path d="m10 8 4.6 2.6v5.2L10 13.2V8Z" fill="#7B42BC" />
          <path d="m10 14.2 4.6 2.6v4.8L10 19v-4.8Z" fill="#7B42BC" />
          <path d="m15.5 10.6 4.5-2.6v5.2l-4.5 2.6v-5.2Z" fill="#5C4EE5" />
        </svg>
      );

    case "Sentry":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <path
            d="M12.9 4.5a1.1 1.1 0 0 0-1.9 0L4.4 16a1.1 1.1 0 0 0 .95 1.65H8.5v-1.8H6.8l5.2-9 3.9 6.8a6.8 6.8 0 0 0-5.4 3.9h2.1a4.7 4.7 0 0 1 4.2-2.1c.55 0 1.1.1 1.6.28l.65 1.12a1.1 1.1 0 0 0 .95.55 1.1 1.1 0 0 0 .95-1.65L12.9 4.5Z"
            fill="#6C5FC7"
          />
        </svg>
      );

    case "Gemini API":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <defs>
            <linearGradient id="ts-gemini-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          <path
            d="M12 2.8c.9 5.2 4 8.3 9.2 9.2-5.2.9-8.3 4-9.2 9.2-.9-5.2-4-8.3-9.2-9.2 5.2-.9 8.3-4 9.2-9.2Z"
            fill="url(#ts-gemini-grad)"
          />
        </svg>
      );

    case "OpenAI":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M12 3.5a4.5 4.5 0 0 1 4.4 3.6 4.5 4.5 0 0 1 2.2 6.1 4.5 4.5 0 0 1-4.4 6.8 4.5 4.5 0 0 1-6.2-1.8 4.5 4.5 0 0 1-2.2-6.1A4.5 4.5 0 0 1 12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "LangGraph":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <circle cx="6.2" cy="12" r="2.4" stroke="#2563EB" strokeWidth="1.7" />
          <circle cx="17.8" cy="6.5" r="2.4" stroke="#7C3AED" strokeWidth="1.7" />
          <circle cx="17.8" cy="17.5" r="2.4" stroke="#2563EB" strokeWidth="1.7" />
          <path
            d="M8.5 10.8 15.5 7.7M8.5 13.2l7 3.1M17.8 9v6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "n8n":
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
          <circle cx="5.2" cy="12" r="2.2" stroke="#EA4B71" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="2.2" stroke="#EA4B71" strokeWidth="1.7" />
          <circle cx="18.8" cy="7" r="2.2" stroke="#EA4B71" strokeWidth="1.7" />
          <circle cx="18.8" cy="17" r="2.2" stroke="#EA4B71" strokeWidth="1.7" />
          <path
            d="M7.4 12h2.4M14 11l3-3M14 13l3 3"
            stroke="#EA4B71"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export function TechStackSection() {
  const [activeTech, setActiveTech] = useState<string>(TECH_CATEGORIES[0].id);
  const prefersReducedMotion = useReducedMotion();

  const activeCategory =
    TECH_CATEGORIES.find((c) => c.id === activeTech) ?? TECH_CATEGORIES[0];

  return (
    <section
      id="tech-stack"
      className="relative scroll-mt-20 border-t border-border/70 bg-background py-16 sm:py-20 lg:py-28"
    >
      {/* Subtle architectural tint */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(37,99,235,0.045),rgba(124,58,237,0.025)_50%,transparent_75%)] dark:bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(59,130,246,0.09),rgba(139,92,246,0.05)_50%,transparent_75%)]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:pl-14 md:pr-8 lg:pl-16 lg:pr-10 min-[1400px]:px-8">
        {/* Editorial Header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center justify-center gap-2.5">
            <span
              aria-hidden="true"
              className="h-[2px] w-6 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue dark:text-blue-400">
              ENGINEERING STACK
            </span>
            <span
              aria-hidden="true"
              className="h-[2px] w-6 rounded-full bg-gradient-to-l from-brand-blue to-brand-violet"
            />
          </div>

          <h2 className="text-3xl font-extrabold tracking-[-0.035em] text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            Built with the{" "}
            <span className="bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent">
              Right Technology.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[54ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
            We choose reliable, modern technologies across every layer so
            products launch cleanly, run fast, and stay effortless to maintain.
          </p>
        </Reveal>

        {/* Lightweight Interactive Category Tabs + Balanced Technology Logo Grid */}
        <Tabs
          value={activeTech}
          onValueChange={(val) => {
            if (typeof val === "string") setActiveTech(val);
          }}
          className="mt-10 gap-8 sm:mt-12"
        >
          <TabsList className="mx-auto flex h-auto w-full max-w-3xl flex-wrap items-center justify-center gap-x-1 gap-y-1 rounded-none border-x-0 border-t-0 border-b border-border/80 bg-transparent p-0 sm:gap-x-5">
            {TECH_CATEGORIES.map((category) => {
              const isActive = activeTech === category.id;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className={cn(
                    "relative rounded-none px-3 py-3 text-xs font-semibold tracking-tight text-muted-foreground transition-colors hover:text-foreground sm:px-3.5 sm:text-sm",
                    "data-[active]:border-transparent data-[active]:bg-transparent data-[active]:text-brand-blue data-[active]:shadow-none dark:data-[active]:text-blue-400"
                  )}
                >
                  <span>{category.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="tech-tab-underline"
                      transition={
                        prefersReducedMotion ? { duration: 0 } : SPRINGS.tactile
                      }
                      className="absolute inset-x-1 -bottom-px h-[2px] rounded-full bg-gradient-to-r from-brand-blue to-brand-violet"
                    />
                  )}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value={activeTech} className="outline-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.24,
                  ease: EASE_CURVE,
                }}
                className="mx-auto max-w-6xl"
              >
                <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-5">
                  {activeCategory.items.map((tech, idx) => (
                    <motion.div
                      key={`${activeCategory.id}-${tech.name}`}
                      initial={
                        prefersReducedMotion ? false : { opacity: 0, y: 10 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: prefersReducedMotion ? 0 : 0.22,
                        delay: prefersReducedMotion ? 0 : idx * 0.035,
                        ease: EASE_CURVE,
                      }}
                      whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                      className="group flex flex-col items-center justify-center rounded-2xl border border-border/75 bg-card px-4 py-7 text-center transition-[border-color,box-shadow,background-color] duration-250 hover:border-brand-blue/35 hover:bg-surface-subtle/70 hover:shadow-lg hover:shadow-brand-navy/5 dark:hover:shadow-black/35 sm:py-8"
                    >
                      <div className="flex size-16 items-center justify-center rounded-2xl border border-border/50 bg-surface-subtle transition-transform duration-250 group-hover:scale-105 sm:size-[4.5rem]">
                        <OfficialTechLogo
                          name={tech.name}
                          className="size-10 sm:size-11"
                        />
                      </div>

                      <h3 className="mt-4 text-sm font-bold tracking-tight text-foreground transition-colors group-hover:text-brand-blue dark:group-hover:text-blue-400 sm:text-[15px]">
                        {tech.name}
                      </h3>

                      <span className="mt-1 text-[11px] font-medium text-muted-foreground">
                        {tech.role}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
