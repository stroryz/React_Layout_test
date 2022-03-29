import React from 'react';
import styles from './card.css';

export function Card() {
  return (
    <li className={styles.card}>
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img className={styles.avatar} src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="avatar" />
            <a href="#user-url" className={styles.username}>Jack Jones</a>
          </div>
          <span className={styles.cratedAt}>
            <span className={styles.publishedLabel}>published </span>
            4 hours ago</span>
        </div>
        <h2 className={styles.title}>
          <a href="#post-urs" className={styles.postLink}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
        </h2>
      </div>
      <div className={styles.preview}>
        <img src="https://64.media.tumblr.com/33c95952d1f0d8a76003f990dc3f0a7b/tumblr_pd6b6eSHAc1vvcp1fo1_1280.jpg" alt="" className={styles.previewImg}/>
      </div>
      <div className={styles.menu}>
        <button className={styles.menuButton}>
          <svg width="5" height="20" viewBox="0 0 5 20" fill="none">
            <circle cx="2.5" cy="2.5" r="2.5" fill="#d9d9d9"/>
            <circle cx="2.5" cy="10" r="2.5" fill="#d9d9d9"/>
            <circle cx="2.5" cy="17.5" r="2.5" fill="#d9d9d9"/>
          </svg>
        </button>
      </div>
      <div className={styles.controls}>
        <div className={styles.karmaCounter}>
          <button className={styles.up}>
            <svg width="19" height="10" viewBox="0 0 19 10" fill="none">
              <path d="M9.5 0L0 10H19L9.5 0Z" fill="#c4c4c4" />
            </svg>
          </button>
          <span className={styles.karmaValue}>234</span>
          <button className={styles.down}>
            <svg className={styles.down} width="19" height="10" viewBox="0 0 19 10" fill="none">
              <path d="M9.5 0L0 10H19L9.5 0Z" fill="#c4c4c4" />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
}
