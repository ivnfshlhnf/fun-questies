export interface IUser {
  id: string;
  name: string;
  password: string;
}
export type UserContextType = {
  user: IUser | null;
  setUser: (user: IUser) => void;
  signOut: () => void;
};
