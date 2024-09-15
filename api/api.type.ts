export type ResponseType = "SUCCESS" | "ERROR";

export type ResponseObj<T = any> = {
  statusCode: number;
  code: string;
  data: T;
  error: {
    type: string;
    data: string;
  } | null;
  debug: null;
};
