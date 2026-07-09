import { delete_ } from '../api/delete';
import { post } from '../api/post';

export const QueryOptionRequest = {
  baseKey: 'requests',
  post: post,
  remove: (id: string) => delete_(id),
};