import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import styles from "./Header.module.css";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const data = [
    { navItem: "About", to: "/" },
    { navItem: "Pricing", to: "/" },

    { navItem: "Careers", to: "/", number: 5 },
    { navItem: "Blog", to: "/" },
    { navItem: "Sign In", to: "/" },
    { navItem: "Request Access", to: "/" },
  ];

  return (
    <div className={styles.header}>
      <Link to="/">
        <h1 className={styles.logoText}>JOVIALITY</h1>
      </Link>
      {!mobileNav && (
        <GiHamburgerMenu
          className={styles.icon}
          onClick={() => setMobileNav((prev) => !prev)}
        />
      )}
      <div className={`${styles.navItems} ${mobileNav && styles.mobileNav}`}>
        {data.map((el, i) => (
          <div onClick={() => setMobileNav(false)}>
            <Link
              to={el.to}
              className={styles.navItem}
              key={i}
              style={{ color: i === data.length - 1 && "#6B7AB4" }}
            >
              {el.navItem}
            </Link>
            {el.number && <span className={styles.number}>{5}</span>}
          </div>
        ))}
        {mobileNav && (
          <MdClose
            className={styles.icon}
            onClick={() => setMobileNav((prev) => !prev)}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
