import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ClientesService } from './clientes.service';

@Controller()
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  // Define el patrón de mensaje que este Microservicio reconocerá
  @MessagePattern({ cmd: 'obtener_datos_cliente' })
  obtenerDatosCliente(clienteId: string) {
    return this.clientesService.findOne(clienteId);
  }
}