import Layout from "../components/Layout";
import styles from "../styles/Pages.module.css";

const credentials = [
  { name: "Identidade Nacional", issuer: "Governo Demo", status: "verified" },
  {
    name: "Titularidade de Residência",
    issuer: "Cartório Digital",
    status: "verified",
  },
  {
    name: "Diploma de Curso Livre",
    issuer: "Universidade ABC",
    status: "pending",
  },
];

const wallets = [
  { type: "DID Principal", value: "did:tablink:0x9a8b...7c3d" },
  { type: "Endereço Ethereum", value: "0x71C...9A2E" },
  { type: "Chave Pública", value: "pub-ed25519-****f21a" },
];

export default function Soberania() {
  return (
    <Layout title="Soberania Digital">
      <p className={styles.intro}>
        Controle seus dados, credenciais e identidade digital sem depender de
        intermediários centralizados.
      </p>

      <section className={styles.section}>
        <h3>Identidade Descentralizada (DID)</h3>
        <div className={styles.grid}>
          {wallets.map((wallet) => (
            <div key={wallet.type} className={styles.card}>
              <h4>{wallet.type}</h4>
              <code>{wallet.value}</code>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h3>Credenciais Verificáveis</h3>
        <ul className={styles.list}>
          {credentials.map((cred) => (
            <li key={cred.name}>
              <div>
                <strong>{cred.name}</strong>
                <div className={styles.textMuted}>
                  Emitido por: {cred.issuer}
                </div>
              </div>
              <span
                className={`${styles.badge} ${
                  cred.status === "verified"
                    ? styles.badgeVerified
                    : styles.badgePending
                }`}
              >
                {cred.status === "verified" ? "Verificado" : "Pendente"}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h3>Ações</h3>
        <button className={styles.button}>
          Verificar nova credencial
        </button>{" "}
        <button className={styles.button}>Exportar chaves</button>
      </section>
    </Layout>
  );
}
