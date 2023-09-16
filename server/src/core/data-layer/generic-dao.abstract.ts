export abstract class AGenericDAO<
  Entity,
  ICreateEntityDTO extends Entity,
  IUpdateEntityDTO extends Partial<Entity>,
> {
  abstract getAll(): Promise<Entity[]>;

  abstract getOne(id: string): Promise<Entity | null>;

  abstract createOne(createEntityDTO: ICreateEntityDTO): Promise<Entity>;

  abstract updateOne(
    id: string,
    updateEntityDTO: IUpdateEntityDTO,
  ): Promise<boolean>;

  abstract deleteOne(id: string): Promise<boolean>;
}
