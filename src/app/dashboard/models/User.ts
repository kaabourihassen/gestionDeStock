export interface User{
    userId? : Number;
    cin? : Number;
    fullName? : String;
    email? : String;
    password? : String;
    age? : Number;
    role? : String;
    authorities? : [
      {
        authority : String
      }
    ]
}
