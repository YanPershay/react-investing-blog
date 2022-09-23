import React from "react";
import classes from "./Pagination.module.css";
import { getPagesArray} from "../../../utils/pages";

const Pagination = ({ totalPages, currentPage, changePage }) => {
  let pagesNumbers = getPagesArray(totalPages);
  return (
    <div className={classes.pages}>
      {pagesNumbers.map((p) => (
        <span
          key={p}
          onClick={() => changePage(p)}
          className={
            currentPage === p
              ? [classes.page, classes.activePage].join(" ")
              : classes.page
          }
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
