import { useGlobal } from "../context/GlobalContext"

export default function About() {
    const { t } = useGlobal()

    return (
        <main className="page" style={{ maxWidth: "800px", margin: "0 auto", paddingBottom: "4rem" }}>
            <h1 style={{ marginBottom: "2rem" }}>{t("about.title")}</h1>
            <p style={{ lineHeight: "1.6", marginBottom: "2rem" }}>
                {t("about.description")}
            </p>

            <section style={{ marginBottom: "2rem" }}>
                <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{t("about.nextSteps.title")}</h2>
                <p style={{ lineHeight: "1.6" }}>
                    {t("about.nextSteps.description")}
                </p>
            </section>

            <section>
                <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{t("about.jobOpportunities.title")}</h2>
                <p style={{ lineHeight: "1.6" }}>
                    {t("about.jobOpportunities.description")}
                </p>
            </section>
        </main>
    )
}
