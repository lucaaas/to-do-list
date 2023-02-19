import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, QueryRunner, Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemService {
  constructor(@InjectRepository(Item)
              private itemRepository: Repository<Item>,
              private dataSource: DataSource,) {
  }
  public async create(createItemDto: CreateItemDto) {
    const item: Item = new Item();
    item.id = createItemDto.id;
    item.description = createItemDto.description;
    item.done = createItemDto.done;

    return await this.itemRepository.save(item);
  }

  public async findAll(): Promise<Array<Item>> {
    const queryRunner: QueryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    return await queryRunner.manager.find(Item);
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
