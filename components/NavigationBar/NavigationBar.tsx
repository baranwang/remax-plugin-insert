import React, { useEffect } from "react";
import type { NavigationBarProps } from "remax/wechat";

export interface INavigationBarProps extends NavigationBarProps {
  page: any;
}

export const NavigationBar = ({
  page,
  ...navigationBar
}: INavigationBarProps) => {
  useEffect(() => {
    if (!page) return;
    page.setData({ navigationBar });
  }, [page, navigationBar]);
  return <></>;
};
