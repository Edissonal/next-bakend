
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';

// Cargar las variables de entorno de dotenv
dotenv.config();


@Module({
  imports: [ 
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI) ,
    AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {

}
