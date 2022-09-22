import React from "react";
import CustomSelect from "./UI/select/CustomSelect";
import CustomInput from "./UI/input/CustomInput";

const PostsFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <CustomSelect
        defaultOption="Sort by..."
        value={filter.sort}
        onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
        options={[
          { value: "title", name: "By title" },
          { value: "body", name: "By text" },
        ]}
      />
      <CustomInput
        type="text"
        placeholder="Search..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
    </div>
  );
};

export default PostsFilter;
