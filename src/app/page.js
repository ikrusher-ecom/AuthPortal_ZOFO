import Image from "next/image";
import styles from "./page.module.css";
import CheckCodeForm from "./components/CheckCodeForm";
import "./globals.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="formApp">
        <h2 className="formTitle">Verify Product</h2>
        <p>
          Please locate the authentication label and gently scratch off its
          coating to reveal the security code.
        </p>
        <CheckCodeForm />
      </div>
    </main>
  );
}
