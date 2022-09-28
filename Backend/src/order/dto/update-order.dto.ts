import { IsString, IsOptional, IsDate } from 'class-validator';

export class UpdateOrderDto {
    @IsString()
    @IsOptional()
    DeliveryStatus: string;
}
