import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import Styles from "./Navbar.module.css";
const Navbar = ({searchData})=>{
    return <>
        <nav className={Styles.navbar}>
            <a href="/">
                <Logo />
            </a>
            <Search placeholder={"Search a song of your choice"} searchData={searchData} />
            <Button>Give Feedback</Button>
        </nav>
    </>
}

export default Navbar;