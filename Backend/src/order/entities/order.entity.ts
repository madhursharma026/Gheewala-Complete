import { User } from 'src/auth/user.entity';
import { Product } from 'src/product/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, default: 'Not Delivered' })
    DeliveryStatus: string;

    @CreateDateColumn({ name: 'placed_at' })
    placed_at: Date;

    @Column({ nullable: false })
    Qty: number;

    @Column({ nullable: false })
    userId: number;

    @ManyToOne(() => User, user => user.orders)
    user: User;

    @ManyToOne(() => Product, product => product.orders)
    product: Product;
}

