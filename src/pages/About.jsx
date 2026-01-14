import { useGlobal } from "../context/GlobalContext"

export default function About() {
    const { t } = useGlobal()

    return (
        <main className="page">
            <h1>{t("about.title")}</h1>
            <p>
                {t("about.description")}
            </p>
        </main>
    )
}
