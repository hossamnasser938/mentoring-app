import { injectable } from 'inversify';
import { HydratedDocument } from 'mongoose';

import { AGenericDAO } from './generic-dao.abstract';
import { IModel } from './mongo-models/types';

@injectable()
export class MongoGenericDAO<
  Entity,
  Doc extends HydratedDocument<Entity>,
  CreateEntityDTO extends Entity,
  UpdateEntityDTO extends Partial<Entity>,
> extends AGenericDAO<Entity, CreateEntityDTO, UpdateEntityDTO> {
  constructor(private readonly model: IModel<Entity, Doc>) {
    super();
  }

  getAll(): Promise<Entity[]> {
    return this.model.find().exec();
  }

  getOne(id: string): Promise<Entity | null> {
    return this.model.findById(id).exec();
  }

  async createOne(createEntityDTO: CreateEntityDTO): Promise<Entity> {
    const document = this.model.build(createEntityDTO);
    await document.save();
    return document;
  }

  async updateOne(
    id: string,
    updateEntityDTO: UpdateEntityDTO,
  ): Promise<boolean> {
    const result = await this.model.updateOne({ _id: id }, updateEntityDTO);
    return result.matchedCount === 1;
  }

  async deleteOne(id: string): Promise<boolean> {
    const result = await this.model.deleteOne({ _id: id });
    return result.deletedCount === 1;
  }
}
