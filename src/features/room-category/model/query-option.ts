import { post } from '../api/post';
import { put } from '../api/put';
import { remove } from '../api/remove';

export const QueryOptionRoomCategory = {
  baseKey: 'room-categories',
  post: post,
  put: put,
  remove: remove,
};