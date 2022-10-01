import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Controller, Post, Body, Patch, Param, Get } from '@nestjs/common';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('place_order/userId=:userId/productId=:productId')
  async createCategory(@Body() body: CreateOrderDto, @Param('userId') userId: string, @Param('productId') productId: string) {
      const newProduct = await this.orderService.create(body.Qty, +userId, +productId);
      return newProduct;
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Patch(':id')
  async updateCategory(@Param('id') id: string, @Body() body: UpdateOrderDto) {
      const updatedCategory = await this.orderService.update(+id, body.DeliveryStatus);
      return updatedCategory;
  }

  @Get("/user_profile/:userId")
  findOrderOfSingleUser(@Param('userId') userId: number) {
    return this.orderService.findOrderOfSingleUser(+userId);
  }

  @Get('/pending')
  findPendingOrders() {
    return this.orderService.findPendingOrders();
  }

  @Get('/delivered')
  findDeliveredOrders() {
    return this.orderService.findPendingOrders();
  }
}
