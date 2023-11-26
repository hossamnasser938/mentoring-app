import 'reflect-metadata';

import dotenv from 'dotenv';
dotenv.config();
import { mentorRouter } from '@mentor/mentor.router';
import { projectIdeasRouter } from '@projectIdeas/projectIdeas.router';
import { userRouter } from '@user/user.router';
import { json } from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

const app = express();
app.use(express.static(path.resolve(__dirname, '../../client/build')));
app.use(json());

app.use('/mentors', mentorRouter);
app.use('/user', userRouter);
app.use('/projectIdeas', projectIdeasRouter);

const MONGODB_URL =
  process.env.MONGODB_URL || 'mongodb://localhost:27017/mentoring';
const PORT = process.env.PORT || 3001;

mongoose.connect(MONGODB_URL, {}).then(() => {
  console.log('connected to mongo');

  app.listen(PORT, () => {
    console.log('app is running on port ' + PORT);
  });
});
