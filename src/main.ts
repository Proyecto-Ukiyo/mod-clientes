import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  // Crea la aplicación como un Microservicio (TCP Listener)
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 3000, // Puerto conexión con mod-usuarios
      },
    },
  );
  await app.listen();
  console.log('Microservicio de clientes escuchando en el puerto 3000');
}
bootstrap();