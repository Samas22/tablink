import Layout from "../components/Layout";
import styles from "../styles/Pages.module.css";

const documents = [
  {
    title: "Cartilha de Direitos Digitais",
    cid: "QmXyz...9aB2",
    size: "1.2 MB",
  },
  {
    title: "História do Orçamento Participativo",
    cid: "QmAbc...3dE4",
    size: "3.4 MB",
  },
  { title: "Guia de Segurança Web3", cid: "QmDef...7gH8", size: "0.8 MB" },
];

const topics = [
  "Soberania de dados",
  "Governo digital aberto",
  "Economia descentralizada",
  "Identidade auto-soberana",
];

export default function Conhecimento() {
  return (
    <Layout title="Conhecimento Descentralizado">
      <p className={styles.intro}>
        Acesse, compartilhe e colabore com conhecimento armazenado de forma
        descentralizada, com suporte de IA para síntese e descoberta.
      </p>

      <section className={styles.section}>
        <h3>Busca assistida por IA</h3>
        <div className={styles.card}>
          <input
            type="text"
            placeholder="Pergunte sobre soberania, cidadania ou conhecimento..."
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              border: "1px solid #cbd5e1",
              marginBottom: "0.75rem",
            }}
          />
          <button className={styles.button}>Perguntar</button>
          <p className={styles.textMuted} style={{ marginTop: "0.75rem" }}>
            Exemplo: “Como funciona uma identidade descentralizada?”
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h3>Documentos no IPFS</h3>
        <ul className={styles.list}>
          {documents.map((doc) => (
            <li key={doc.cid}>
              <div>
                <strong>{doc.title}</strong>
                <div className={styles.textMuted}>
                  CID: {doc.cid} · {doc.size}
                </div>
              </div>
              <button className={styles.button}>Acessar</button>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h3>Tópicos em destaque</h3>
        <div className={styles.grid}>
          {topics.map((topic) => (
            <div key={topic} className={styles.card}>
              <h4>{topic}</h4>
              <p className={styles.textMuted}>Explore artigos e discussões.</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
