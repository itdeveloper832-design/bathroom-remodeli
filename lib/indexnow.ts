import axios from "axios";
import { siteConfig } from "./site-config";


const INDEXNOW_API_URL = "https://api.indexnow.org/indexnow";
const API_KEY = "da8afcc853004a0e818760ae4b6b668e";
const HOST = "arzhomeremodeling.com";
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;

/**
 * Submits a list of URLs to the IndexNow API.
 * @param urls A single URL or an array of URLs to submit.
 * @param retry Whether to retry once on failure.
 */
export async function submitToIndexNow(urls: string | string[], retry = true): Promise<boolean> {
  const urlList = Array.isArray(urls) ? urls : [urls];
  
  // Ensure absolute URLs and remove duplicates
  const uniqueUrls = [...new Set(urlList)]
    .map(url => url.startsWith("http") ? url : `${siteConfig.url}${url.startsWith("/") ? "" : "/"}${url}`)
    .slice(0, 100);
  
  if (uniqueUrls.length === 0) {
    console.log("[IndexNow] No URLs to submit.");
    return true;
  }

  // NOTE: the old cPanel PHP fallback (/submit-indexnow.php) is gone —
  // on Vercel there is no PHP, so submissions always go direct to the
  // IndexNow API below (works from server actions and the browser).

  const data = {
    host: HOST,
    key: API_KEY,
    keyLocation: KEY_LOCATION,
    urlList: uniqueUrls,
  };

  try {
    console.log(`[IndexNow] Submitting ${uniqueUrls.length} URLs to IndexNow...`);
    const response = await axios.post(INDEXNOW_API_URL, data, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
    
    if (response.status === 200 || response.status === 202) {
      console.log(`[IndexNow] Success! Submitted: ${uniqueUrls.join(", ")}`);
      return true;
    } else {
      throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error: any) {
    console.error(`[IndexNow] Submission failed:`, error.response?.data || error.message);
    
    if (retry) {
      console.log(`[IndexNow] Retrying submission...`);
      return submitToIndexNow(uniqueUrls, false);
    }
    
    return false;
  }
}


