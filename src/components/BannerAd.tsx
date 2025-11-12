import React, { useEffect, useState } from 'react';

const defaultAd = {
  title: "Google Play",
  description: "Descubre nuestras aplicaciones cubanas en Google Play.",
  link: "https://play.google.com/store/apps/developer?id=KUANTYK"
};

export const BannerAd: React.FC = () => {
  const [ad, setAd] = useState<typeof defaultAd | null>(null);

  useEffect(() => {
    const fetchAd = async () => {
      try {
        const res = await fetch("https://ads-backend-blue.vercel.app/public/find");
        const data = await res.json();

        if (data && data.title && data.description && data.adlink) {
          setAd({
            title: data.title,
            description: data.description,
            link: data.adlink
          });
        } else {
          setAd(defaultAd);
        }
      } catch (error) {
        setAd(defaultAd);
      }
    };

    fetchAd();
  }, []);

  if (!ad) return null;

  return (
    <div className="p-4 w-full flex justify-center">
      <div className="relative w-full max-w-screen-lg">
        <a
          href={ad.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl bg-black overflow-hidden shadow-md transition-transform hover:scale-[1.02]"
        >
          <div className="p-4 text-start">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-1">{ad.title}</h3>
            <p className="text-muted-foreground text-sm">{ad.description}</p>
          </div>
        </a>
        <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold px-2 py-1 rounded shadow">
          AD
        </span>
      </div>
    </div>
  );
};
