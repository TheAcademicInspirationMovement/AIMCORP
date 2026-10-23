import {
  InitiativePage,
  initiativeMetadata,
} from "@/components/site/InitiativePage";
import { getInitiative } from "@/lib/content/initiatives";

const initiative = getInitiative("astria");

export const metadata = initiativeMetadata(initiative);

export default function Page() {
  return <InitiativePage initiative={initiative} />;
}
