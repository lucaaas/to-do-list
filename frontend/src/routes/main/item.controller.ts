import { ItemModel } from '../../models/item.model';
import { ItemService } from './services/item.service';

export class ItemController {
  private itemService: ItemService = new ItemService();

  public async getItems(): Promise<Array<ItemModel>> {
    return await this.itemService.getAll() as Array<ItemModel>;
  }

  public async save(description: string): Promise<ItemModel> {
    const item: ItemModel = new ItemModel(description, false);
    const id: number = await this.itemService.save(item);
    item.id = id;

    return item;
  }
}