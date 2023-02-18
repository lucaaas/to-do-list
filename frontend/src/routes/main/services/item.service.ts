import { ApiHelper } from '../../../helpers/api.helper';
import { ItemModel } from '../../../models/item.model';
import type { JSONType } from '../../../types/JSON.type';

class ItemService extends ApiHelper {
  private readonly path: string = 'item';

  public buildObject(json: JSONType): ItemModel {
    return ItemModel.fromJson(json);
  }

  public buildUrl(): string {
    return `${this.url}/${this.path}`;
  }
}