import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1>Welcome to My Blockchain Portfolio</h1>
        <p>I'm a Blockchain Developer specializing in smart contracts and decentralized applications (DApps).</p>
      </main>
      <Footer />
    </div>
  );
}
