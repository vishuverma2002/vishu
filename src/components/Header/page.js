"use client";

import React from "react";
import { useState } from "react";
import styles from "./header.module.css";
import { RxCaretDown, RxCross1 } from "react-icons/rx";
import Navbar from "../Navbar/page";
import Categories from "../Categories/page";
import Location from "../Locations/page";
import Locations from "../Locations/page";

const Header = () => {
  const [toggled, setToggled] = useState(false);

  const sideMenu = () => {
    setToggled(true);
  };

  const hideSideMenu = () => {
    setToggled(false);
  };

  return (
    <>
      <div
        onClick={hideSideMenu}
        className={styles.overlay}
        style={{
          opacity: toggled ? 1 : 0,
          visibility: toggled ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={styles.sideMenu}
          style={{ left: toggled ? "0%" : "-100%" }}
        >
          <div className={styles.location}>
            <h1 className={styles.heading}>GPS Location... </h1>
            <div className={styles.close}>
              <RxCross1 onClick={hideSideMenu} />
            </div>
            <Locations />
          </div>
        </div>
      </div>
      <header className={styles.header}>
        <div className={styles.heads}>
          <div className={styles.logo}>
            <img src="/images/logo.png" alt="" />
          </div>
          <div className={styles.text}>
            <span className={styles.highlight}>
              <b onClick={sideMenu}>Other</b>
            </span>
            <div className={styles.new}></div>
            {/* Jodhpur, Rajasthan, India */}
            <div className={styles.icons}>
              <RxCaretDown onClick={sideMenu} />
            </div>
          </div>
          <Navbar />
        </div>
      </header>

      {/* <section>
        <Categories />
      </section> */}
    </>
  );
};

export default Header;

// className={styles.heading}
