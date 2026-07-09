import { delete_ } from '../api/delete';
import { post } from '../api/post';
import { put } from '../api/put';

export const QueryOptionRooms = {
  baseKey: 'rooms',
  post: post,
  put: put,
  delete_: delete_,
};