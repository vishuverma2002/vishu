import { useState } from "react";
import React from "react";
import style from "./popup.module.css";
import { RxCross1 } from "react-icons/rx";

const filterCategories = [
  {
    title: "Sort",
    options: [
      "Relevance (Default)",
      "Delivery Time",
      "Rating",
      "Cost: Low to High",
      "Cost: High to Low",
    ],
  },
  {
    title: "Cuisines",
    options: ["Chinese", "Indian", "Mexican", "Italian", "Thai", "Japanese"],
  },
  {
    title: "Ratings",
    options: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
  },
  {
    title: "Veg/Non-Veg",
    options: ["Veg", "Non-Veg"],
  },
  {
    title: "Offers",
    options: ["Discounts", "Buy 1 Get 1 Free", "Combo Offers"],
  },
  {
    title: "Cost for two",
    options: ["Less than ₹300", "₹300 - ₹600", "More than ₹600"],
  },
];

const FilterModal = ({ isOpen, onClose, filters, setFilters }) => {
  const [activeCategory, setActiveCategory] = useState(filterCategories[0]);

  if (!isOpen) return null;

  const handleFilterChange = (option) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [activeCategory.title]: option,
    }));
  };

  return (
    <div className={style.emodaloverlay}>
      <div className={style.modalcontent}>
        <div className={style.header}>
          <h2>Filter</h2>
          <RxCross1 onClick={onClose} className={style.btnClose} />
        </div>

        <div className={style.modalBody}>
          <div className={style.leftSidebar}>
            {filterCategories.map((category, index) => (
              <div
                key={index}
                className={`${style.categoryItem} ${
                  activeCategory.title === category.title ? style.active : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category.title}
              </div>
            ))}
          </div>

          <div className={style.rightContent}>
            <h3 className={style.rightTitle}>Sort by</h3>
            {activeCategory.options.map((option, idx) => (
              <div key={idx} className={style.optionItem}>
                <input
                  type="radio"
                  name={activeCategory.title}
                  value={option}
                  checked={filters[activeCategory.title] === option}
                  onChange={() => handleFilterChange(option)}
                  className={style.radioInput}
                />
                <label className={style.optionLabel}>{option}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
