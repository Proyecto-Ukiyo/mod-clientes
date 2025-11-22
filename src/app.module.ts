import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesModule } from './modulos/clientes/clientes.module';
import { Cliente } from './modulos/clientes/entities/cliente.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Cliente],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ClientesModule,
  ],
})
export class AppModule {}