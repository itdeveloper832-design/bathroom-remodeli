import type { Metadata } from "next";
import DedicatedAreaPage, {
  getDedicatedAreaMetadata,
} from "@/components/neighborhood/dedicated-area-page";

const PATH = "/bathroom-remodeling-downtown-chandler/";
const SLUG = "downtown-chandler";

const meta = getDedicatedAreaMetadata(SLUG, PATH)!;

export const metadata: Metadata = {title: "Bathroom Remodeling Downtown Chandler | Local Guide",description: "Bathroom remodeling for Downtown Chandler homes with showers, tubs, tile, vanities, flooring, and complete updates. Request an estimate.",
  alternates: { canonical: meta.canonical },
  openGraph: {title: "Bathroom Remodeling Downtown Chandler | Local Guide",description: "Bathroom remodeling for Downtown Chandler homes with showers, tubs, tile, vanities, flooring, and complete updates. Request an estimate.",
    url: meta.canonical,
    type: "website",
  },
};

export default function DowntownChandlerPage() {
  return <DedicatedAreaPage areaSlug={SLUG} path={PATH} />;
}
