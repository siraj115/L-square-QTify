import React from "react";
import {ReactComponent as SearchItem} from "../../assets/Search_icon.svg";
import styles from "./Search.module.css";
const Search =({placeholder, searchData})=>{
    const onSubmit  = (e)=>{
        e.preventDefault();
    }
    return(
        <form onSubmit={onSubmit} className={styles.wrapper}>
            <input required placeholder={placeholder} className={styles.search} />
            <button className={styles.SearchButton} type="submit">
                <SearchItem/>
            </button>
        </form>
    )
}

export default Search;