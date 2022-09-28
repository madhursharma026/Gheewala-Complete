import { CategoryService } from './category.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Controller, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, NotFoundException, Get } from '@nestjs/common';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Post('add_category')
  @UseInterceptors(FileInterceptor('CategoryImage'))
  async createCategory(@Body() body: CreateCategoryDto, @UploadedFile() CategoryImage: Express.Multer.File) {
    if ((CategoryImage.mimetype === "image/jpeg") || (CategoryImage.mimetype === "image/jpg") || (CategoryImage.mimetype === "image/png")) {
      const newCategory = await this.categoryService.create(body.Title, CategoryImage.filename);
      return newCategory;
    } else {
      throw new NotFoundException('Only Image Files are allowed!');
    }
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('CategoryImage'))
  async updateCategory(@Param('id') id: string, @Body() body: UpdateCategoryDto, @UploadedFile() CategoryImage: Express.Multer.File) {
    if (CategoryImage === undefined) {
      const updatedCategory = await this.categoryService.update(+id, body.Title, body.CategoryImage);
      return updatedCategory;
    } else {
      const updatedCategory = await this.categoryService.update(+id, body.Title, CategoryImage.filename);
      return updatedCategory;
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }

  @Get("/single_category/:id")
  findSingleCategory(@Param('id') id: number) {
    return this.categoryService.findSingleCategory(+id);
  }
}
