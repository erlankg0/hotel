import { post } from '../api/post';
import { put } from '../api/put';
import { remove } from '../api/remove';

export const QueryOptionHotel = {
  baseKey: 'hotel',
  post: post,
  put: put,
  remove: remove,
};