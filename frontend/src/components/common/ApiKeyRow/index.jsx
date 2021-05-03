import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useApiKeysStore } from "../../providers/apiKeysMsProvider";
import ShowRequestsButton from "../ShowRequestsButton"
import DisableApiKeyButton from "../DisableApiKeyButton"
// import { putActivePromotion, getPromotionsList } from "../../../../services/promotions";
// import moment from '../DataTable/dataRow/node_modules/moment';
// import Button from "../../button";
import "./ApiKeyRow.scss";

const ApiKeyRow = ({ apiKey, saveCallback }) => {
  const {
    value,
    active,
    createdAt,
  } = apiKey;
  const [stateActive, setStateActive] = useState(active);
  const history = useHistory();
  const [state, dispatch] = useApiKeysStore();

  // const handleClickActive = (value ,dispatch, stateActive, id) => {
  //   // const value = event.target.value;
  //   if(value === 'Activar') {
  //     putActivePromotion(dispatch, true, id)
  //     .then(saveCallback)
  //   };
  //   if(value === 'Desactivar') {
  //     putActivePromotion(dispatch, false, id)
  //     .then(saveCallback)
  //   };
  // }

  // return (
  //   <tr>
  //     {/* <td><button onClick={() => goDetailsPage(`/marketing-tool/details/${id}`)}>{id}</button></td> */}
  //     <td>{value}</td>
  //     <td>{active ? 'true' : 'false'}</td>
  //     <td>{createdAt}</td>
  //     <td className='buttonTd'>
  //       <ShowRequestsButton apiKey={apiKey} />
  //     </td>
  //   </tr>
  // );

  return (
    <div class="table-row">
            <div class="table-data">{value}</div>
            <div class="table-data">{active ? 'true' : 'false'}</div>
            <div class="table-data">{createdAt}</div>
            <div class="table-data"><ShowRequestsButton apiKey={apiKey}/></div>
            <div class="table-data"><DisableApiKeyButton apiKey={apiKey}/></div>
    </div>
  )
};

export default ApiKeyRow;
