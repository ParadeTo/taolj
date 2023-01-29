/* eslint-disable */
import { Any } from "./google/protobuf/any";

export const protobufPackage = "common";

export enum Code {
  SUCCESS = 0,
  UNRECOGNIZED = -1,
}

export interface Pagination {
  page: number;
  pageSize: number;
}

export interface Response {
  code: Code;
  errMsg: string;
  data: Any | undefined;
}

export const COMMON_PACKAGE_NAME = "common";
