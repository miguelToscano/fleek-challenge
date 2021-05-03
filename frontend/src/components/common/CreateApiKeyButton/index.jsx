import React from 'react';
import { useHistory } from "react-router-dom";
import './CreateApiKeyButton.scss';
import * as apiKeysService from '../../../services/apiKeys'

const CreateApiKeyButton = ({ styleButton, valueButton}) => {

    const history = useHistory()

    return (
    <>
        <input className='flat-button-create-api-key'
          value="Create Api key"
          onClick={async () => {
            await apiKeysService.createApiKey();
            return history.go(0);
          }}
        />
    </>
    );
}

export default CreateApiKeyButton;