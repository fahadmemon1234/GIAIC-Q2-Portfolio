import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export const metadata = {
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
};
export default function StudioPage() {
  return <NextStudio config={config} />;
}
