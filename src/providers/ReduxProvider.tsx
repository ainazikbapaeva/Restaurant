"use client";
import { api } from "@/redux/api";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { FC, ReactNode } from "react";

interface ILayoutSiteProps {
	children: ReactNode;
}

const ReduxProvider: FC<ILayoutSiteProps> = ({ children }) => {
	return <ApiProvider api={api}>{children}</ApiProvider>;
};

export default ReduxProvider;
