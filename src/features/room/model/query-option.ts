import { post } from '../create/api/post';
import { put } from '../update/api/put';

export const QueryOptionRooms = {
  baseKey: 'rooms',
  post: post,
  put: put,
};