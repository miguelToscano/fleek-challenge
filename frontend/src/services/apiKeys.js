import {
  FETCH_API_KEYS,
  FETCH_API_KEY_BY_ID,
	ERROR,
	LOADING
} from "../components/constants/actions";

const HEADERS = {
  "Content-Type": "application/json",
}

export const getApiKeys = async (dispatch) => {
    try {
      dispatch({ type: LOADING, payload: true });
      const res = await fetch("http://localhost:8080/v1/apiKeys", {
        method: "GET",
        mode: 'cors',
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

export const createApiKey = async (dispatch, newPromo) => {
  try {
    const body = JSON.stringify({ promotion: newPromo })
    const res = await fetch("http://localhost:8080/v1/apiKeys", {
      method: "POST",
      mode: 'cors',
      body: body,
      headers: HEADERS,
    });
    return res.json();
  } catch (error) {
    return { errorCode: 500, newPromo: null };
  }
};

export const disableApiKey = async (id, dispatch) => {
  try {
    dispatch({ type: LOADING, payload: true });
    const res = await fetch(`http://localhost:8080/v1/apiKeys/${id}/disable`, {
      method: "POST",
      mode: 'cors',
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