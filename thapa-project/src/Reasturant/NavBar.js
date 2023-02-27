import React from "react";

const navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem, id) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}
                key={id}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default navbar;
