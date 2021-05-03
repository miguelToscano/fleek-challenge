import React from "react";
import RequestRow from "../RequestRow";
import ShowApiKeysButton from "../ShowApiKeysButton"
import "./RequestsTable.scss";

const RequestsTable = ({ requests, saveCallback }) => {

  return (
    <div className="container">
	
      <div className="table">
        <div className="table-header">
          <div className="header__item"><a id="name" className="filter__link" href="#">path</a></div>
          <div className="header__item"><a id="draws" className="filter__link filter__link--number" href="#">created at</a></div>
        </div>
        <div className="table-content">	
          { requests ? requests.map((request, key) => (
            <RequestRow request={request} key={key} saveCallback={saveCallback} />
          )): []}
          <div className="table-row">
            <div className="table-data"><ShowApiKeysButton/></div>
          </div>
        </div>	
      </div>
  </div>
  )
};

export default RequestsTable;
