import React from "react";
import MyInput from "./MyInput/MyInput";
import MySelect from "./MySelect/MySelect";

export default function FilterAndSearch({filter, setFilter}) {
  return (
    <>
      <div className="d-flex justify-content-between my-2">
        <MyInput
          vlaue={filter.query}
          onChange={(e) => setFilter({...filter, query: e.target.value})}
          className="w-50 mx-1"
          placeholder="Search..."
        />
        <MySelect
          value={filter.sort}
          onChange={selected => setFilter({...filter, sort: selected})}
          defaultValue="Sorted By"
          options={[
            { value: "title", title: "Title" },
            { value: "body", title: "Body" },
          ]}
        />
      </div>
    </>
  );
}
