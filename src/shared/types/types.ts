export type PageableResponse<T> = {
  limit: number;
  total: number;
  page: number;
  data: T;
};

export type Pallete =
  | "purple-900"
  | "purple-800"
  | "purple-700"
  | "purple-600"
  | "purple-500"
  | "purple-400"
  | "purple-300"
  | "purple-200"
  | "purple-100"
  | "purple-50"
  | "red-900"
  | "red-800"
  | "red-700"
  | "red-600"
  | "red-500"
  | "red-400"
  | "red-300"
  | "red-200"
  | "red-100"
  | "red-25"
  | "black-1000"
  | "black-900"
  | "black-850"
  | "black-800"
  | "black-700"
  | "black-600"
  | "black-500"
  | "black-400"
  | "black-300"
  | "black-200"
  | "black-150"
  | "black-100"
  | "black-50"
  | "black-30"
  | "black-25"
  | "white-900";
