/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from './errors';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return this.prismaService.products.create({
      data: {
        ...createProductDto,
        quantity: 0,
      },
    });
  }

  findAll() {
    return this.prismaService.products.findMany();
  }

  findOne(id: number) {
    return this.prismaService.products.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      return await this.prismaService.products.update({
        where: { id },
        data: updateProductDto,
      });
    } catch (error) {
      if(error.code === 'P2025') {
        throw new NotFoundError(`this product id: ${ id } not exist`)
      }
    }
  }

  remove(id: number) {
    return this.prismaService.products.delete({
      where: { id },
    });
  }
}
