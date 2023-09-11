import React from "react";
import { useState, useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

export default function HorizontalScroller({ children }) {
  const [isOnHover, setOnHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className="relative"
    >
      <ScrollMenu
        LeftArrow={() => LeftArrow(isOnHover)}
        RightArrow={() => RightArrow(isOnHover)}
      >
        {children}
      </ScrollMenu>
    </div>
  );
}

function LeftArrow(isOnHover) {
  const { isFirstItemVisible, scrollPrev } =
    useContext(VisibilityContext);

  return (
    <>
      {isOnHover && !isFirstItemVisible && (
        <button
          className="z-50 absolute top-2/4 left-[-20px] translate-y-[-60%] hidden lg:inline-block"
          disabled={isFirstItemVisible}
          onClick={() => scrollPrev()}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              color: "rgba(57, 80, 97, 0.7)",
              width: "40px",
              height: "40px",
              marginRight: "-20px",
              cursor: "pointer",
            }}
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"></path>
          </svg>
        </button>
      )}
    </>
  );
}

function RightArrow(isOnHover) {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <>
      {isOnHover && !isLastItemVisible && (
        <button
          className="z-50 absolute top-2/4 right-[-20px] translate-y-[-60%] hidden lg:inline-block"
          disabled={isLastItemVisible}
          onClick={() => scrollNext()}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              color: "rgba(57, 80, 97, 0.7)",
              width: "40px",
              height: "40px",
              marginLeft: "-35px",
              cursor: "pointer",
            }}
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
          </svg>
        </button>
      )}
    </>
  );
}
