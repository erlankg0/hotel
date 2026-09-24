import { delete_ } from '../api/delete';
import { post } from '../api/post';
import { put } from '../api/put';

export const QueryOptionRequest = {
  baseKey: 'requests',
  post: post,
  remove: delete_,
  put: put,
};