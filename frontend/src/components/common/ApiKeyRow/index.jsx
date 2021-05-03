import React from "react";
import ShowRequestsButton from "../ShowRequestsButton"
import DisableApiKeyButton from "../DisableApiKeyButton"
import "./ApiKeyRow.scss";

const ApiKeyRow = ({ apiKey, saveCallback }) => {
  const {
    value,
    active,
    createdAt,
  } = apiKey;

  return (
    <div className="table-row">
      <div className="table-data">{value}</div>
      <div className="table-data">{active ? "true" : "false"}</div>
      <div className="table-data">{createdAt}</div>
      <div className="table-data"><ShowRequestsButton apiKey={apiKey}/></div>
      <div className="table-data"><DisableApiKeyButton apiKey={apiKey}/></div>
    </div>
  )
};

export default ApiKeyRow;
