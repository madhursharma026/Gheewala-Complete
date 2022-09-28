import { Module } from '@nestjs/common';
import { User } from './auth/user.entity';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { OrderModule } from './order/order.module';
import { Order } from './order/entities/order.entity';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';
import { CategoryModule } from './category/category.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Category } from './category/entities/category.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'gheewala',
        entities: [Category, Product, User, Order],
        synchronize: true,
        autoLoadEntities: true,
        };
      },
    }),
    CategoryModule,
    AuthModule,
    ProductModule,
    OrderModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

