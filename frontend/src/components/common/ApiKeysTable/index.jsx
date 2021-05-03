import React from "react";
import ApiKeyRow from "../ApiKeyRow";
import CreateApiKeyButton from "../CreateApiKeyButton"
import "./ApiKeysTable.scss";

const ApiKeysTable = ({ apiKeys, saveCallback }) => {
  return (
    <div className="container">
	
      <div className="table">
        <div className="table-header">
          <div className="header__item"><a id="name" className="filter__link" href="#">key</a></div>
          <div className="header__item"><a id="wins" className="filter__link filter__link--number" href="#">active</a></div>
          <div className="header__item"><a id="draws" className="filter__link filter__link--number" href="#">created at</a></div>
          <div className="header__item"><a id="losses" className="filter__link filter__link--number" href="#">actions</a></div>
        </div>
        <div className="table-content">	
          { apiKeys ? apiKeys.map((apiKey, key) => (
            <ApiKeyRow apiKey={apiKey} key={key} saveCallback={saveCallback} />
          )): []}
          <div className="table-row">
            <div className="table-data"><CreateApiKeyButton/></div>
          </div>
        </div>	
      </div>
  </div>
  )
};

export default ApiKeysTable;
