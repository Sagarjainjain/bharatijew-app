import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import search from "../../assets/apidata/suggestion.json"
import "./navbar.css";

const Navbar = () => {
  const [searchinput, setSearchInput] = useState("");
  const [inputstate, setInputState] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    new URLSearchParams(`?category=${searchinput}`);
    navigate(`/search?category=${searchinput}&subcategory=`);
  };
  const handleCLick = (category) => {
    new URLSearchParams(`?category=${category}`);
    navigate(`/search?category=${category}&subcategory=`);
  }
  return (
    <nav className="navbar">
      {/* <div className="navbar-empty"></div> */}
      <div className="navbar-title">
        <h1>Bharati Jewellers</h1>
      </div>
      <div className="navbar-search_bar">
        <input
          onFocus={() => setInputState(true)}
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {inputstate ? (
        <div className="navbar-search_bar-suggestion">
          <div className="navbar-search_bar-suggestion_card">
            <h5>Search Suggestions</h5>
            <ul>
              {search.map((item) => (

              <li key={item._id} onClick={() => handleCLick(item.search)}>
                <AiOutlineSearch />
                <p>{item.search}</p>
              </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
