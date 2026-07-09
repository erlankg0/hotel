import { delete_ } from '../api/delete';
import { post } from '../api/post';

export const QueryOptionAmenity = {
  baseKey: 'amenity',
  post: post,
  delete: (id: string) => delete_(id),
};