import React from "react";
import { history } from "../../utils/history"
import "./ShowRequestsButton.scss";

const goToRequestsPage = (path) => {
  history.push(path)
}

const ShowRequestsButton = ({ apiKey ,styleButton, valueButton}) => {
    return (
    <>
      <input className="flat-button-show-requests"
        value="Show requests"
        disabled={!(apiKey && apiKey.requests.length)}
        onClick={() => goToRequestsPage(`/apiKeys/${apiKey._id}`)}
      />
    </>
    );
}

export default ShowRequestsButton;