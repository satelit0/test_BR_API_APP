import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true,  });

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true, 
      forbidNonWhitelisted: true,
    }),
  );

  const configService = app.get(ConfigService);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('API Test_Banreservas')
    .setDescription('Documentación api dev') 
    .setVersion('1.0.0')
    .build();
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: configService.get('FRONTEND_URL'),  
  });

  const port = configService.get('PORT') ?? 3000;

  await app.listen(port);
}
bootstrap();
