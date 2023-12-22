import {
  HttpException,
  HttpStatus,
  Injectable,
  OnModuleInit,
} from '@nestjs/common'
import { PrismaService } from '../../database/prisma.service'
import { mockOrder } from '../../mock/order'

@Injectable()
export class OrderService implements OnModuleInit {
  constructor(private prisma: PrismaService) {}
  async onModuleInit() {
    await this.createOrders()
  }

  async list() {
    try {
      const orders = await this.prisma.order.findMany({
        orderBy: { client_name: 'asc' },
      })
      return orders
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST)
    }
  }

  async changeStatus(id: string, status: string) {
    try {
      const order = await this.prisma.order.update({
        where: {
          id,
        },
        data: {
          status,
        },
      })
      if (!order) {
        throw new HttpException('Order not found', HttpStatus.NOT_FOUND)
      }
      return order
    } catch (e) {
      throw new HttpException(e, HttpStatus.BAD_REQUEST)
    }
  }

  async createOrders() {
    const orders = await this.prisma.order.findMany({
      take: 10,
    })
    if (orders.length === 0) {
      mockOrder.forEach(async (order) => {
        await this.prisma.order.create({
          data: {
            address: order.address,
            client_name: order.client_name,
            status: order.status,
          },
        })
      })
    }
  }
}
