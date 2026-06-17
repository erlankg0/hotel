export interface BaseResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface QueryOptions {
  title?: string;
  page?: number;
  limit?: number;
  enabled?: boolean,
}