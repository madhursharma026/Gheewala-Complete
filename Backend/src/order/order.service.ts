import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Order } from './entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderService {
  constructor(@InjectRepository(Order) private repo: Repository<Order>) { }

  // create(Qty: number, userId, productId) {
  //   const product = this.repo.create({ Qty });
  //   product.product = productId
  //   product.user = userId
  //   return this.repo.save(product);
  // }

  create(Qty: number, userId, productId) {

    const product = this.repo.create({ Qty });
    product.product = productId
    product.userId = userId 
    return this.repo.save(product);
  }

  findAll(): Promise<Order[]> {
    return this.repo.find({
      relations: ['user', 'product']
    });
  }

  update(id: number, DeliveryStatus: string) {
    return this.repo.update(id, { DeliveryStatus })
  }
  
  findOrderOfSingleUser(userId: number) {
    if (!userId) {
      return null;
    }
    return this.repo.find({
      where: { userId: userId },
      relations: ['product']
    });
  }
  
  findPendingOrders() {
    return this.repo.find({
      where: { DeliveryStatus: 'pending' }
    });
  }
  
  findDeliveredOrders() {
    return this.repo.find({
      where: { DeliveryStatus: 'delivered' }
    });
  }
}
