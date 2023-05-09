import { LoadingActions } from "@/types/redux";
import { ALLOW_LOADING, DISALLOW_LOADING } from "./LoadingType";

export function allowLoading(): LoadingActions {
	return {
		type: ALLOW_LOADING,
	};
}

export function disallowLoading(): LoadingActions {
	return {
		type: DISALLOW_LOADING,
	};
}
