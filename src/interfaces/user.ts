import { Document } from 'mongoose';
import userRoleEnum from './userRole';

export default interface UserInterface extends Document {
  name: string,
  lastName: string, 
  email: string,
  password: string,
  role: userRoleEnum,
  comparePasswords: (candidatePassword: string) => Promise<boolean>;
}
