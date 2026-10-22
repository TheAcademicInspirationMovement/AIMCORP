type IconName = "initiatives" | "engineering" | "capacity";

/** Restrained geometric marks — deliberately not generic technology icons. */
const paths: Record<IconName, React.ReactNode> = {
  initiatives: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  engineering: (
    <>
      <path d="M4.5 12 9 7.5M4.5 12 9 16.5M19.5 12 15 7.5M19.5 12 15 16.5" />
      <path d="M12 4.5v15" />
    </>
  ),
  capacity: (
    <>
      <path d="M4.5 19.5v-5M10.5 19.5v-9M16.5 19.5v-13" />
      <path d="M3 19.5h18" />
    </>
  ),
};

export function CapabilityIcon({ name }: { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      {paths[name]}
    </svg>
  );
}
