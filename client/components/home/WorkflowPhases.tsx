import type { ReactNode } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { PageContainer } from "@/components/layout/PageContainer";
import styles from "./WorkflowPhases.module.css";

const svg = (d: ReactNode) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
);

const phases = [
  {
    id: "reception",
    icon: svg(
      <>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4h6v3H9zM9 13l2 2 4-4" />
      </>
    ),
    steps: ["eligibility", "qr", "queue", "notify"],
  },
  {
    id: "archiver",
    icon: svg(
      <>
        <rect x="3" y="4" width="18" height="5" rx="1" />
        <path d="M5 9v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9M10 13h4" />
      </>
    ),
    steps: ["collection", "compliance", "storage"],
  },
  {
    id: "teller",
    icon: svg(
      <>
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
        <rect x="3" y="14" width="4" height="6" rx="1.5" />
        <rect x="17" y="14" width="4" height="6" rx="1.5" />
      </>
    ),
    steps: ["calling", "tracking", "analytics"],
  },
  {
    id: "backOffice",
    icon: svg(
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" />
      </>
    ),
    steps: ["assignment", "tracking", "collaboration", "completion"],
  },
] as const;

export default function WorkflowPhases() {
  const { t } = useTranslation();

  return (
    <section className={styles.section} aria-labelledby="workflow-phases-title">
      <PageContainer flush>
        <header className={styles.header}>
          <h2 id="workflow-phases-title" className={styles.heading}>{t("home.workflow.title")}</h2>
          <p className={styles.sub}>{t("home.workflow.subtitle")}</p>
        </header>

        <div className={styles.grid}>
          {phases.map((phase) => {
            const base = `home.workflow.${phase.id}` as const;
            return (
              <article key={phase.id} className={styles.card}>
                <div className={styles.cardHead}>
                  <span className={styles.iconTile}>{phase.icon}</span>
                  <div>
                    <h3 className={styles.title}>{t(`${base}.title`)}</h3>
                    {phase.id === "backOffice" && <span className={styles.tag}>{t(`${base}.tag`)}</span>}
                  </div>
                </div>

                <p className={styles.desc}>{t(`${base}.description`)}</p>

                <ol className={styles.steps}>
                  {phase.steps.map((step, i) => (
                    <li key={step} className={styles.step}>
                      <span className={styles.node}>{i + 1}</span>
                      <div>
                        <h4 className={styles.stepTitle}>{t(`${base}.steps.${step}.title`)}</h4>
                        <p className={styles.stepText}>{t(`${base}.steps.${step}.text`)}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </article>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
