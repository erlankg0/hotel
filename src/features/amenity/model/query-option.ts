import { createApi } from '../create/api/create';
import { deleteApi } from '../delete/api/delete';

export const QueryOptionRequest = {
  baseKey: 'amenity',
  create: createApi,
  delete: (id: string) => deleteApi(id),
};