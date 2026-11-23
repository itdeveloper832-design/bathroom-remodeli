"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/site-config";

export function PhoneTracker() {
  useEffect(() => {
    // 1. Persist Initial Traffic Source for Session
    try {
      if (!sessionStorage.getItem("arz_initial_referrer")) {
        const referrer = document.referrer || "";
        sessionStorage.setItem("arz_initial_referrer", referrer);

        const urlParams = new URLSearchParams(window.location.search);
        let source = "direct";

        if (urlParams.get("gclid")) {
          source = "google_paid";
        } else if (urlParams.get("utm_source")) {
          source = urlParams.get("utm_source") || "campaign";
        } else if (referrer.includes("google.com") || referrer.includes("google.ca") || referrer.includes("google.co.uk") || referrer.includes("google.")) {
          source = "google_organic";
        } else if (referrer.includes("bing.com") || referrer.includes("yahoo.com") || referrer.includes("duckduckgo.com")) {
          source = "organic_other";
        } else if (referrer) {
          try {
            source = `referral:${new URL(referrer).hostname}`;
          } catch {
            source = "referral";
          }
        }
        sessionStorage.setItem("arz_traffic_source", source);
      }
    } catch {
      // Ignore storage errors in restricted iframe environments
    }

    // 2. Global Event Listener for Phone Link Clicks
    const handlePhoneClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const phoneLink = target.closest<HTMLAnchorElement>('a[href^="tel:"]');
      if (!phoneLink) return;

      const href = phoneLink.getAttribute("href") || "";
      const rawTel = href.replace(/^tel:/, "").trim() || siteConfig.phoneClean;
      const ctaText = (phoneLink.innerText || phoneLink.ariaLabel || "Phone Call").trim();

      const trafficSource = sessionStorage.getItem("arz_traffic_source") || "direct";
      const isGoogleOrganic = trafficSource === "google_organic";

      // Detect location of CTA element on the page
      let ctaLocation = "body_content";
      if (phoneLink.closest("header") || phoneLink.closest("aside")) {
        ctaLocation = "header";
      } else if (phoneLink.closest("footer")) {
        ctaLocation = "footer";
      } else if (phoneLink.closest('[aria-label="Hero section"]') || phoneLink.closest(".hero-content")) {
        ctaLocation = "hero";
      } else if (phoneLink.closest("#contact") || window.location.pathname.includes("/contact")) {
        ctaLocation = "contact_page";
      } else if (phoneLink.closest(".fixed")) {
        ctaLocation = "sticky_bottom_bar";
      }

      // Record in GA4 if available
      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "phone_call_click", {
          event_category: "contact",
          event_label: ctaText,
          phone_number: rawTel,
          traffic_source: trafficSource,
          is_google_organic: isGoogleOrganic,
          cta_location: ctaLocation,
          page_location: window.location.href,
          page_path: window.location.pathname,
        });

        // Also track as a primary Lead conversion in GA4
        (window as any).gtag("event", "generate_lead", {
          value: 1,
          currency: "USD",
          lead_type: "phone_call",
          traffic_source: trafficSource,
          is_google_organic: isGoogleOrganic,
        });
      }

      // Record in window.dataLayer (GTM support)
      if (typeof window !== "undefined") {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: "phone_call_click",
          traffic_source: trafficSource,
          is_google_organic: isGoogleOrganic,
          phone_number: rawTel,
          cta_location: ctaLocation,
          cta_text: ctaText,
          page_path: window.location.pathname,
        });
      }

      // Record in Umami Analytics if present
      if (typeof window !== "undefined" && (window as any).umami?.track) {
        (window as any).umami.track("phone_call_click", {
          source: trafficSource,
          location: ctaLocation,
          page: window.location.pathname,
        });
      }

      console.log("[Phone Tracking Verified]", {
        phone_number: rawTel,
        traffic_source: trafficSource,
        is_google_organic: isGoogleOrganic,
        cta_location: ctaLocation,
        cta_text: ctaText,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", handlePhoneClick, true);
    return () => {
      document.removeEventListener("click", handlePhoneClick, true);
    };
  }, []);

  return null;
}
