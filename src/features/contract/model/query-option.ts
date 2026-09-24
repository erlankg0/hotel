import { add_rooms } from '../api/add-room';
import { post } from '../api/post';

export const QueryOptionContract = {
  baseKey: 'contracts',
  post: post,
  add_rooms: add_rooms
};