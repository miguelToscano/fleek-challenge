import React from "react";

import "./RequestRow.scss";

const RequestRow = ({ request, key, saveCallback }) => {
  const {
    path,
    createdAt,
  } = request;

  return (
    <div className="table-row">
      <div className="table-data">{path}</div>
      <div className="table-data">{createdAt}</div>
    </div>
  );
};

export default RequestRow;
