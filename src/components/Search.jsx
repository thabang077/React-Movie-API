import React from "react";

{
  /* <div className="text-white text-3xl">{props.s}</div>; */
}

// const Search = ({ props }) => {
//   return (
//     <div>
//       <div className="text-white text-3xl">{props.searchTerm}</div>
//     </div>
//   );
// };

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    //Search bar and input field
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />

        <input
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
