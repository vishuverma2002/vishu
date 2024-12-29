"use client";

import React from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import styles from "./toprest.module.css";
import { useRef } from "react";
import { BiSolidHeartCircle } from "react-icons/bi";
import Image from "next/image";
const restaurant = [
  {
    id: "1",
    name: "",
    path: "/images/img1.jpeg",
    heading: "Hotel Sai Nath and Sai Restaurant",
    sub: "North Indian, Chinese,...",
    place: "Chhindwara Locality",
    rating: "4.3 - 45-50 mins",
  },
  {
    id: "2",
    path: "/images/img9.jpeg",
    heading: "Dev Internatioanl",
    sub: "North Indian, Chinese,Fast Food... ",
    place: "Mohan Nagar",
    rating: "4.4 - 45-50 mins",
  },
  {
    id: "3",
    path: "/images/img2.jpeg",
    heading: "Bakery World",
    sub: "Bakery, Ice-cream, Snacks,...",
    place: "Parasia Road",
    rating: "4.3 - 45-50 mins",
  },
  {
    id: "4",
    path: "/images/img3.jpeg",
    heading: "The Fusion Lounge",
    sub: "North Indian,South Indian, Chinese,...",
    place: "Railway Staiton",
    rating: "4.1 - 55-60 mins",
  },
  {
    id: "5",
    path: "/images/img4.jpeg",
    heading: "Adil Hotel",
    sub: "North Indian, Biryani, Tandoor,...",
    place: "Chhindwara Locality",
    rating: "4.3 - 35-40 mins",
  },
  {
    id: "6",
    path: "/images/img5.jpeg",
    heading: "Satkar Restaurant",
    sub: "North Indian, South Indian, Indian...",
    place: "Crossing Republick",
    rating: "4.3 - 45-50 mins",
  },
  {
    id: "7",
    name: "",
    path: "/images/momos.jpg",
    heading: "Hotel Sai Nath and Sai Restaurant",
    sub: "North Indian, Chinese,...",
    place: "Chhindwara Locality",
    rating: "4.3 - 45-50 mins",
  },
  {
    id: "8",
    path: "/images/waffles.jpg",
    heading: "The Belgian Waffle Co.",
    sub: "Waffle, Desserts, Ice Cream,...",
    place: "Mohan Nagar",
    rating: "4.5 - 40-45 mins",
  },
  {
    id: "9",
    path: "/images/img8.jpeg",
    heading: "Raajbagh Restaurant",
    sub: "North Indian, South Indian, Indian...",
    place: "Chhindwara Locality",
    rating: "3.7 - 50-55 mins",
  },
];
const Toprest = () => {
  const scrollContainerRef = useRef(null);

  // const scrollLeft = () => {
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollBy({
  //       left: -550,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // const scrollRight = () => {
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollBy({
  //       left: 550,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  const handleScroll = (direction) => {
    scrollContainerRef.current?.scrollBy({
      left: direction * 550,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div style={{ marginLeft: "120px" }}>
            <h1>Top restaurant chains in Ghaziabad</h1>
          </div>
          <div className={styles.icon}>
            <FaRegArrowAltCircleLeft onClick={() => handleScroll(-1)} />
            <FaRegArrowAltCircleRight onClick={() => handleScroll(1)} />
          </div>
        </div>
        <div className={styles.imaged} ref={scrollContainerRef}>
          <div className={styles.imageSection}>
            {restaurant.map((cat, index) => {
              return (
                <div key={index} className={styles.imageCard}>
                  <Image
                    height={200}
                    width={200}
                    src={cat.path}
                    alt={cat.name}
                    className={styles.image}
                  />
                  <div key={cat.name} className={styles.heading}>
                    <h2>{cat.heading}</h2>
                    <div className={styles.rating}>
                      <BiSolidHeartCircle
                        style={{ color: "green", marginTop: "5px" }}
                      />
                      {cat.rating}
                    </div>
                    <div className={styles.sub}>{cat.sub}</div>
                    <div className={styles.place}> {cat.place}</div>
                  </div>
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
    </>
  );
};

export default Toprest;

// "use client";

// import React, { useState } from "react";
// import {
//   FaRegArrowAltCircleLeft,
//   FaRegArrowAltCircleRight,
// } from "react-icons/fa";
// import styles from "./toprest.module.css";
// import { useRef } from "react";
// import { BiSolidHeartCircle } from "react-icons/bi";
// import Image from "next/image";

// const restaurant = [
//   {
//     id: "1",
//     path: "/images/img1.jpeg",
//     heading: "Hotel Sai Nath and Sai Restaurant",
//     sub: "North Indian, Chinese,...",
//     place: "Chhindwara Locality",
//     rating: "4.3 - 45-50 mins",
//     likes: 0, // Add a likes field
//   },
//   {
//     id: "2",
//     path: "/images/img9.jpeg",
//     heading: "Dev Internatioanl",
//     sub: "North Indian, Chinese,Fast Food... ",
//     place: "Mohan Nagar",
//     rating: "4.4 - 45-50 mins",
//     likes: 0, // Add a likes field
//   },
//   {
//     id: "3",
//     path: "/images/img2.jpeg",
//     heading: "Bakery World",
//     sub: "Bakery, Ice-cream, Snacks,...",
//     place: "Parasia Road",
//     rating: "4.3 - 45-50 mins",
//     likes: 0, // Add a likes field
//   },
//   {
//     id: "4",
//     path: "/images/img3.jpeg",
//     heading: "The Fusion Lounge",
//     sub: "North Indian,South Indian, Chinese,...",
//     place: "Railway Staiton",
//     rating: "4.1 - 55-60 mins",
//     likes: 0, // Add a likes field
//   },
//   {
//     id: "5",
//     path: "/images/img4.jpeg",
//     heading: "Adil Hotel",
//     sub: "North Indian, Biryani, Tandoor,...",
//     place: "Chhindwara Locality",
//     rating: "4.3 - 35-40 mins",
//     likes: 0, // Add a likes field
//   },
//   {
//     id: "6",
//     path: "/images/img5.jpeg",
//     heading: "Satkar Restaurant",
//     sub: "North Indian, South Indian, Indian...",
//     place: "Crossing Republick",
//     rating: "4.3 - 45-50 mins",
//     likes: 0, // Add a likes field
//   },
//   {
//     id: "7",
//     path: "/images/momos.jpg",
//     heading: "Hotel Sai Nath and Sai Restaurant",
//     sub: "North Indian, Chinese,...",
//     place: "Chhindwara Locality",
//     rating: "4.3 - 45-50 mins",
//     likes: 0, // Add a likes field
//   },
//   {
//     id: "8",
//     path: "/images/waffles.jpg",
//     heading: "The Belgian Waffle Co.",
//     sub: "Waffle, Desserts, Ice Cream,...",
//     place: "Mohan Nagar",
//     rating: "4.5 - 40-45 mins",
//     likes: 0, // Add a likes field
//   },
//   {
//     id: "9",
//     path: "/images/img8.jpeg",
//     heading: "Raajbagh Restaurant",
//     sub: "North Indian, South Indian, Indian...",
//     place: "Chhindwara Locality",
//     rating: "3.7 - 50-55 mins",
//     likes: 0, // Add a likes field
//   },
// ];

// const Toprest = () => {
//   const scrollContainerRef = useRef(null);

//   const [restaurants, setRestaurants] = useState(restaurant); // Use state for restaurants

//   const handleLike = (id) => {
//     // Update the likes count for the specific restaurant
//     setRestaurants((prevRestaurants) =>
//       prevRestaurants.map((rest) =>
//         rest.id === id ? { ...rest, likes: rest.likes + 1 } : rest
//       )
//     );
//   };

//   const handleScroll = (direction) => {
//     scrollContainerRef.current?.scrollBy({
//       left: direction * 550,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <>
//       <div className={styles.container}>
//         <div className={styles.header}>
//           <div style={{ marginLeft: "120px" }}>
//             <h1>Top restaurant chains in Ghaziabad</h1>
//           </div>
//           <div className={styles.icon}>
//             <FaRegArrowAltCircleLeft onClick={() => handleScroll(-1)} />
//             <FaRegArrowAltCircleRight onClick={() => handleScroll(1)} />
//           </div>
//         </div>
//         <div className={styles.imaged} ref={scrollContainerRef}>
//           <div className={styles.imageSection}>
//             {restaurants.map((cat, index) => {
//               return (
//                 <div key={index} className={styles.imageCard}>
//                   <Image
//                     height={200}
//                     width={200}
//                     src={cat.path}
//                     alt={cat.name}
//                     className={styles.image}
//                   />
//                   <div key={cat.name} className={styles.heading}>
//                     <h2>{cat.heading}</h2>
//                     <div className={styles.rating}>
//                       <BiSolidHeartCircle
//                         style={{
//                           color: "green",
//                           marginTop: "5px",
//                           cursor: "pointer",
//                         }}
//                         onClick={() => handleLike(cat.id)} // Increment likes when clicked
//                       />
//                       {cat.likes} {/* Show the number of likes */}
//                     </div>
//                     <div className={styles.sub}>{cat.sub}</div>
//                     <div className={styles.place}>{cat.place}</div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <hr
//           style={{
//             margin: "25px 0px",
//             border: "1px solid #cbcbcb",
//             boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//           }}
//         />
//       </div>
//     </>
//   );
// };

// export default Toprest;
