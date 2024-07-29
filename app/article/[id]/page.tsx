"use client";

import Link from "next/link";
import Script from "next/script";

export default function Page({ params }: { params: { id: string } }) {
  const currentId = params.id;

  return (
    <div>
      <div>My Post: {currentId}</div>
      <p>
        <Link href={`/article/${currentId === "123" ? "456" : "123"}`}>
          {currentId === "123" ? "456" : "123"}Linkコンポーネントリンク
        </Link>
        
      </p>
      <p>
        <a href={`/article/${currentId === "123" ? "456" : "123"}`}>
          {currentId === "123" ? "456" : "123"}aタグリンク
        </a>
      </p>
      <div id="tenki-ad-container-1"></div>
      <Script strategy="afterInteractive" id="_tenkiAdsBody">
        {`
          window._tenkiAd = window._tenkiAd || [];
          window._tenkiAd.push({
            container: 'tenki-ad-container-1'
          });
        `}
      </Script>
      <Script strategy="afterInteractive" id="_tenkiAdsSrc">
        {`
          !function (e, f, u, i) {
            if (!document.getElementById(i)) {
              e.async = 1;
              e.src = u;
              e.id = i;
              f.parentNode.insertBefore(e, f)
            }
          }(document.createElement('script'),
          document.getElementsByTagName('script')[0],
          'https://arasaki-alink.github.io/nextjs-sample/ads/test-ad.js',
          '_tenkiAds')
        `}
      </Script>
    </div>
  );
}
