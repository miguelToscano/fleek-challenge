import React, { useEffect, useState } from "react";
import { useApiKeysStore } from "../../providers/apiKeysMsProvider";
import ApiKeysTable from "../../common/ApiKeysTable";
import CreateApiKeyButton from "../../common/CreateApiKeyButton"
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
        {(
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
