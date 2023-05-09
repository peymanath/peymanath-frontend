export interface LoadingActions {
	type: string;
	payload?: boolean;
};

export type LoadingState = {
	isLoading: boolean;
};
 