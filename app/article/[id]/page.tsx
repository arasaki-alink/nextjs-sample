"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { useEffect, useState } from "react";


export default function Page({ params }: { params: { id: string } }) {
  const currentId = params.id;

  const hasVisited = typeof window !== 'undefined' && !!localStorage.getItem('hasVisited');

  const [text, setText] = useState('はじめまして');

  useEffect(() => {
    // if (!hasVisited) {
    //   localStorage.setItem("hasVisited", "true");
    // }
    if (!hasVisited) {
      localStorage.setItem("hasVisited", "true");
    } else {
      setText('また会えて嬉しいです')
    }
  }, []);

  // const text = hasVisited ? 'また会えて嬉しいです' : 'はじめまして';

  return (
    <section>
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.isSXG=false`,
        }}
        data-issxg-var=""
      ></Script>

      <h1>My Post: {currentId}</h1>

      <div className="js-container">
      <p id="guest">{text}、 hogeさん</p>
      </div>

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
      {/* 元のタグ
      <script>
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
      </scrip>

      <div id="tenki-ad-container-1"></div>

      <script>
      window._tenkiAd = window._tenkiAd || [];
      _tenkiAd.push({
        container: 'tenki-ad-container-1'
      });
      </script> */}
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
      <div id="tenki-ad-container-1"></div>
      <Script strategy="afterInteractive" id="_tenkiAdsBody">
        {`
          window._tenkiAd = window._tenkiAd || [];
          window._tenkiAd.push({
            container: 'tenki-ad-container-1'
          });
        `}
      </Script>
      <p>
        <Image src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" alt="dog" width="200" height="300"></Image>
      </p>
    </section>
  );
}
