export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  remember: boolean;
  termsAndConditions: boolean;
  pinCode?: number;
}
