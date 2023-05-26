import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css";
const NavMenu = () => {
  return (
    <nav className={styles.nav}>
      <Link href={"/"}>
        <Image src="/logo.svg" width={287} height={30} alt="logo" />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/users"}>User</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
