import React from "react";
import NavTabs from "./NavTabs";
export default function Header(props) {
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
