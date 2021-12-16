# remax-plugin-insert

[![](https://img.shields.io/npm/v/remax-plugin-insert)](https://www.npmjs.com/package/remax-plugin-insert)
[![Node.js Package](https://github.com/baranwang/remax-plugin-insert/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/baranwang/remax-plugin-insert/actions/workflows/npm-publish.yml)
![](https://img.shields.io/npm/l/remax-plugin-insert)

[remax](https://github.com/remaxjs/remax) 框架下 page 前后插入自定义内容

插件最初目的用于支持 [`page-meta`](https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html) 和 [`navigation-bar`](https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html)，当然也可以用于其他场景。

## 安装

```shell
npm i remax-plugin-insert
# or
pnpm add remax-plugin-insert
# or
yarn add remax-plugin-insert
```

## 配置

`remax.config.js` 中引入 plugin

```javascript
const { default: remaxPluginInsert } = require("remax-plugin-insert");

module.exports = {
  // ...
  plugins: [remaxPluginInsert()],
  // ...
};
```

### 参数

- prefix `string` 前置插入内容，支持文本或路径，默认内容 [src/templates/prefix.wxml](/src/templates/prefix.wxml)

- suffix `string` 后置插入内容，支持文本或路径，默认内容 [src/templates/suffix.wxml](/src/templates/suffix.wxml)

- include `Array<string | RegExp>` 匹配的页面，eg: `["/pages/index/index"]`

- exclude `Array<string | RegExp>` 排除的页面

## 使用

```tsx
import { usePageInstance } from "remax";
import { PageMeta, NavigationBar } from "remax-plugin-insert/components";

export default () => {
  const page = usePageInstance();

  return (
    <>
      <PageMeta page={page} backgroundTextStyle="dark">
        <NavigationBar page={page} title="Awesome Remax" />
      </PageMeta>
    </>
  );
};
```

插件的实现其实并不依赖 React 组件，所以也可以直接使用 `setData` 的方式

```javascript
import { usePageInstance } from "remax";

export default () => {
  const page = usePageInstance();

  page.setData({
    pageMeta: {
      backgroundTextStyle: "dark",
      // ...
    },
    navigationBar: {
      // ...
    },
  });
};
```
