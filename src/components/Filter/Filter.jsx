import React from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./Filter.module.css";
import { setFilter } from "../../redux/filterSlice";
import { useDispatch } from "react-redux";

export const Filter = () => {
  const dispatch = useDispatch();

  const filterInputOnChange = (event) => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <CiSearch className={styles.searchIcon} />

        <input
          className={styles.searchInput}
          onChange={filterInputOnChange}
          type="text"
          id="search"
          placeholder="Search something.."
        />
      </div>
    </div>
  );
};
