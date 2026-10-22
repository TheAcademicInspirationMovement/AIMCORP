type IconName = "community" | "participatory" | "methods";

/** Restrained geometric marks — deliberately not generic technology icons. */
const paths: Record<IconName, React.ReactNode> = {
  // A group, drawn as peers rather than a hierarchy.
  community: (
    <>
      <circle cx="12" cy="5.5" r="2.75" />
      <circle cx="5.5" cy="16.5" r="2.75" />
      <circle cx="18.5" cy="16.5" r="2.75" />
      <path d="M10.3 7.9 7.2 14.1M13.7 7.9l3.1 6.2M8.25 16.5h7.5" />
    </>
  ),
  // Shared ground between two parties.
  participatory: (
    <>
      <circle cx="9" cy="12" r="5.75" />
      <circle cx="15" cy="12" r="5.75" />
    </>
  ),
  // A route around the obstacle rather than straight at it.
  methods: (
    <>
      <path d="M3 18.5h4c3.2 0 3.2-13 6.4-13H21" />
      <path d="M17.8 2.4 20.9 5.5l-3.1 3.1" />
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
