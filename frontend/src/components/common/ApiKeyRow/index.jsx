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
    <div class="table-row">
            <div class="table-data">{value}</div>
            <div class="table-data">{active ? "true" : "false"}</div>
            <div class="table-data">{createdAt}</div>
            <div class="table-data"><ShowRequestsButton apiKey={apiKey}/></div>
            <div class="table-data"><DisableApiKeyButton apiKey={apiKey}/></div>
    </div>
  )
};

export default ApiKeyRow;
