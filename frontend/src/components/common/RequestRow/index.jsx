import React from "react";

import "./RequestRow.scss";

const RequestRow = ({ request, key, saveCallback }) => {
  const {
    path,
    createdAt,
  } = request;

  return (
    <div class="table-row">
            <div class="table-data">{path}</div>
            <div class="table-data">{createdAt}</div>
    </div>
  );
};

export default RequestRow;
