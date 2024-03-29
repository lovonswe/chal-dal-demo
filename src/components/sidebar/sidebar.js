import React, { useEffect, useState } from "react";
import "./Sidebar.css"; // You can define your styles in Sidebar.css
import { categories } from "./SidebarData";
import styled, { css } from "@emotion/styled";
import { useSidebarStore } from "../../store/FlagStore";
import {
  useSubCategoryStore,
  useSubSubCategoryStore,
  usecategoryStore,
} from "../../store/PathStore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const theme = {
  breakpoints: {
    mobile: '@media (max-width: 768px)',
    tablet: '@media (min-width: 601px) and (max-width: 1200px)',
  }
}
const CustomSidebar = styled.div`
  z-index: 95;
  position: fixed;
  top: 55px;
  left: ${(props) => (props.open ? "0" : "-250px")};
  width: 250px;
  height: 100%;
  background-color: #ffffff;
  transition: transform 0.3s ease;
  overflow-y: auto;
  padding-top: 10px; /* Added padding-top */

  ${props => props.theme.breakpoints.mobile} {
    top: 225px;
  }
`;

function Sidebars() {
  const [isOpen, setIsOpen] = useState(true);
  const { open } = useSidebarStore();
  const { categoryName, updateCategory } = usecategoryStore();
  const { subCategoryName, updateSubCategory } = useSubCategoryStore();
  const { subSubCategoryName, updateSubSubCategory } = useSubSubCategoryStore();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState(null);

  const handleCategoryClick = (categoryIndex) => {
    setSelectedCategory(
      selectedCategory === categoryIndex ? null : categoryIndex
    );
    setSelectedSubcategory(null);
    setSelectedSubSubCategory(null); // Reset subcategory selection
  };

  const handleSubcategoryClick = (event, subcategory) => {
    setSelectedSubcategory(subcategory);
    setSelectedSubSubCategory(null);
    //console.log("sub-cat clicked");
  };

  const handleSubSubCategoryClick = (event, subSubCategory) => {
    event.stopPropagation();
    setSelectedSubSubCategory(subSubCategory);
    //console.log("sub-sub-clicked.")
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const setIcon = (subCategories, _selectedCategory, index) => {
    return subCategories ? (
      _selectedCategory === index ? (
        <KeyboardArrowDownIcon />
      ) : (
        <KeyboardArrowUpIcon />
      )
    ) : null;
  };

  useEffect(() => {
    updateCategory(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    updateSubCategory(selectedSubcategory);
  }, [selectedSubcategory]);

  useEffect(() => {
    updateSubSubCategory(selectedSubSubCategory);
  }, [selectedSubSubCategory]);

  useEffect(() => {
    setSelectedCategory(categoryName);
    setSelectedSubcategory(subCategoryName);
    setSelectedSubSubCategory(subSubCategoryName);
  }, [categoryName, subCategoryName, subSubCategoryName]);

  return (
    <CustomSidebar theme={theme} open={open} className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* <button className="toggle-button" onClick={toggleSidebar}>{isOpen ? 'Close' : 'Open'}</button> */}
      {categories.map((category, index) => (
        <div key={index}>
          <div
            className="category"
            onClick={() => handleCategoryClick(index, category.name)}
          >
            {category.name}
            <span className="arrow">
              {setIcon(category.subCategories, selectedCategory, index)}
            </span>
          </div>
          {selectedCategory === index && category.subCategories && (
            <ul className="subcategory-list">
              {category.subCategories &&
                category.subCategories.map((subcategory, subIndex) => (
                  <li
                    key={subIndex}
                    onClick={(event) =>
                      handleSubcategoryClick(event, subcategory.name)
                    }
                  >
                    {
                      // console.log("subcategory : ", subcategory)
                    }
                    {subcategory.name}
                    {subcategory.subCategories && (
                      <ul className="sub-subcategory-list">
                        {
                          // console.log("subCategories: " ,subcategory)
                        }
                        {selectedSubcategory === subcategory.name &&
                          subcategory.subCategories.map(
                            (sub, index) => (
                              <li
                                key={`${index}xxx`}
                                onClick={(event) =>
                                  handleSubSubCategoryClick(event, sub.name)
                                }
                              >
                                {sub.name}
                              </li>
                            )
                            // <li>Sub-subcategory 2</li>
                            // <li>Sub-subcategory 3</li>
                          )}
                      </ul>
                    )}
                  </li>
                ))}
            </ul>
          )}
        </div>
      ))}
    </CustomSidebar>
  );
}

export default Sidebars;
