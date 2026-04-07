export interface BaseResponse<T> {
  data: {
    data: T[];
    page: number;
    total: number;
  };
  status: number;
  message: string;
}

export interface QueryOptions {
  name?: string;
  page?: number;
  limit?: number;
  enabled?: boolean,
}