import { useGlobal } from "../context/GlobalContext"

export default function Experience() {
    const { t } = useGlobal()

    return (
        <main className="page">
            <h1>{t("experience.title")}</h1>
            <div className="experience-list">
                {t("experience.items").map((job, index) => (
                    <div key={index} className="experience-item" style={{ marginBottom: "2rem" }}>
                        <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{job.role} @ {job.company}</h2>
                        <span style={{ fontSize: "0.9rem", color: "var(--subtext)", display: "block", marginBottom: "0.5rem" }}>
                            {job.period}
                        </span>
                        <p>{job.description}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}
