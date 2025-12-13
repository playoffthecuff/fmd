import type { IconProps } from "./types";

export function SignInIcon({ width = "1.25em", height = "1.25em", strokeWidth = 2 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={strokeWidth}
    >
      <path d="M2 12H14.5" />
      <path d="M9.5 17L14.5 12" />
      <path d="M14.5 12L9.5 7" />
      <path d="M12 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H12" />
    </svg>
  );
}
