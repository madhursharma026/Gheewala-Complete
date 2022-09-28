import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  
  constructor(@InjectRepository(Category) private repo: Repository<Category>) { }
  create(Title: string, CategoryImage: string) {
    const category = this.repo.create({ Title, CategoryImage });
    return this.repo.save(category);
  }

  findAll(): Promise<Category[]> {
    return this.repo.find();
  }

  update(id: number, Title: string, CategoryImage: string) {
    return this.repo.update(id, { Title, CategoryImage })
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
  
  findSingleCategory(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.find({
      where: { id: id }
    });
  }
}

