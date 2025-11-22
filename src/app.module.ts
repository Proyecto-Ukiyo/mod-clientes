import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesModule } from './modulos/clientes/clientes.module';
import { Cliente } from './modulos/clientes/entities/cliente.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '194.163.170.169', // IP VPS
      port: 5432, 
      username: 'user_clientes',
      password: 'password_clientes',
      database: 'bd_clientes',
      entities: [Cliente],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ClientesModule,
  ],
})
export class AppModule {}