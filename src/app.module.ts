import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

import { config } from 'dotenv';
config();

const { MONGO_DB_NAME, MONGODB_USER, MONGODB_PASSWORD } = process.env;

console.log(MONGO_DB_NAME, MONGODB_USER, MONGODB_PASSWORD);

/*
Accessing a remote MongoDB database;

  1. go to: https://cloud.mongodb.com/
  2. click connect -> connect your application -> copy the url to this file (inside MongooseModule.forRoot())
  3. go back to the mongoDB website (in Cloud), click on Database Access, create a user and copy the name and password.
  4. Create an .env file and insert;
  MONGO_DB_NAME=...
  MONGODB_USER=...
  MONGODB_PASSWORD=...
  5. (in the Atlas of Mongo) click on Network Access and and release for specific IPs or for all (less secure)
*/

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.kxfls.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`,
    ),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
