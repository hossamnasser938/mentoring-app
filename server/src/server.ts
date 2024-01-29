import 'reflect-metadata';

import dotenv from 'dotenv';
dotenv.config();
import { contactUsRouter } from '@contactUs/contactUs.router';
import { mentorRouter } from '@mentor/mentor.router';
import { projectIdeaRouter } from '@projectIdea/projectIdea.router';
import { userRouter } from '@user/user.router';
import { json } from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

const app = express();
app.use(express.static(path.resolve(__dirname, '../../client/build')));
app.use(json());

app.use('/mentors', mentorRouter);
app.use('/users', userRouter);
app.use('/projectIdeas', projectIdeaRouter);
app.use('/contactUs', contactUsRouter);

const MONGODB_URL =
  process.env.MONGODB_URL || 'mongodb://localhost:27017/mentoring';
const PORT = process.env.PORT || 3001;

mongoose.connect(MONGODB_URL, {}).then(() => {
  console.log('connected to mongo');

  app.listen(PORT, () => {
    console.log('app is running on port ' + PORT);
  });
});
