import React, { ReactNode, Dispatch, SetStateAction } from "react";

export type LoadingProps = {
	children: ReactNode;
};

export type SetAction<T> = React.Dispatch<React.SetStateAction<T>>;
