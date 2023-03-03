import React from "react";
import NavTabs from "./NavTabs";
export default function Header(props) {
  // displays at top of page regardless of page selection
  return (
    <div>
      <h1>My Portfolio</h1>
      <NavTabs
        currentPage={props.currentPage}
        handlePageChange={props.handlePageChange}
      ></NavTabs>
    </div>
  );
}
