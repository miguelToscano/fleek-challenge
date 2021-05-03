import React, { useEffect, useState } from "react";
import { useApiKeysStore } from "../../providers/apiKeysMsProvider";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useHistory } from "react-router-dom";
import Header from "../../common/Header";
import Loader from "../../common/Loader";
import ApiKeysTable from "../../common/ApiKeysTable";
import CreateApiKeyButton from "../../common/CreateApiKeyButton"
// import "./dataTable.scss";
import * as apiKeysService from "../../../services/apiKeys"
import getToken from "../../utils/getToken"

const ApiKeys = () => {
  const [state, dispatch] = useApiKeysStore();
  const [stateActive, setStateActive] = useState(false);

  const authorization = getToken()

  useEffect(() => {
    apiKeysService.getApiKeys(dispatch, authorization);
  }, [stateActive]);

  const saveList = () => {
    setStateActive(!stateActive);
  };

  return (
      <>
        {state.loading ? (
          <Loader />
        ) : (
          <>
            {/* <Header /> */}
            <div><ApiKeysTable apiKeys={state.apiKeys} saveCallback={saveList} /></div>
            <div><CreateApiKeyButton/></div>
          </>
          
        )}
      </>
  );
};

export default ApiKeys;
