import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { OrderService } from './order.service'
import { ChangeStatusOrder } from '../../interfaces/Order/ChangeStatusOrder'
import { AuthGuard } from '../Auth/auth.guard'

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}
  @UseGuards(AuthGuard)
  @Post('/change/:id')
  changeStatus(@Param('id') id, @Body() body: ChangeStatusOrder) {
    return this.orderService.changeStatus(id, body.status)
  }

  @UseGuards(AuthGuard)
  @Get('')
  listOrder() {
    return this.orderService.list()
  }
}
