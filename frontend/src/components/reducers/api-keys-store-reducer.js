import {
	FETCH_API_KEY_BY_ID,
	FETCH_API_KEYS,
	ERROR,
	LOADING,
	DISABLE_API_KEY
} from "../constants/actions";

export function apiKeysStoreReducer(state, action) {
	switch (action.type) {
		case FETCH_API_KEYS: {
			return { ...state, apiKeys: action.payload };
		}
		case FETCH_API_KEY_BY_ID: {
			return { ...state, apiKey: action.payload };
		}
		case DISABLE_API_KEY: {
			return { ...state, apiKey: action.payload}
		}
		case ERROR: {
			return { ...state, error: action.payload };
		}
		case LOADING: {
			return { ...state, loading: action.payload };
		}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
}
