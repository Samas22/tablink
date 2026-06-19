import Link from "next/link";
import styles from "../styles/Layout.module.css";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/soberania", label: "Soberania" },
  { href: "/cidadania", label: "Cidadania" },
  { href: "/conexoes", label: "Conexões" },
  { href: "/conhecimento", label: "Conhecimento" },
  { href: "/perfil", label: "Perfil" },
];

export default function Layout({ children, title }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.logo}>◉</span>
          <div>
            <h1 className={styles.title}>TabLink</h1>
            <p className={styles.tagline}>
              Conector Humano Universal para Soberania e Cidadania
            </p>
          </div>
        </div>
        <nav className={styles.nav}>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        {title && <h2 className={styles.pageTitle}>{title}</h2>}
        {children}
      </main>

      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()} TabLink — protótipo de aplicação. Nenhum
          dado real é armazenado nesta demonstração.
        </p>
      </footer>
    </div>
  );
}
