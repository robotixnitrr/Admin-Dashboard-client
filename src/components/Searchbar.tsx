import { useRef } from "react";
import SearchSvg from "../assets/search.svg?react";
interface ISearchBar {
  placeholder: string;
  sortType: string;
  handleSort: (
    sortType: "a-z" | "z-a" | "popularity" | "mostLiked" | "leastLiked"
  ) => void;
  handleSearch: (str: string) => void;
}
function Searchbar(props: ISearchBar) {
    const searchText= useRef<string>("");
  return (
    <div className="input-group mx-auto mb-3 w-50 align-items-center position-relative">
      <select
        onChange={(e) => {
          props.handleSort(
            e.target.value as
              | "a-z"
              | "z-a"
              | "popularity"
              | "mostLiked"
              | "leastLiked"
          );
        }}
        value={props.sortType}
        className="form-select shadow-sm bg-white fs-small"
      >
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
        <option value="popularity">Popularity</option>
        <option value="mostLiked">Most Liked</option>
        <option value="leastLiked">Least Liked</option>
      </select>
      <input
        type="text"
        onChange={(e) => searchText.current = e.target.value}
        placeholder={props.placeholder}
        className="form-control shadow-sm bg-white"
        style={{ width: "60%" }}
      />
      <button
        className="btn btn-sm btn-dark fw-semibold d-inline-block"
        style={{ width: "10%" }}
        onClick={() => props.handleSearch(searchText.current)}
      >
        <SearchSvg height={30} width={30} className="ps-0 ms-0" />
      </button>
    </div>
  );
}

export default Searchbar;
