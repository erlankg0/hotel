import { add_rooms } from '../api/add';
import { post } from '../api/post';

export const QueryOptionContractRoom = {
  baseKey: 'contract-room',
  add_rooms: add_rooms,
  post: post,
};