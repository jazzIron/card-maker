import React, { useEffect, useState } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Preivew from "../preview/preivew";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Ellie",
      company: "Samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "test@gmail.com",
      message: "go for it",
      fileName: "ellie",
      fileURL: null,
    },
    {
      id: "2",
      name: "tester",
      company: "Samsung",
      theme: "light",
      title: "Software Engineer",
      email: "test@gmail.com",
      message: "go for it",
      fileName: "ellie",
      fileURL: null,
    },
    {
      id: "3",
      name: "goosu",
      company: "Samsung",
      theme: "colorful",
      title: "Software Engineer",
      email: "test@gmail.com",
      message: "go for it",
      fileName: "ellie",
      fileURL: null,
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preivew cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
