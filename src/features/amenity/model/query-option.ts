import { post } from '../api/post';
import { deleteApi } from '../delete/api/delete';

export const QueryOptionRequest = {
  baseKey: 'amenity',
  post: post,
  delete: (id: string) => deleteApi(id),
};