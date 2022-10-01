import { ProductService } from './product.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, NotFoundException } from '@nestjs/common';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post('add_product/categoryId=:categoryId')
  @UseInterceptors(FileInterceptor('ProductImage'))
  async createCategory(@Body() body: CreateProductDto, @UploadedFile() ProductImage: Express.Multer.File, @Param('categoryId') categoryId: string) {
    if ((ProductImage.mimetype === "image/jpeg") || (ProductImage.mimetype === "image/jpg") || (ProductImage.mimetype === "image/png")) {
      const newProduct = await this.productService.create(body.Title, ProductImage.filename, body.ShortDescription, body.LongDescription, body.Inventory, body.Price, +categoryId);
      return newProduct;
    } else {
      throw new NotFoundException('Only Image Files are allowed!');
    }
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('ProductImage'))
  async updateCategory(@Param('id') id: string, @Body() body: UpdateProductDto, @UploadedFile() ProductImage: Express.Multer.File) {
    // if ((ProductImage.mimetype === "image/jpeg") || (ProductImage.mimetype === "image/jpg") || (ProductImage.mimetype === "image/png")) {
    //   const updatedCategory = await this.productService.update(+id, body.Title, ProductImage.filename, body.ShortDescription, body.LongDescription, body.Inventory);
    //   return updatedCategory;
    // } else {
    //   throw new NotFoundException('Only Image Files are allowed!');
    // }
    if (ProductImage === undefined) {
      const updatedCategory = await this.productService.update(+id, body.Title, body.ProductImage, body.ShortDescription, body.LongDescription, body.Inventory, body.Price);
      return updatedCategory;
    } else {
      const updatedCategory = await this.productService.update(+id, body.Title, ProductImage.filename, body.ShortDescription, body.LongDescription, body.Inventory, body.Price);
      return updatedCategory;
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }

  @Get("/single_product/:id")
  findSingleProduct(@Param('id') id: number) {
    return this.productService.findSingleProduct(+id);
  }
}
