import type { Metadata } from "next";
import DedicatedAreaPage, {
  getDedicatedAreaMetadata,
} from "@/components/neighborhood/dedicated-area-page";

const PATH = "/bathroom-remodeling-cooper-commons/";
const SLUG = "cooper-commons";

const meta = getDedicatedAreaMetadata(SLUG, PATH)!;

export const metadata: Metadata = {title: "Bathroom Remodeling Cooper Commons | Chandler AZ | ARZ",description: "Bathroom remodeling for Cooper Commons, Chandler, AZ homes with showers, tubs, tile, vanities, flooring, and complete updates. Request an estimate.",
  alternates: { canonical: meta.canonical },
  openGraph: {title: "Bathroom Remodeling Cooper Commons | Chandler AZ | ARZ",description: "Bathroom remodeling for Cooper Commons, Chandler, AZ homes with showers, tubs, tile, vanities, flooring, and complete updates. Request an estimate.",
    url: meta.canonical,
    type: "website",
  },
};

export default function CooperCommonsPage() {
  return <DedicatedAreaPage areaSlug={SLUG} path={PATH} />;
}
