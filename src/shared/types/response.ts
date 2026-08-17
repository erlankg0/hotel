export interface BaseResponse<T> {
  data: T;
  status: number;
  message: string;
  total: number;
  page: number;
  limit: number;
}

export interface QueryOptions {
  title?: string;
  page?: number;
  limit?: number;
  enabled?: boolean,
  id?: string,
}