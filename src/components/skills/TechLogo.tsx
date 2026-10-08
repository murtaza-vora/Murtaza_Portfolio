import React from "react";

interface TechLogoProps {
  name: string;
  size?: number;
  className?: string;
}

export function TechLogo({ name, size = 64, className = "" }: TechLogoProps) {
  const n = name.toLowerCase();

  if (n.includes("react")) {
    return (
      <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" className={className}>
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  if (n.includes("next")) {
    return (
      <svg width={size} height={size} viewBox="0 0 180 180" className={className} fill="none">
        <circle cx="90" cy="90" r="90" fill="#000" />
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="#fff" />
        <path d="M115 54H127V126H115V54Z" fill="#fff" />
      </svg>
    );
  }

  if (n.includes("python")) {
    return (
      <svg width={size} height={size} viewBox="0 0 110 110" className={className}>
        <path d="M54.5 5C29.4 5 30.6 15.9 30.6 15.9L30.7 27.2H55v3.4H21.2S5 28.7 5 54.3s14.2 24.8 14.2 24.8l8.5-.1v-12s-.5-14.3 14-14.3h24.2s13.5.2 13.5-13.1V18.2S82.4 5 54.5 5zm-14 8.2c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7z" fill="#3776AB"/>
        <path d="M55.5 105c25.1 0 23.9-10.9 23.9-10.9l-.1-11.3H55v-3.4h33.8S105 81.3 105 55.7s-14.2-24.8-14.2-24.8l-8.5.1v12s.5 14.3-14 14.3H44.1s-13.5-.2-13.5 13.1v21.5S27.6 105 55.5 105zm14-8.2c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7z" fill="#FFD43B"/>
      </svg>
    );
  }

  if (n.includes("javascript")) {
    return (
      <svg width={size} height={size} viewBox="0 0 630 630" className={className}>
        <rect width="630" height="630" fill="#F7DF1E"/>
        <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.4-38.1-25.4-17.3 0-28.3 11-28.3 25.4 0 17.8 11 24.9 36.4 35.9l14.8 6.3c50.3 21.6 78.7 43.6 78.7 93 0 53.3-41.9 82.5-98.1 82.5-54.99 0-90.5-26.2-106.8-60.9zm-209.98 5.5c-9.28 15.2-21.6 24.9-40.6 24.9-20.3 0-33-10.1-33-37.2v-194.2h54.99v190.4c0 9.3 3.8 13.5 10.6 13.5 4.6 0 7.6-1.7 8-2.1z"/>
      </svg>
    );
  }

  if (n.includes("typescript")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="16" fill="#3178C6"/>
        <path d="M72.5 86.8h11.2V62.4H98V52H58.1v10.4h14.4v24.4zm-28-2.6c3.4 3.1 8.5 5 14.1 5 10.8 0 17.2-5.7 17.2-14.3 0-7.8-5-12.2-14.2-15.6l-3.3-1.2c-5.7-2.1-7.8-4.3-7.8-7.7 0-3.6 3.1-6.1 8.2-6.1 4.5 0 8.4 1.6 11.2 4.1l5.4-7.8c-4.4-3.7-10.3-5.5-16.7-5.5-11.2 0-17.5 6.2-17.5 14.7 0 7.6 5 12 13.7 15.3l3.3 1.2c5.9 2.2 8.3 4.5 8.3 8.1 0 4.1-3.6 6.8-9.4 6.8-5.7 0-10.3-2.3-13.8-6.1l-5.6 7.2z" fill="#fff"/>
      </svg>
    );
  }

  if (n.includes("tailwind")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#06B6D4">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C9.337,13.382,7.976,12,6.001,12z" />
      </svg>
    );
  }

  if (n.includes("figma")) {
    return (
      <svg width={size} height={size} viewBox="0 0 38 57" className={className}>
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1abcfe"/>
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0acf83"/>
        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#ff7262"/>
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e"/>
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#a259ff"/>
      </svg>
    );
  }

  if (n.includes("git")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#F05032">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.529-.527-.667-1.29-.413-1.944L12.796 8.93v5.798c.32.17.604.415.82.723.72.719.72 1.886 0 2.605-.719.719-1.881.719-2.6 0-.721-.719-.721-1.886 0-2.605.285-.286.643-.472 1.026-.549V8.895c-.383-.077-.741-.263-1.026-.549-.529-.527-.667-1.29-.413-1.944L7.844 3.642 0.454 11.032c-.604.604-.604 1.582 0 2.188l10.48 10.478c.604.604 1.582.604 2.186 0l10.426-10.428c.604-.603.604-1.582 0-2.188z" />
      </svg>
    );
  }

  // Default clean geometric monospace badge for AI, Handlebars, SQL, Data
  return (
    <div
      style={{ width: size, height: size }}
      className={`rounded-2xl border border-black/10 bg-neutral-100 flex items-center justify-center font-mono font-bold text-black ${className}`}
    >
      <span className="text-xl tracking-tight">{name.slice(0, 2).toUpperCase()}</span>
    </div>
  );
}
