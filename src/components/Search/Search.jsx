import React, {useEffect} from "react";

import { useDispatch } from "react-redux";
import { movieActions } from "../../actions";

export const Search = ({  }) => {
    const [keyword, setKeyword] = React.useState("");
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(movieActions.setSearchText(keyword));
    }, [keyword]);
  
    function handleChange(event) {
      setKeyword(event.target.value);
    }
  
    return (
      <div className="relative">
        <input
          className="border-b text-xs p-2 bg-transparent leading-none border-white"
          style={{ color: "#8E95A5", width: 200 }}
          type="text"
          placeholder="Enter keyword here"
          onChange={handleChange}
        />
      </div>
    );
  };
  