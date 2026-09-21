import { post } from '../api/post';
import { add_rooms } from '../api/add-room';

export const QueryOptionContract = {
  baseKey: 'contracts',
  post: post,
  add_rooms: add_rooms
};