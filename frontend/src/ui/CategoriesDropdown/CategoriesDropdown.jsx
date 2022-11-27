import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import { categories } from "../../util/Categories/Categories.js";

import SectionDivider from '../../helpers/SectionDivider/SectionDivider'

import classes from "./CategoriesDropdown.module.css";

const CategoriesDropdown = () => {
  const [caregoriesDropdown, setCategoriesDropdown] = useState(false);
  const [categoriesList, setCategoriesList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  const navigate = useNavigate()

  useEffect(() => {
    setCategoriesList(categories);
  }, []);

  useEffect(() => {
    if(selectedCategory) navigate(`/${selectedCategory}`)
    // eslint-disable-next-line
  }, [selectedCategory]);

  return (
    <div className={classes.container}>
        <SectionDivider/>
      <div
        onClick={() => setCategoriesDropdown(!caregoriesDropdown)}
        className={classes.drop}
      >
        Categories
      </div>
      {caregoriesDropdown && (
        <ul className={classes.list}>
          {categoriesList.map((cat, index) => (
            <li key={index} onClick={() => setSelectedCategory(cat)}>
              {cat}
            </li>
          ))}
        </ul>
      )}
      <SectionDivider/>
    </div>
  );
};

export default CategoriesDropdown;
