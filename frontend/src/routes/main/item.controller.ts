import { ItemModel } from '../../models/item.model';
import { ItemService } from './services/item.service';

/**
 * A controller for handling items.
 */
export class ItemController {
  private itemService: ItemService = new ItemService();

  /**
   * Returns a promise that resolves to an array of all items.
   */
  public async getItems(): Promise<Array<ItemModel>> {
    return await this.itemService.getAll() as Array<ItemModel>;
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
}