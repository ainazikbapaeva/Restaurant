import LayoutSite from "@/app/components/layout/LayoutSite";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
const layout: FC<LayoutProps> = ({ children }) => {
  return <LayoutSite>{children}</LayoutSite>;
};

export default layout;
