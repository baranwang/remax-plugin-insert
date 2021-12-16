import React, { useEffect } from "react";
import type { PageMetaProps } from "remax/wechat";

export interface IPageMetaProps
  extends Omit<PageMetaProps, "onResize" | "onScroll" | "onScrollDone"> {
  page: any;
}

export const PageMeta: React.FC<IPageMetaProps> = ({
  children,
  page,
  ...pageMeta
}) => {
  useEffect(() => {
    if (!page) return;
    page.setData({ pageMeta });
  }, [page, pageMeta]);
  return <>{children}</>;
};
