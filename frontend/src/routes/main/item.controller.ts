import { ItemModel } from '../../models/item.model';
import { ItemService } from './services/item.service';

/**
 * A controller for handling items.
 */
export class ItemController {
  private itemService: ItemService = new ItemService();

  /**
   * Returns a promise that resolves to an array of completed items and another of uncompleted items.
   */
  public async getItems(): Promise<{ completedItems: Array<ItemModel>; uncompletedItems: Array<ItemModel> }> {
    const items: Array<ItemModel> = await this.itemService.getAll() as Array<ItemModel>;
    const completedItems: Array<ItemModel> = [];
    const uncompletedItems: Array<ItemModel> = [];

    for (let item of items) {
      if (item.done) {
        completedItems.push(item);
      } else {
        uncompletedItems.push(item);
      }
    }

    return {completedItems, uncompletedItems};
  }

  /**
   * Saves an item with the specified description and returns the saved item.
   *
   * @param description The description of the item to be saved.
   * @returns A promise that resolves to the saved item.
   */
  public async save(description: string): Promise<ItemModel> {
    const item: ItemModel = new ItemModel(description, false);
    const id: number = await this.itemService.save(item);
    item.id = id;

    return item;
  }

  /**
   * Updates the given item on server.
   *
   * @param item The item to be updated.
   */
  public async updateItem(item: ItemModel): Promise<void> {
    await this.itemService.update(item);
  }
}