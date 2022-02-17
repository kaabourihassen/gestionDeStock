export class UserSession{
  constructor(
    public token  : string,
    public id: string,
    public email: string,
    public role: string,
    public fullName: string,
  ){}
}
