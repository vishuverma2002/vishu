"use client";

import styles from "./categories.module.css";
import { useState, useRef } from "react";
import React from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Toprest from "../Toprest/page";
import Online from "../Online/page";
import Image from "next/image";
const mainImage = [
  { id: "1", name: "Burger", path: "/images/Burger.jpeg" },
  { id: "2", name: "Biryani", path: "/images/Biryani1.jpeg" },
  { id: "3", name: "Cakes", path: "/images/Cakes.jpeg" },
  { id: "4", name: "Coffee", path: "/images/Idli.jpeg" },
  { id: "5", name: "Ice-cream", path: "/images/Ice_Creams.jpeg" },
  { id: "6", name: "Khichdi", path: "/images/Khichdi.jpeg" },
  { id: "7", name: "Momos", path: "/images/Gulab_Jamun.jpeg" },
  { id: "8", name: "Noodles", path: "/images/Noodles.jpeg" },
  { id: "9", name: "Chinease", path: "/images/North_Indian_4.jpeg" },
  { id: "10", name: "Pakoda", path: "/images/South_Indian_4.jpeg" },
  { id: "11", name: "Paratha", path: "/images/Paratha.jpeg" },
  { id: "12", name: "Pizza", path: "/images/Pizza.jpeg" },
  { id: "13", name: "Salad", path: "/images/Salad.jpeg" },
  { id: "14", name: "Wraps", path: "/images/Rolls.jpeg" },
  { id: "15", name: "Soft-Drinks", path: "/images/Poori.jpeg" },
];

const Categories = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const nextImage = () => {
  //   if (currentIndex < mainImage.length - 5) {
  //     setCurrentIndex(currentIndex + 1);
  //   } else {
  //     setCurrentIndex(0);
  //   }
  // };

  // const prevImage = () => {
  //   if (currentIndex > 0) {
  //     setCurrentIndex(currentIndex - 1);
  //   } else {
  //     setCurrentIndex(mainImage.length - 5);
  //   }
  // };

  const scrollRef = useRef(null);

  const handleScroller = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction * 380,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div style={{ marginLeft: "120px" }}>
            <h1>Whats on your Mind!</h1>
          </div>
          <div className={styles.icon}>
            <FaRegArrowAltCircleLeft onClick={() => handleScroller(-1)} />
            <FaRegArrowAltCircleRight onClick={() => handleScroller(1)} />
          </div>
        </div>

        <div className={styles.imaged} ref={scrollRef}>
          <div className={styles.imageSection}>
            {mainImage.map((cat) => {
              return (
                <div key={cat.id} className={styles.imageCard}>
                  <Image
                    width={200}
                    height={200}
                    src={cat.path}
                    alt={cat.name}
                    className={styles.image}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <hr
          style={{
            margin: "25px 0px",
            border: "1px solid #cbcbcb",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>
      <Toprest />
      <Online />
    </>
  );
};

export default Categories;
