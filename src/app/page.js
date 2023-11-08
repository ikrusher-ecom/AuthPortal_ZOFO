import Image from "next/image";
import styles from "./page.module.css";
import CheckCodeForm from "./components/CheckCodeForm";
import "./globals.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="formApp">
        <h2 className="formTitle">Enter Authenticity Code here</h2>
        <CheckCodeForm />
      </div>
    </main>
  );
}
