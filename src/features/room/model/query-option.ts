import { post } from '../create/api/post';
import { delete_ } from '../delete/api/delete';
import { put } from '../update/api/put';

export const QueryOptionRooms = {
  baseKey: 'rooms',
  post: post,
  put: put,
  delete_: delete_,
};