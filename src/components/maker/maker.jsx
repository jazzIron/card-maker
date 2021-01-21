import React, { useEffect } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Preivew from "../preview/preivew";

const Maker = ({ authService }) => {
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
        <Editor />
        <Preivew />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
