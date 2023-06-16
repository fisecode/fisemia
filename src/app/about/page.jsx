import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            voluptates repellendus temporibus vel porro fugiat fuga expedita
            laboriosam molestias magnam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellendus explicabo nesciunt error amet hic,
            dolor vitae dolores consectetur necessitatibus quo magni autem eaque
            repudiandae maxime nam consequuntur.
            <br />
            <br />
            Fugiat rerum expedita quia explicabo hic accusantium vero ratione
            sed? Illo, obcaecati dolor minima veniam delectus aut, ullam optio
            libero perspiciatis quam nisi minus adipisci eum maxime consectetur
            non! Tenetur, quod nesciunt non iure consequatur neque assumenda
            illo fugit sequi mollitia eos aperiam, deleniti modi.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsam
            voluptatibus architecto itaque quasi error, aut laboriosam sapiente
            rerum dolor mollitia cum accusantium facere sequi eligendi illo
            cupiditate facilis, nam quas. Saepe recusandae doloremque explicabo
            illum suscipit quasi unde non.
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
