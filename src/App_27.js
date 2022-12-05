import { useEffect, useState } from "react";
import Category_27 from './components/Category_27';
import './App_27.css';
import Menu_27 from './components/Menu_27';

import items from './data';


const allCategories = ['all', 'HotPot', 'sideMeal', 'else'];

const App_27 = () => {
  const [searchName, setSearchName] = useState('');
  const [searchName2, setSearchName2] = useState('');
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  console.log("menuItems", menuItems);


  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  useEffect(() => {
    const filterProducts = items.filter( (menuItems) => {
      return menuItems.title.toLowerCase().includes(searchName.toLowerCase());
    });
    setMenuItems(filterProducts);
  } , [searchName]);

  useEffect(() => {
    const filterMeets = items.filter( (menuItems) => {
      return menuItems.chinese.toLowerCase().includes(searchName2.toLowerCase());
    });
    setMenuItems(filterMeets);
  } , [searchName2]);

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

const filterItems = (category) => {
  if(category === 'all') {
    setMenuItems(items);
  } else {
    const newItems = items.filter( (item) => item.category ===category);
    setMenuItems(newItems);
  }
}

  console.log('menuitems', menuItems)
  return (
    <section className="menu">
      {/* title  */}
      <div className="title">
        <h2>English Menu</h2>
        <div className="underline"></div>
        <div className="search">
        <input
                type="text"
                value={searchName}
                onChange={ (e) => {
                  setSearchName(e.target.value)
                }}
                className="search-input"
                placeholder="搜尋想點的東西..."
              />
        <button type="submit" className="button" >Search</button>
        </div>
        <div className="search2">
        <input
                type="text"
                value={searchName2}
                onChange={ (e) => {
                  setSearchName2(e.target.value)
                }}
                className="search2-input"
                placeholder="搜尋原肉or重塑肉"
              />
        <button type="submit" className="button" >Search</button>


        </div>
        
      </div>
      {/* filter buttons */}
      <Category_27 categories={categories}  filterItems={filterItems}/>
      {/* menu items */}
      <Menu_27 items ={menuItems} />
      </section>
  );
};

export default App_27;
