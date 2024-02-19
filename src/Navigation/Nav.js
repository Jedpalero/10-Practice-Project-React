import React from "react";
import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search shoes..."
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <div className="profile-container">
        <button>
          <FiHeart className="nav-icons" />
        </button>
        <button>
          <AiOutlineShoppingCart className="nav-icons" />
        </button>
        <button>
          <AiOutlineUserAdd className="nav-icons" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
