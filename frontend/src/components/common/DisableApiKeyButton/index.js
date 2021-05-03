import React, { useState } from "react";
import { useApiKeysStore } from "../../providers/apiKeysMsProvider";
// import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './DisableApiKeyButton.scss';
import * as apiKeysService from '../../../services/apiKeys'
import getToken from "../../utils/getToken"

const DisableApiKeyButton = ({ apiKey ,styleButton, valueButton}) => {

    const { id } = useParams(); 
    const [state, dispatch] = useApiKeysStore();
    const [stateActive, setStateActive] = useState(false);

    const authorization = getToken()

    const history = useHistory()

    return (
    <>
        <input className='flat-button-disable-api-key'
          value="Disable"
          disabled={!apiKey.active}
          onClick={async () => {
            await apiKeysService.disableApiKey(apiKey._id, dispatch, authorization)
            return history.go(0);
          }}
        />
    </>
    );
}

export default DisableApiKeyButton;