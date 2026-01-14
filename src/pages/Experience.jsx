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
                        <ul style={{ paddingLeft: "1.2rem", lineHeight: "1.6" }}>
                            {Array.isArray(job.description) ? (
                                job.description.map((point, i) => (
                                    <li key={i} style={{ marginBottom: "0.5rem" }}>{point}</li>
                                ))
                            ) : (
                                <li>{job.description}</li>
                            )}
                        </ul>
                    </div>
                ))}
            </div>
        </main>
    )
}
