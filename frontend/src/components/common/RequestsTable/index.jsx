import React from "react";
import RequestRow from "../RequestRow";
import ShowApiKeysButton from "../ShowApiKeysButton"
import "./RequestsTable.scss";

const RequestsTable = ({ requests, saveCallback }) => {

  return (
    <div class="container">
	
      <div class="table">
        <div class="table-header">
          <div class="header__item"><a id="name" class="filter__link" href="#">path</a></div>
          <div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">created at</a></div>
        </div>
        <div class="table-content">	
          { requests ? requests.map((request, key) => (
            <RequestRow request={request} key={key} saveCallback={saveCallback} />
          )): []}
          <div class="table-row">
            <div class="table-data"><ShowApiKeysButton/></div>
          </div>
        </div>	
      </div>
  </div>
  )
};

export default RequestsTable;
