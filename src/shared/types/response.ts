export interface BaseResponse<T> {
  data: T[];
  limit: number;
  page: number;
  total: number;
}

export interface QueryOptions {
  name?: string;
  page?: number;
  limit?: number;
  enabled?: boolean,
}