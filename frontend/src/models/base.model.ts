import type { JSONType } from '../types/JSON.type';

/**
 * Base model class for all models in the application.
 * @property id The ID of the model.
 */
export abstract class BaseModel {
  public id?: number;

  /**
   * Creates a new instance of the BaseModel class.
   * @param id The ID of the model.
   */
  protected constructor(id?: number) {
    this.id = id;
  }

  /**
   * Returns a JSON representation of the model.
   */
  public toJson(): JSONType {
    return {'id': this.id};
  }
}