import type { JSONType } from '../types/JSON.type';
import { BaseModel } from './base.model';

/**
 * Represents a Item in a to-do list
 *
 * @property description descriptions of a item
 * @property done indicates whether a item is complete or not
 *
 * @extends BaseModel
 */
export class ItemModel extends BaseModel {
  public description: string;
  public done: boolean = false;

  constructor(description: string, done: boolean, id?: number) {
    super(id);
    this.description = description;
    this.done = done;
  }

  /**
   * Creates a new `ItemModel` instance from a JSON object.
   *
   * @param json The JSON object to convert.
   * @returns A new `ItemModel` instance.
   */
  public static fromJson(json: JSONType): ItemModel {
    return new this(json.description, json.done, json.id);
  }

  /**
   * Converts this `ItemModel` instance to a JSON object.
   *
   * @returns A JSON object representing this `ItemModel`.
   */
  public toJson(): JSONType {
    const json: JSONType = super.toJson();
    json.description = this.description;
    json.done = this.done;

    return json;
  }
}