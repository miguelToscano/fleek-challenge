import React, { useEffect, useState } from "react";
import { useApiKeysStore } from "../../providers/apiKeysMsProvider";
import { useParams } from "react-router-dom";
import Loader from "../../common/Loader";
import RequestsTable from "../../common/RequestsTable";

const Requests = () => {
  const { id } = useParams(); 
  const [state] = useApiKeysStore();
  const [stateActive, setStateActive] = useState(false);

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
            <RequestsTable requests={state.apiKeys.find(apiKey => apiKey._id === id).requests} saveCallback={saveList} />
          </>
          
        )}
      </>
  );
};

export default Requests;
