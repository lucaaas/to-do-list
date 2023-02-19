import { ApiHelper } from '../../../helpers/api.helper';
import { ItemModel } from '../../../models/item.model';
import type { JSONType } from '../../../types/JSON.type';

export class ItemService extends ApiHelper {
  private readonly path: string = 'item';

  public async save(item: ItemModel): Promise<number> {
    const response: JSONType = await this.post(item.toJson());
    return response.id;
  }

  protected buildObject(json: JSONType): ItemModel {
    return ItemModel.fromJson(json);
  }

  protected buildUrl(): string {
    return `${this.url}/${this.path}`;
  }
}