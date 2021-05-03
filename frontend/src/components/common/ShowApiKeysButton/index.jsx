import React from 'react';
import { history } from "../../utils/history"
import './ShowApiKeysButton.scss';

const goToApiKeysPage = (path) => {
  history.push(path)
}

const ShowRequestsButton = ({}) => {
    return (
    <>
        <input className='flat-button-show-api-keys'
          value="Go back"
          onClick={() => goToApiKeysPage(`/apiKeys`)}
        />
    </>
    );
}

export default ShowRequestsButton;