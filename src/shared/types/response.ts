export interface BaseResponse<T> {
  data: T[];
  status: number;
  message: string;
}

export interface QueryOptions {
  name?: string;
  page?: number;
  limit?: number;
  enabled?: boolean,
}