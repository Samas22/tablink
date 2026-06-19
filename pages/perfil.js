import Layout from "../components/Layout";
import styles from "../styles/Pages.module.css";

export default function Perfil() {
  return (
    <Layout title="Seu Perfil">
      <p className={styles.intro}>
        Gerencie suas preferências, dados públicos e configurações de segurança
        do TabLink.
      </p>

      <section className={styles.section}>
        <div className={styles.twoColumns}>
          <div className={styles.card}>
            <h3>Dados públicos</h3>
            <p>
              <strong>Nome:</strong> Usuário Demo
            </p>
            <p>
              <strong>Handle:</strong> @demo.tablink
            </p>
            <p>
              <strong>Localização:</strong> Brasil
            </p>
          </div>

          <div className={styles.card}>
            <h3>Preferências</h3>
            <p>
              <label>
                <input type="checkbox" defaultChecked /> Receber alertas de
                votações
              </label>
            </p>
            <p>
              <label>
                <input type="checkbox" defaultChecked /> Receber convites de
                conexão
              </label>
            </p>
            <p>
              <label>
                <input type="checkbox" /> Modo anônimo em pesquisas
              </label>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h3>Segurança</h3>
        <div className={styles.card}>
          <p>
            Último login: <strong>Hoje, 10:23</strong>
          </p>
          <p className={styles.textMuted}>
            Autenticação descentralizada via wallet connect (mock).
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            <button className={styles.button}>Conectar nova wallet</button>{" "}
            <button className={styles.button}>Revocar sessões</button>
          </p>
        </div>
      </section>
    </Layout>
  );
}
