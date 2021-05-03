import React from 'react';
import { useHistory } from "react-router-dom";
import './CreateApiKeyButton.scss';
import * as apiKeysService from '../../../services/apiKeys'

const getToken = () => {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken
};

const CreateApiKeyButton = ({ styleButton, valueButton}) => {

    const history = useHistory()

    const authorization = getToken(9)

    return (
    <>
        <input className='flat-button-create-api-key'
          value="Create Api key"
          onClick={async () => {
            await apiKeysService.createApiKey(null, null, authorization);
            return history.go(0);
          }}
        />
    </>
    );
}

export default CreateApiKeyButton;