import React, { useState } from 'react';
import './Sidebar.css'; // You can define your styles in Sidebar.css
import { categories } from './SidebarData';
import styled from '@emotion/styled';
import { useSidebarStore } from '../../store/FlagStore';


const CustomSidebar = styled.div`
z-index: 95;
position: fixed;
top: 55px;
left: ${(props)=>props.open? "0": "-250px"};
width: 250px;
height: 100%;
background-color: #ffffff;
transition: transform 0.3s ease;
overflow-y: auto;
padding-top: 10px; /* Added padding-top */
`;

function Sidebars() {
  const [isOpen, setIsOpen] = useState(true);
  const {open} = useSidebarStore();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleCategoryClick = (categoryIndex) => {
    setSelectedCategory(selectedCategory === categoryIndex ? null : categoryIndex);
    setSelectedSubcategory(null); // Reset subcategory selection
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CustomSidebar open={open} className={`sidebar ${isOpen ? 'open' : ''}` }>
      {/* <button className="toggle-button" onClick={toggleSidebar}>{isOpen ? 'Close' : 'Open'}</button> */}
      {categories.map((category, index) => (
        <div key={index}>
          <div className="category" onClick={() => handleCategoryClick(index)}>
            {category.name}
            <span className="arrow">{selectedCategory === index ? '▲' : '▼'}</span>
          </div>
          {selectedCategory === index && category.subCategories && (
            <ul className="subcategory-list">
              {category.subCategories && category.subCategories.map((subcategory, subIndex) => (
                <li key={subIndex} onClick={() => handleSubcategoryClick(subcategory.name)}>
                  {
                    console.log("subcategory : ", subcategory)
                  }
                  {subcategory.name}
                  { 
                  subcategory.subCategories &&
                  <ul className="sub-subcategory-list">
                  {
                    console.log("subCategories: " ,subcategory)
                  }
                  {selectedSubcategory === subcategory.name && subcategory.subCategories.map(
                    (sub, index)=>
                    
                      <li key={index}>{sub.name}</li>
                      // <li>Sub-subcategory 2</li>
                      // <li>Sub-subcategory 3</li>
                    
                  )}
                  </ul>}
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
