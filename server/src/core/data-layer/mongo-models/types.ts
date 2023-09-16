import { HydratedDocument, Model } from 'mongoose';

export interface IModel<E, D extends HydratedDocument<E>> extends Model<D> {
  build: (entity: E) => D;
}
