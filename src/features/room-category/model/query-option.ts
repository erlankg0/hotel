import { remove } from '../api/remove';
import { post } from '../api/post';
import { put } from '../api/put';

export const QueryOptionRoomCategory = {
  baseKey: 'room-categories',
  post: post,
  put: put,
  remove: remove,
};