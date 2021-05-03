import React from "react";
import ApiKeyRow from "../ApiKeyRow";
import CreateApiKeyButton from "../CreateApiKeyButton"
import "./ApiKeysTable.scss";

const ApiKeysTable = ({ apiKeys, saveCallback }) => {
  // return (
    
  //   <div className="container">
  //     <div class="table-header">
	// 		<div class="header__item"><a id="name" class="filter__link" href="#">Name</a></div>
	// 		<div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Wins</a></div>
	// 		<div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Draws</a></div>
	// 		<div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">Losses</a></div>
	// 		<div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Total</a></div>
  //     </div>
  //   <table>
  //     <thead className="header__item">
  //       <tr className="header__item">
  //         <th className="filter__link"> key</th>
  //         <th className="filter__link">active</th>
  //         <th className="filter__link">created at</th>
  //         <th className="filter__link">actions</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       { apiKeys ? apiKeys.map((apiKey, key) => (
  //         <ApiKeyRow apiKey={apiKey} key={key} saveCallback={saveCallback} />
  //       )): []}
  //     </tbody>
  //   </table>
  //   </div>
  // );

  return (
    <div class="container">
	
      <div class="table">
        <div class="table-header">
          <div class="header__item"><a id="name" class="filter__link" href="#">key</a></div>
          <div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">active</a></div>
          <div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">created at</a></div>
          <div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">actions</a></div>
        </div>
        <div class="table-content">	
          { apiKeys ? apiKeys.map((apiKey, key) => (
            <ApiKeyRow apiKey={apiKey} key={key} saveCallback={saveCallback} />
          )): []}
          <div class="table-row">
            <div class="table-data"><CreateApiKeyButton/></div>
          </div>
        </div>	
      </div>
  </div>
  )
};

export default ApiKeysTable;
