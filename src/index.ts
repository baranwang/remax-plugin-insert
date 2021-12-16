import { existsSync, readFileSync } from "fs";
import prefix from "./templates/prefix.wxml";
import suffix from "./templates/suffix.wxml";
import type { Plugin } from "@remax/types";

export interface Options {
  prefix?: string;
  suffix?: string;
  include?: Array<string | RegExp>;
  exclude?: Array<string | RegExp>;
}
const defaultOptions: Options = {
  prefix,
  suffix,
};

const Plugin = (options?: Options): Plugin => {
  return {
    onPageTemplate: ({ template, page }) => {
      if (
        options?.include &&
        !options.include.some((item) => page.match(item))
      ) {
        return template;
      }
      if (
        options?.exclude &&
        options.exclude.some((item) => page.match(item))
      ) {
        return template;
      }

      let { prefix, suffix } = defaultOptions;
      if (options?.prefix) {
        if (existsSync(options.prefix)) {
          prefix = readFileSync(options.prefix).toString();
        } else {
          prefix = options.prefix;
        }
      }
      if (options?.suffix) {
        if (existsSync(options.suffix)) {
          suffix = readFileSync(options.suffix).toString();
        } else {
          suffix = options.suffix;
        }
      }
      return `${prefix}${template}${suffix}`;
    },
  };
};

export default Plugin;
