import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// 1. Brand Icon: Writing (Page 8 - Paper sheet with pencil)
export const BrandWritingIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Paper Sheet */}
    <path d="M10 8C10 6.89543 10.8954 6 12 6H30L40 16V40C40 41.1046 39.1046 42 38 42H12C10.8954 42 10 41.1046 10 40V8Z" />
    <path d="M30 6V16H40" />
    {/* Text Lines */}
    <path d="M16 16H24" />
    <path d="M16 22H32" />
    <path d="M16 28H28" />
    <path d="M16 34H24" />
    {/* Pencil */}
    <path d="M26 38L38 26L42 30L30 42L25 43L26 38Z" fill="currentColor" fillOpacity="0.1" />
  </svg>
);

// 2. Brand Icon: Reading (Page 8 - Person reading open book)
export const BrandReadingIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Person Head & Shoulders */}
    <circle cx="24" cy="14" r="6" />
    <path d="M14 26C14 23 18 22 24 22C30 22 34 23 34 26" />
    {/* Open Book */}
    <path d="M24 30V42M24 30C20 28 14 28 8 30V42C14 40 20 40 24 42M24 30C28 28 34 28 40 30V42C34 40 28 40 24 42" />
  </svg>
);

// 3. Brand Icon: Speaking (Page 8 - Profile of head with speech lines & bubble)
export const BrandSpeakingIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Head Profile */}
    <path d="M22 10C16 10 11 15 11 21V28C11 31 13 33 16 34V40H20L22 36H24C28 36 30 33 30 30V28L32 27L28 24C29 23 30 21 30 19C30 14 26 10 22 10Z" />
    {/* Sound Waves emerging from mouth */}
    <path d="M33 22C34.5 23.5 34.5 25.5 33 27" />
    <path d="M36 20C38.5 22.5 38.5 26.5 36 29" />
    {/* Small Speech Bubble */}
    <path d="M35 12H43C44.1 12 45 12.9 45 14V20C45 21.1 44.1 22 43 22H40L37 25V22H35C33.9 22 33 21.1 33 20V14C33 12.9 33.9 12 35 12Z" />
  </svg>
);

// 4. Brand Icon: Listening (Page 8 - Ear with speech bubble)
export const BrandListeningIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Human Ear Contour */}
    <path d="M24 16C24 10.4772 28.4772 6 34 6C39.5228 6 44 10.4772 44 16C44 26 36 30 36 36C36 39.3137 33.3137 42 30 42C26.6863 42 24 39.3137 24 36" />
    <path d="M32 14C32 12.8954 32.8954 12 34 12C36.2091 12 38 13.7909 38 16C38 20 34 22 34 25" />
    {/* Speech Bubble with Lines next to ear */}
    <path d="M6 14C6 11.7909 7.79086 10 10 10H20C22.2091 10 24 11.7909 24 14V24C24 26.2091 22.2091 28 20 28H14L8 32V28H10C7.79086 28 6 26.2091 6 24V14Z" />
    <path d="M10 16H20" />
    <path d="M10 20H17" />
  </svg>
);
