import React, { useState } from 'react';
import './Sidebar.css'; // You can define your styles in Sidebar.css
import { categories } from './SidebarData';
function Sidebars() {
  const [isOpen, setIsOpen] = useState(true);

  // const [categories, setCategories] = useState([
  //   {
  //     name: 'Category 1',
  //     subcategories: ['Subcategory 1.1', 'Subcategory 1.2', 'Subcategory 1.3']
  //   },
  //   {
  //     name: 'Category 2',
  //     subcategories: ['Subcategory 2.1', 'Subcategory 2.2']
  //   },
  //   {
  //     name: 'Category 3',
  //     subcategories: ['Subcategory 3.1', 'Subcategory 3.2', 'Subcategory 3.3']
  //   },
  //   {
  //     name: 'Category 1',
  //     subcategories: ['Subcategory 1.1', 'Subcategory 1.2', 'Subcategory 1.3']
  //   },
  //   {
  //     name: 'Category 2',
  //     subcategories: ['Subcategory 2.1', 'Subcategory 2.2']
  //   },
  //   {
  //     name: 'Category 3',
  //     subcategories: ['Subcategory 3.1', 'Subcategory 3.2', 'Subcategory 3.3']
  //   },
  //   {
  //     name: 'Category 1',
  //     subcategories: ['Subcategory 1.1', 'Subcategory 1.2', 'Subcategory 1.3']
  //   },
  //   {
  //     name: 'Category 2',
  //     subcategories: ['Subcategory 2.1', 'Subcategory 2.2']
  //   },
  //   {
  //     name: 'Category 3',
  //     subcategories: ['Subcategory 3.1', 'Subcategory 3.2', 'Subcategory 3.3']
  //   },
  //   {
  //     name: 'Category 1',
  //     subcategories: ['Subcategory 1.1', 'Subcategory 1.2', 'Subcategory 1.3']
  //   },
  //   {
  //     name: 'Category 2',
  //     subcategories: ['Subcategory 2.1', 'Subcategory 2.2']
  //   },
  //   {
  //     name: 'Category 3',
  //     subcategories: ['Subcategory 3.1', 'Subcategory 3.2', 'Subcategory 3.3']
  //   },{
  //     name: 'Category 1',
  //     subcategories: ['Subcategory 1.1', 'Subcategory 1.2', 'Subcategory 1.3']
  //   },
  //   {
  //     name: 'Category 2',
  //     subcategories: ['Subcategory 2.1', 'Subcategory 2.2']
  //   },
  //   {
  //     name: 'Category 3',
  //     subcategories: ['Subcategory 3.1', 'Subcategory 3.2', 'Subcategory 3.3']
  //   },
  //   {
  //     name: 'Category 1',
  //     subcategories: ['Subcategory 1.1', 'Subcategory 1.2', 'Subcategory 1.3']
  //   },
  //   {
  //     name: 'Category 2',
  //     subcategories: ['Subcategory 2.1', 'Subcategory 2.2']
  //   },
  //   {
  //     name: 'Category 3',
  //     subcategories: ['Subcategory 3.1', 'Subcategory 3.2', 'Subcategory 3.3']
  //   },
  //   {
  //     name: 'Category 1',
  //     subcategories: ['Subcategory 1.1', 'Subcategory 1.2', 'Subcategory 1.3']
  //   },
  //   {
  //     name: 'Category 2',
  //     subcategories: ['Subcategory 2.1', 'Subcategory 2.2']
  //   },
  //   {
  //     name: 'Category 3',
  //     subcategories: ['Subcategory 3.1', 'Subcategory 3.2', 'Subcategory 3.3']
  //   },
  //   {
  //     name: 'Category 1',
  //     subcategories: ['Subcategory 1.1', 'Subcategory 1.2', 'Subcategory 1.3']
  //   },
  //   {
  //     name: 'Category 2',
  //     subcategories: ['Subcategory 2.1', 'Subcategory 2.2']
  //   },
  //   {
  //     name: 'Category 3',
  //     subcategories: ['Subcategory 3.1', 'Subcategory 3.2', 'Subcategory 3.3']
  //   }
  // ]);

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
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>{isOpen ? 'Close' : 'Open'}</button>
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
    </div>
  );
}

export default Sidebars;
