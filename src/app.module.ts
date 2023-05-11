import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://bruno:1234@cluster0.nzofyyf.mongodb.net/'),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
