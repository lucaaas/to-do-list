import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, DeleteResult, QueryRunner, Repository, UpdateResult } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemService {
  constructor(@InjectRepository(Item)
              private itemRepository: Repository<Item>,
              private dataSource: DataSource,) {
  }

  /**
   * Creates a new item in the database using the data from a CreateItemDto object.
   *
   * @param createItemDto The data for the new item.
   * @returns The newly created item.
   */
  public async create(createItemDto: CreateItemDto) {
    const item: Item = new Item();
    item.id = createItemDto.id;
    item.description = createItemDto.description;
    item.done = createItemDto.done;

    return await this.itemRepository.save(item);
  }

  /**
   * Returns all items currently in the database.
   *
   * @returns An array of all items.
   */
  public async findAll(): Promise<Array<Item>> {
    const queryRunner: QueryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    return await queryRunner.manager.find(Item);
  }

  /**
   * Finds a single item in the database by its ID.
   *
   * @param id The ID of the item to find.
   * @returns The item with the specified ID, or null if it doesn't exist.
   */
  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  /**
   * Updates an item in the database with new data from an UpdateItemDto object.
   *
   * @param id The ID of the item to update.
   * @param updateItemDto The updated data for the item.
   * @returns The updated item.
   */
  public async update(id: number, updateItemDto: UpdateItemDto): Promise<number> {
    const result: UpdateResult = await this.itemRepository.update(id, updateItemDto);
    return result.affected;
  }

  /**
   * Deletes an item from the database by its ID.
   *
   * @param id The ID of the item to delete.
   * @returns The deleted item.
   */
  public remove(id: number): Promise<DeleteResult> {
    return this.itemRepository.delete({id: id});
  }
}
