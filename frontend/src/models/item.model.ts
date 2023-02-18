import { j } from 'vitest/dist/index-5aad25c1';
import type { JSONType } from '../types/JSON.type';
import { BaseModel } from './base.model';

export class ItemModel extends BaseModel {
  public description: string;
  public done: boolean = false;

  constructor(description: string, done: boolean, id?: number) {
    super(id);
    this.description = description;
    this.done = done;
  }

  public static fromJson(json: JSONType): ItemModel {
    return new this(json.get('id'), json.get('description'), json.get('done'));
  }

  public toJson(): JSONType {
    const json: JSONType = super.toJson();
    json.set('description', this.description);
    json.set('done', this.done);

    return json;
  }
}