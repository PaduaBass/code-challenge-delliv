import { Module } from '@nestjs/common'
import { OrderController } from './order.controller'
import { OrderService } from './order.service'
import { PrismaService } from 'src/database/prisma.service'
@Module({
  imports: [],
  controllers: [OrderController],
  providers: [PrismaService, OrderService],
})
export class OrderModule {}
