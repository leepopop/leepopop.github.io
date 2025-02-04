import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [showSection2, setShowSection2] = useState(false);
  const [activeDay, setActiveDay] = useState('day1');

  const startItinerary = () => {
    setShowSection2(true);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Family Trip</title>
        <meta name="description" content="Family trip to Tokyo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!showSection2 ? (
          <div className={styles.section1}>
            <Image src="/main-image.jpg" alt="Main Image" layout="fill" className={styles.mainImage} />
            <div className={styles.logo}>
              <Image src="/logo.png" alt="Logo" width={200} height={100} />
            </div>
            <button className={styles.goButton} onClick={startItinerary}>GO</button>
          </div>
        ) : (
          <div className={styles.section2}>
            <div className={styles.navButtons}>
              <button onClick={() => setActiveDay('day1')}>Day 1</button>
              <button onClick={() => setActiveDay('day2')}>Day 2</button>
              <button onClick={() => setActiveDay('day3')}>Day 3</button>
              <button onClick={() => setActiveDay('day4')}>Day 4</button>
              <button onClick={() => setActiveDay('day5')}>Day 5</button>
            </div>
            <div className={styles.dayContent} style={{ display: activeDay === 'day1' ? 'block' : 'none' }}>測試行程 Day 1</div>
            <div className={styles.dayContent} style={{ display: activeDay === 'day2' ? 'block' : 'none' }}>測試行程 Day 2</div>
            <div className={styles.dayContent} style={{ display: activeDay === 'day3' ? 'block' : 'none' }}>測試行程 Day 3</div>
            <div className={styles.dayContent} style={{ display: activeDay === 'day4' ? 'block' : 'none' }}>測試行程 Day 4</div>
            <div className={styles.dayContent} style={{ display: activeDay === 'day5' ? 'block' : 'none' }}>測試行程 Day 5</div>
          </div>
        )}
      </main>
    </div>
  );
}
