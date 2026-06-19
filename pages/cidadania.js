import Layout from "../components/Layout";
import styles from "../styles/Pages.module.css";

const polls = [
  { title: "Orçamento participativo 2026", votes: 842, goal: 1000 },
  { title: "Nova praça no bairro Norte", votes: 512, goal: 600 },
  { title: "Horário de coleta seletiva", votes: 230, goal: 400 },
];

const petitions = [
  { title: "Mais ciclovias no centro", signatures: 1240, target: 2000 },
  { title: "Wi-Fi gratuito nos parques", signatures: 890, target: 1000 },
];

export default function Cidadania() {
  return (
    <Layout title="Cidadania Participativa">
      <p className={styles.intro}>
        Exerça sua cidadania de forma ativa: vote em propostas, apoie petições e
        acompanhe decisões coletivas.
      </p>

      <section className={styles.section}>
        <h3>Votações em andamento</h3>
        <div className={styles.grid}>
          {polls.map((poll) => (
            <div key={poll.title} className={styles.card}>
              <h4>{poll.title}</h4>
              <p className={styles.textMuted}>
                {poll.votes} de {poll.goal} votos
              </p>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${(poll.votes / poll.goal) * 100}%` }}
                />
              </div>
              <p style={{ marginTop: "0.75rem" }}>
                <button className={styles.button}>Votar</button>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h3>Petições populares</h3>
        <ul className={styles.list}>
          {petitions.map((petition) => (
            <li key={petition.title}>
              <div>
                <strong>{petition.title}</strong>
                <div className={styles.textMuted}>
                  {petition.signatures} de {petition.target} assinaturas
                </div>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{
                      width: `${(petition.signatures / petition.target) * 100}%`,
                    }}
                  />
                </div>
              </div>
              <button className={styles.button}>Assinar</button>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
