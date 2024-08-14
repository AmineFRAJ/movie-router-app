import React from "react";
import { Form } from "react-bootstrap";

const FilterByTitle = ({ searchInput, setSearchInput }) => {
  return (
    <div style={{ width:"60%" , margin:"auto",marginBottom: "20px",marginTop: "20px",}}>
      <Form.Control
        type="text"
        placeholder="Search movie..."
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />
    </div>
  );
};

export default FilterByTitle;
