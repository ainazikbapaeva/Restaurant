"use client";

import { store } from "@/redux/store";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

interface ILayoutSiteProps {
	children: ReactNode;
}

const ReduxProvider: FC<ILayoutSiteProps> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
};

export default ReduxProvider;
