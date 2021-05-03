import {
  FETCH_API_KEYS,
  FETCH_API_KEY_BY_ID,
	ERROR,
	LOADING
} from "../components/constants/actions";


export const getApiKeys = async (dispatch, authorization) => {
    try {
      const headers = {
        'Authorization': String(authorization.token)
      }
      dispatch({ type: LOADING, payload: true });
      const res = await fetch("http://localhost:8080/v1/apiKeys", {
        method: "GET",
        mode: 'cors',
        headers
      });
      const errorCode = res.status > 200 ? res.status : false;
      let data = null;
      data = await res.json();
      dispatch({ type: FETCH_API_KEYS, payload: data.apiKeys });
      return { errorCode: errorCode, apiKeys: data.apiKeys };
    } catch (error) {
      console.log(error);
      dispatch({ type: ERROR, payload: error });
      return { errorCode: 500, apiKeys: null };
    }
    finally {
      dispatch({ type: LOADING, payload: false });
    }
};

export const createApiKey = async (dispatch, apiKey, authorization) => {
  try {
    const headers = {
      'Authorization': String(authorization.token)
    }
    const body = JSON.stringify({ promotion: apiKey })
    const res = await fetch("http://localhost:8080/v1/apiKeys", {
      method: "POST",
      mode: 'cors',
      body: body,
      headers
    });
    return res.json();
  } catch (error) {
    return { errorCode: 500, apiKey: null };
  }
};

export const disableApiKey = async (id, dispatch, authorization) => {
  try {
    const headers = {
      'Authorization': String(authorization.token)
    }
    dispatch({ type: LOADING, payload: true });
    const res = await fetch(`http://localhost:8080/v1/apiKeys/${id}/disable`, {
      method: "POST",
      mode: 'cors',
      headers
    });
    const errorCode = res.status > 200 ? res.status : false;
    let data = null;
    data = await res.json();
    dispatch({ type: FETCH_API_KEY_BY_ID, payload: data.apiKey });
    return { errorCode: errorCode, apiKey: data.apiKey };
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR, payload: error });
    return { errorCode: 500, apiKey: null };
  }
  finally {
    dispatch({ type: LOADING, payload: false });
  }
}