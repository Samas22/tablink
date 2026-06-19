import Layout from "../components/Layout";
import styles from "../styles/Pages.module.css";

const contacts = [
  { name: "Ana Costa", role: "Mentora de Cidadania", trust: 95 },
  { name: "Bruno Lima", role: "Desenvolvedor Web3", trust: 88 },
  { name: "Carla Dias", role: "Ativista Local", trust: 92 },
];

const groups = [
  { name: "Vizinhança Solidária", members: 42 },
  { name: "DevDAO Local", members: 128 },
  { name: "Educação Cívica", members: 75 },
];

export default function Conexoes() {
  return (
    <Layout title="Conexões Humanas">
      <p className={styles.intro}>
        Conecte-se com pessoas e comunidades alinhadas aos seus valores,
        construindo redes de confiança verificáveis.
      </p>

      <section className={styles.section}>
        <h3>Contatos de confiança</h3>
        <ul className={styles.list}>
          {contacts.map((contact) => (
            <li key={contact.name}>
              <div>
                <strong>{contact.name}</strong>
                <div className={styles.textMuted}>{contact.role}</div>
              </div>
              <span className={`${styles.badge} ${styles.badgeVerified}`}>
                Confiança {contact.trust}%
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h3>Comunidades</h3>
        <div className={styles.grid}>
          {groups.map((group) => (
            <div key={group.name} className={styles.card}>
              <h4>{group.name}</h4>
              <p>{group.members} membros</p>
              <button className={styles.button}>Entrar</button>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <button className={styles.button}>Convidar novo contato</button>{" "}
        <button className={styles.button}>Criar comunidade</button>
      </section>
    </Layout>
  );
}
