import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { PageContainer } from "@/components/layout/PageContainer";
import styles from "./Hero.module.css";

const queue = [
  { ticket: "A-024", service: "Cadastral Services", teller: "Teller 1", time: "04:12", state: "ok", labelKey: "home.previewOnTime" },
  { ticket: "A-025", service: "Rights Services", teller: "Teller 3", time: "08:41", state: "warn", labelKey: "home.previewNearLimit" },
  { ticket: "A-021", service: "Fixed Property Services", teller: "Teller 2", time: "12:07", state: "late", labelKey: "home.previewOverStandard" },
] as const;

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />

      <PageContainer flush className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.badge}>
            <span className={styles.dot} />
            {t("home.badgeText")}
          </span>

          <h1 className={styles.title}>
            {t("home.heroTitle")}{" "}
            <span className={styles.gradient}>{t("home.heroTitleSpan")}</span>
          </h1>

          <p className={styles.lead}>{t("home.heroDesc")}</p>

          <div className={styles.actions}>
            <Link to="/reception" className={styles.primary}>
              {t("home.launchBtn")}
              <ArrowRight width={16} height={16} aria-hidden="true" />
            </Link>
            <Link to="/display" className={styles.secondary}>
              {t("home.heroDisplayBtn")}
            </Link>
          </div>

          <dl className={styles.stats}>
            <div>
              <dt>{t("home.statWithinStandard")}</dt>
              <dd>92%</dd>
            </div>
            <div>
              <dt>{t("home.statAvgServiceTime")}</dt>
              <dd>3m 48s</dd>
            </div>
            <div>
              <dt>{t("home.statOpenCases")}</dt>
              <dd>27</dd>
            </div>
          </dl>
        </div>

        <div className={styles.visual} aria-label={t("home.previewLabel")}>
          <div className={styles.card}>
            <header className={styles.cardHead}>
              <div>
                <p className={styles.cardKicker}>{t("home.nowServing")}</p>
                <p className={styles.cardTicket}>A-024</p>
              </div>
              <span className={styles.live}>
                <span className={styles.liveDot} /> {t("home.previewLive")}
              </span>
            </header>

            <div className={styles.timer}>
              <div className={styles.timerRow}>
                <span>{t("home.previewTimeOnCase")}</span>
                <strong>04:12 / 10:00</strong>
              </div>
              <div className={styles.track}>
                <div className={styles.fill} />
              </div>
            </div>

            <ul className={styles.list}>
              {queue.map((q) => (
                <li key={q.ticket} className={styles.row}>
                  <span className={styles.rowTicket}>{q.ticket}</span>
                  <span className={styles.rowMain}>
                    <span className={styles.rowService}>{q.service}</span>
                    <span className={styles.rowMeta}>{q.teller}</span>
                  </span>
                  <span className={styles.rowTime}>{q.time}</span>
                  <span className={`${styles.chip} ${styles[q.state]}`}>{t(q.labelKey)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.float}>
            <span className={styles.floatIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>
              <strong>{t("home.previewReportReady")}</strong>
              <small>{t("home.previewDailySummary")}</small>
            </span>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
