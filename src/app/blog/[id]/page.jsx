import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
            quis!
          </h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            possimus delectus, tempore omnis molestias dicta aspernatur dolor.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Fisecode</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam unde,
          doloremque labore adipisci aspernatur quia hic, iure quos ratione
          inventore optio vitae! Iure quasi exercitationem libero vel vero, eos
          expedita, id enim, quod maiores quisquam. Ex ad ab facere commodi
          officia odit, iusto velit officiis veniam culpa consequuntur possimus
          temporibus.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad
          distinctio nulla quibusdam, ipsum cumque saepe ab deserunt fugit
          minima!
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae qui
          numquam deserunt ipsa iusto corrupti odio, recusandae mollitia
          explicabo vero! Accusantium, fugit. Maiores voluptas velit, atque
          beatae fuga officia praesentium.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
