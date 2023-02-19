import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemService } from './item.service';

/**
 * Controller for handling request operations for items.
 */
@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {
  }

  /**
   * Endpoint for creating a new item.
   *
   * @param createItemDto - The DTO for creating a new item.
   * @returns A promise that resolves to the newly created item.
   */
  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemService.create(createItemDto);
  }

  /**
   * Endpoint for getting all items.
   *
   * @returns A promise that resolves to an array of all items.
   */
  @Get()
  findAll() {
    return this.itemService.findAll();
  }

  /**
   * Endpoint for getting a single item by ID.
   *
   * @param id - The ID of the item to retrieve.
   * @returns A promise that resolves to the item with the specified ID.
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemService.findOne(+id);
  }

  /**
   * Endpoint for updating an existing item.
   *
   * @param id - The ID of the item to update.
   * @param updateItemDto - The DTO for updating an item.
   * @returns A promise that resolves to the updated item.
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemService.update(+id, updateItemDto);
  }

  /**
   * Endpoint for deleting an existing item.
   *
   * @param id - The ID of the item to delete.
   * @returns A promise that resolves to the deleted item.
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemService.remove(+id);
  }
}
