import { delete_ } from '../api/delete';
import { post } from '../api/post';
import { put } from '../api/put';

export const QueryOptionAmenity = {
  baseKey: 'amenity',
  post: post,
  delete: (id: string) => delete_(id),
  put: put,
};