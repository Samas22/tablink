import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Pages.module.css";

const modules = [
  {
    href: "/soberania",
    title: "🛡️ Soberania Digital",
    description:
      "Gerencie sua identidade soberana, credenciais verificáveis e chaves criptográficas de forma descentralizada.",
  },
  {
    href: "/cidadania",
    title: "🏛️ Cidadania Participativa",
    description:
      "Participe de votações, petições e decisões comunitárias com transparência e rastreabilidade.",
  },
  {
    href: "/conexoes",
    title: "🤝 Conexões Humanas",
    description:
      "Construa sua rede de confiança, grupos de interesse e canais de colaboração humana.",
  },
  {
    href: "/conhecimento",
    title: "📚 Conhecimento Descentralizado",
    description:
      "Armazene e consulte conhecimento via IPFS, com auxílio de IA generativa e curadoria colaborativa.",
  },
];

export default function Home() {
  return (
    <Layout title="Painel TabLink">
      <p className={styles.intro}>
        Bem-vindo ao <strong>TabLink</strong>, o conector humano universal para
        soberania e cidadania. Este protótipo demonstra uma visão integrada de
        identidade, governo participativo, conexões e conhecimento.
      </p>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statValue}>1</div>
          <div className={styles.statLabel}>Identidade ativa</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>4</div>
          <div className={styles.statLabel}>Módulos em preview</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>0</div>
          <div className={styles.statLabel}>Conexões verificadas</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>∞</div>
          <div className={styles.statLabel}>Possibilidades</div>
        </div>
      </div>

      <h3 style={{ color: "#16213e", marginBottom: "1rem" }}>
        Explore os módulos
      </h3>
      <div className={styles.grid}>
        {modules.map((module) => (
          <Link
            key={module.href}
            href={module.href}
            className={styles.cardLink}
          >
            <article className={styles.card}>
              <h3>{module.title}</h3>
              <p>{module.description}</p>
            </article>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
