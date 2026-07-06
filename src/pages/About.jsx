import { useGlobal } from "../context/GlobalContext"

export default function About() {
    const { t } = useGlobal()

    return (
        <main className="page" style={{ maxWidth: "800px", margin: "0 auto", paddingBottom: "4rem" }}>
            <h1 style={{ marginBottom: "2rem" }}>{t("about.title")}</h1>
            {t("about.description").split("\n").map((paragraph, i) => (
                <p key={i} style={{ lineHeight: "1.6", marginBottom: "1.5rem" }}>
                    {paragraph}
                </p>
            ))}

            <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
                <img 
                    src="/IMG_6018.jpg" 
                    alt="Profile" 
                    style={{ 
                        width: "200px", 
                        height: "200px", 
                        borderRadius: "50%", 
                        objectFit: "cover" 
                    }} 
                />
            </div>
        </main>
    )
}
