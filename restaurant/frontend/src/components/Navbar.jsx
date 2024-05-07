import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [show, setShow] = useState(false);

  const menuItems = [
    { id: 1, name: "Appetizers" },
    { id: 2, name: "Main Courses" },
    { id: 3, name: "Desserts" },
    { id: 4, name: "Beverages" },
  ];

  return (
    <>
      <nav>
        <div className="logo">Pratiksha</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button className="menuBtn" onClick={() => setShow(!show)}>OUR MENU</button>
          {show && (
              <div className="menuDropdown">
                <ul>
                  {/* Render the menu items */}
                  {menuItems.map((menuItem) => (
                    <li key={menuItem.id}>{menuItem.name}</li>
                  ))}
                </ul>
              </div>
            )}
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 