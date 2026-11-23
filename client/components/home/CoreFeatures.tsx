import type { ReactNode } from "react";
import styles from "./CoreFeatures.module.css";

import { useTranslation } from "@/hooks/use-translation";
import { PageContainer } from "@/components/layout/PageContainer";

type Feature = { id: "reception" | "virtualWaiting" | "liveDelivery"; icon: ReactNode };

const svg = (d: ReactNode) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
);

const features: Feature[] = [
  {
    id: "reception",
    icon: svg(
      <>
        <path d="M3 9a2 2 0 0 0 0 6v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a2 2 0 0 1 0-6V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z" />
        <path d="M14 5v14" strokeDasharray="2 3" />
        <path d="M7.5 10h3M7.5 14h3" />
      </>
    ),
  },
  {
    id: "virtualWaiting",
    icon: svg(
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  {
    id: "liveDelivery",
    icon: svg(
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4M7 11l3-3 2 2 4-4" />
      </>
    ),
  },
];

export default function CoreFeatures() {
  const { t } = useTranslation();

  return (
    <section className={styles.section} aria-labelledby="core-features-title">
      <PageContainer flush>
        <header className={styles.header}>
          <h2 id="core-features-title" className={styles.heading}>{t("home.features.title")}</h2>
          <p className={styles.sub}>{t("home.features.subtitle")}</p>
        </header>

        <div className={styles.grid}>
          {features.map((f) => (
            <article key={f.id} className={styles.card}>
              <span className={styles.iconTile}>{f.icon}</span>
              <h3 className={styles.title}>{t(`home.features.${f.id}.title`)}</h3>
              <p className={styles.text}>{t(`home.features.${f.id}.description`)}</p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
