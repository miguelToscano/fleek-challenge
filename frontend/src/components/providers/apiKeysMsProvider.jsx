import React from "react";
import { apiKeysStoreReducer } from "../reducers/api-keys-store-reducer";

const apiKeysStoreStateContext = React.createContext();
const apiKeysStoreDispatchContext = React.createContext();

const ApiKeysMsProvider = ({ children }) => {
	const [state, dispatch] = React.useReducer(apiKeysStoreReducer, {
		user: null,
		error: null,
		apiKeys: null,
		apiKey: null,
		promoById: null,
		points: null,
		loading: false,
		successMesage: null,
	});
	return (
		<apiKeysStoreStateContext.Provider value={state}>
			<apiKeysStoreDispatchContext.Provider value={dispatch}>
				{children}
			</apiKeysStoreDispatchContext.Provider>
		</apiKeysStoreStateContext.Provider>
	);
};

function useApiKeysStoreState() {
	const context = React.useContext(apiKeysStoreStateContext);
	if (context === undefined) {
		throw new Error(
			"useapiKeysStoreState must be used within a apiKeysMsProvider"
		);
	}
	return context;
}

function useApiKeysStoreDispatch() {
	const context = React.useContext(apiKeysStoreDispatchContext);
	if (context === undefined) {
		throw new Error(
			"useapiKeysStoreDispatch must be used within a apiKeysMsProvider"
		);
	}
	return context;
}

function useApiKeysStore() {
	return [useApiKeysStoreState(), useApiKeysStoreDispatch()];
}

export {
	ApiKeysMsProvider,
	useApiKeysStore,
	useApiKeysStoreState,
	useApiKeysStoreDispatch,
};
