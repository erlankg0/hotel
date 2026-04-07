import { createApi } from '../create/api/create';
import { deleteApi } from '../delete/api/delete';

export const QueryOptionRequest = {
  baseKey: 'requests',
  create: createApi,
  delete: (id: string) => deleteApi(id),
};