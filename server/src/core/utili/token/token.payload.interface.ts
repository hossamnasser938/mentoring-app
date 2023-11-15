import mongoose from 'mongoose';

export interface TPayload {
  email: string;
  role: string;
  id: mongoose.Types.ObjectId;
}
