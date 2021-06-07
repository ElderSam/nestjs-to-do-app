// define what each document in my Tasks collection looks like

import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  description: String,
  completed: Boolean,
});
