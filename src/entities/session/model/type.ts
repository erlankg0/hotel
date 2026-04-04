export interface UserSummary {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string | null;
  createdAt: Date,
  updatedAt: Date,
}