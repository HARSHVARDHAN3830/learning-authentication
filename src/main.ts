/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalGuards(new ValidationPipe());

  app.useGlobalPipes(new ValidationPipe({
    whitelist:true, 
    //this will remove the unknown keys form the request other the the dto object
    forbidNonWhitelisted: true
    //this wll throw error if extra field are provided other then the  dto file
  })); 
  // this enables the global pipe and will not allow to read the rendom things from the request
  await app.listen(8000);
  console.log("Executred successfully at post 8000");
}
bootstrap();
