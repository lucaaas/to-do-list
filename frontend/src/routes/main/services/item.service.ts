import { ApiHelper } from '../../../helpers/api.helper';
import { ItemModel } from '../../../models/item.model';
import type { JSONType } from '../../../types/JSON.type';

/**
 * Service for managing items.
 *
 * @extends ApiHelper
 */
export class ItemService extends ApiHelper {
  private readonly path: string = 'item';

  /**
   * Saves an item to the API.
   *
   * @param item - The item to be saved.
   * @returns A Promise that resolves with the ID of the saved item.
   */
  public async save(item: ItemModel): Promise<number> {
    const response: JSONType = await this.post(item.toJson());
    return response.id;
  }

  /**
   * Builds an `ItemModel` instance from a JSON response.
   *
   * @param json - The JSON to be converted.
   * @returns An `ItemModel` instance.
   *
   * @protected
   */
  protected buildObject(json: JSONType): ItemModel {
    return ItemModel.fromJson(json);
  }


  /**
   * Builds the URL for API requests.
   *
   * @returns The API endpoint URL.
   *
   * @protected
   */
  protected buildUrl(): string {
    return `${this.url}/${this.path}`;
  }
}