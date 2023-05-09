import { LoadingActions, LoadingState } from "@/types/redux";
import { ALLOW_LOADING, DISALLOW_LOADING } from "./LoadingType";

const initialState: LoadingState = {
	isLoading: false,
};
const LoadingReducer = (
	state: LoadingState = initialState,
	actions: LoadingActions,
): LoadingState => {
	switch (actions.type) {
		case ALLOW_LOADING:
			return { isLoading: true };
		case DISALLOW_LOADING:
			return { isLoading: false };
		default:
			return state;
	}
};

export default LoadingReducer;
