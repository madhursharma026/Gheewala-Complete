import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private repo: Repository<Product>) { }

  create(Title: string, ProductImage: string, ShortDescription: string, LongDescription: string, Inventory: string, Price: number, categoryId) {
    const product = this.repo.create({ Title, ProductImage, ShortDescription, LongDescription, Inventory, Price });
    product.category = categoryId;
    return this.repo.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.repo.find(
      {relations: ['category']}
    );
  }

  update(id: number, Title: string, ProductImage: string, ShortDescription: string, LongDescription: string, Inventory: string, Price: number) {
    return this.repo.update(id, { Title, ProductImage, ShortDescription, LongDescription, Inventory, Price })
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
  
  findSingleProduct(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.find({
      where: { id: id },
      relations: ['category']
    });
  }
}

