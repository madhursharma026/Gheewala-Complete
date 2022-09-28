import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private repo: Repository<Product>) { }

  create(Title: string, ProductImage: string, ShortDescription: string, LongDescription: string, Inventory: string, categoryId) {
    const product = this.repo.create({ Title, ProductImage, ShortDescription, LongDescription, Inventory });
    product.category = categoryId;
    return this.repo.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.repo.find(
      {relations: ['category']}
    );
  }

  update(id: number, Title: string, ProductImage: string, ShortDescription: string, LongDescription: string, Inventory: string) {
    return this.repo.update(id, { Title, ProductImage, ShortDescription, LongDescription, Inventory })
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

