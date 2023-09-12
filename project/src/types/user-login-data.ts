
export type UserLoginDataResponse = {
  avatarUrl: string,
  email: string,
  id: number,
  name: string,
  token: string,
};

export type UserLogin = {
  email: string,
  password:string
}
