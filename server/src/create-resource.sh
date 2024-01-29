#!/bin/bash

MODULE_NAME="$1"

mkdir src/$MODULE_NAME

getModuleName() {
  echo $MODULE_NAME
}

getModuleNomeAllCaps() {
  local module_name=$(getModuleName)
  echo ${module_name//-/_} | tr '[:lower:]' '[:upper:]'
}

getModuleNameCamelCase() {
  local module_name=$(getModuleName)
  local camel_case_name=""
  IFS='-' read -ra words <<< "$module_name"
  first_word_processed=false
  for word in "${words[@]}"; do
    if [ "$first_word_processed" = false ]; then
      camel_case_name+="${word}"
      first_word_processed=true
    else
      camel_case_name+="$(tr '[:lower:]' '[:upper:]' <<< ${word:0:1})${word:1}"
    fi
  done
  echo ${camel_case_name}
}

getModuleNamePascalCase() {
  local module_name=$(getModuleName)
  local pascal_case_name=""
  IFS='-' read -ra words <<< "$module_name"
  for word in "${words[@]}"; do
    pascal_case_name+=$(tr '[:lower:]' '[:upper:]' <<< ${word:0:1})${word:1}
  done
  echo ${pascal_case_name}
}

getModuleNameSnakeCase() {
  local module_name=$(getModuleName)
  echo ${module_name//-/_}
}

#####
# abstract entity
echo "import { BaseEntity } from './base.entity';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface I$(getModuleNamePascalCase) extends BaseEntity {}" > src/core/entities/$(getModuleName).entity.ts

#####
# monog model
echo "import { I$(getModuleNamePascalCase) } from '@core/entities/$(getModuleName).entity';
import { HydratedDocument, model, Schema } from 'mongoose';

import { IModel } from './types';

export type I$(getModuleNamePascalCase)Document = HydratedDocument<I$(getModuleNamePascalCase)>;
export type $(getModuleNamePascalCase)Model = IModel<I$(getModuleNamePascalCase), I$(getModuleNamePascalCase)Document>;

const $(getModuleNameCamelCase)Schema = new Schema({});

$(getModuleNameCamelCase)Schema.statics.build = ($(getModuleNameCamelCase): I$(getModuleNamePascalCase)) => {
  return new $(getModuleNameCamelCase)Model($(getModuleNameCamelCase));
};

const $(getModuleNameCamelCase)Model: $(getModuleNamePascalCase)Model = model<
  I$(getModuleNamePascalCase)Document,
  IModel<I$(getModuleNamePascalCase), I$(getModuleNamePascalCase)Document>
>('$(getModuleNamePascalCase)', $(getModuleNameCamelCase)Schema);

export { $(getModuleNameCamelCase)Model };" > src/core/data-layer/mongo-models/$(getModuleName).model.ts

#####
# package.json
echo "{
  \"name\": \"@$(getModuleName)\"
}
" > src/$(getModuleName)/package.json

#####
# entity dtos
echo "import { I$(getModuleNamePascalCase) } from '@core/entities/$(getModuleName).entity';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICreate$(getModuleNamePascalCase)DTO extends I$(getModuleNamePascalCase) {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IUpdate$(getModuleNamePascalCase)DTO extends Partial<ICreate$(getModuleNamePascalCase)DTO> {}" > src/$(getModuleName)/$(getModuleName).types.ts

#####
# abstract dao
echo "import { AGenericDAO } from '@core/data-layer/generic-dao.abstract';
import { I$(getModuleNamePascalCase) } from '@core/entities/$(getModuleName).entity';

import { ICreate$(getModuleNamePascalCase)DTO, IUpdate$(getModuleNamePascalCase)DTO } from './$(getModuleName).types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface I$(getModuleNamePascalCase)DAO
  extends AGenericDAO<I$(getModuleNamePascalCase), ICreate$(getModuleNamePascalCase)DTO, IUpdate$(getModuleNamePascalCase)DTO> {}" > src/$(getModuleName)/$(getModuleName).dao.abstract.ts

##### 
# concrete dao
echo "import { MongoGenericDAO } from '@core/data-layer/generic-dao.mongo';
import {
  I$(getModuleNamePascalCase)Document,
  $(getModuleNamePascalCase)Model,
} from '@core/data-layer/mongo-models/$(getModuleName).model';
import { I$(getModuleNamePascalCase) } from '@core/entities/$(getModuleName).entity';
import { IOC_TYPES } from '@core/ioc-container/types';
import { inject, injectable } from 'inversify';

import { I$(getModuleNamePascalCase)DAO } from './$(getModuleName).dao.abstract';
import { ICreate$(getModuleNamePascalCase)DTO, IUpdate$(getModuleNamePascalCase)DTO } from './$(getModuleName).types';

@injectable()
export class $(getModuleNamePascalCase)DAO
  extends MongoGenericDAO<
    I$(getModuleNamePascalCase),
    I$(getModuleNamePascalCase)Document,
    ICreate$(getModuleNamePascalCase)DTO,
    IUpdate$(getModuleNamePascalCase)DTO
  >
  implements I$(getModuleNamePascalCase)DAO
{
  constructor(@inject(IOC_TYPES.$(getModuleNamePascalCase)Model) $(getModuleNameCamelCase)Model: $(getModuleNamePascalCase)Model) {
    super($(getModuleNameCamelCase)Model);
  }
}" > src/$(getModuleName)/$(getModuleName).dao.ts

#####
# service 
echo "import { IOC_TYPES } from '@core/ioc-container/types';
import { inject, injectable } from 'inversify';

import { I$(getModuleNamePascalCase)DAO } from './$(getModuleName).dao.abstract';
import { ICreate$(getModuleNamePascalCase)DTO, IUpdate$(getModuleNamePascalCase)DTO } from './$(getModuleName).types';

@injectable()
export class $(getModuleNamePascalCase)Servie {
  constructor(
    @inject(IOC_TYPES.I$(getModuleNamePascalCase)DAO) private readonly $(getModuleNameCamelCase)DAO: I$(getModuleNamePascalCase)DAO,
  ) {}

  getAll$(getModuleNamePascalCase)s() {
    return this.$(getModuleNameCamelCase)DAO.getAll();
  }

  getOne$(getModuleNamePascalCase)(id: string) {
    return this.$(getModuleNameCamelCase)DAO.getOne(id);
  }

  createOne$(getModuleNamePascalCase)(createTodoDTO: ICreate$(getModuleNamePascalCase)DTO) {
    return this.$(getModuleNameCamelCase)DAO.createOne(createTodoDTO);
  }

  updateOne$(getModuleNamePascalCase)(id: string, updateTodoDTO: IUpdate$(getModuleNamePascalCase)DTO) {
    return this.$(getModuleNameCamelCase)DAO.updateOne(id, updateTodoDTO);
  }

  deleteOne$(getModuleNamePascalCase)(id: string) {
    return this.$(getModuleNameCamelCase)DAO.deleteOne(id);
  }
}" > src/$(getModuleName)/$(getModuleName).service.ts

#####
## router
echo "import { iocContainer, $(getModuleNamePascalCase)Servie } from '@core/ioc-container';
import { IOC_TYPES } from '@core/ioc-container/types';
import { Request, Response, Router } from 'express';

const $(getModuleNameCamelCase)Router = Router();

const $(getModuleNameCamelCase)Service = iocContainer.get<$(getModuleNamePascalCase)Servie>(IOC_TYPES.$(getModuleNamePascalCase)Servie);

$(getModuleNameCamelCase)Router.get('/', async (req: Request, res: Response) => {
  const $(getModuleNameCamelCase)s = await $(getModuleNameCamelCase)Service.getAll$(getModuleNamePascalCase)s();
  return res.json({ data: $(getModuleNameCamelCase)s });
});

$(getModuleNameCamelCase)Router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const $(getModuleNameCamelCase) = await $(getModuleNameCamelCase)Service.getOne$(getModuleNamePascalCase)(id);
  res.json({ data: $(getModuleNameCamelCase) });
});

$(getModuleNameCamelCase)Router.post('/', async (req: Request, res: Response) => {
  const {} = req.body;
  const $(getModuleNameCamelCase) = await $(getModuleNameCamelCase)Service.createOne$(getModuleNamePascalCase)({});
  res.json({ data: $(getModuleNameCamelCase) });
});

$(getModuleNameCamelCase)Router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const {} = req.body;
  const updated = await $(getModuleNameCamelCase)Service.updateOne$(getModuleNamePascalCase)(id, {});
  res.json({ success: updated });
});

$(getModuleNameCamelCase)Router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = await $(getModuleNameCamelCase)Service.deleteOne$(getModuleNamePascalCase)(id);
  res.json({ success: deleted });
});

export { $(getModuleNameCamelCase)Router };" > src/$(getModuleName)/$(getModuleName).router.ts

#####
# ioc container types
container_types_old_code="};"
container_types_new_code="  $(getModuleNamePascalCase)Model: Symbol.for('$(getModuleNamePascalCase)Model'),\n  I$(getModuleNamePascalCase)DAO: Symbol.for('I$(getModuleNamePascalCase)DAO'),\n  $(getModuleNamePascalCase)Servie: Symbol.for('$(getModuleNamePascalCase)Servie'),\n};"
container_types_file="src/core/ioc-container/types.ts"
sed -i "" "s/$container_types_old_code/$container_types_new_code/" $container_types_file

#####
# ioc container inversify config
echo "
/* $(getModuleName) deps */
import {
  $(getModuleNamePascalCase)Model,
  $(getModuleNameCamelCase)Model,
} from '@core/data-layer/mongo-models/$(getModuleName).model';
import { $(getModuleNamePascalCase)DAO } from '@$(getModuleName)/$(getModuleName).dao';
import { I$(getModuleNamePascalCase)DAO } from '@$(getModuleName)/$(getModuleName).dao.abstract';
import { $(getModuleNamePascalCase)Servie } from '@$(getModuleName)/$(getModuleName).service';

iocContainer.bind<I$(getModuleNamePascalCase)DAO>(IOC_TYPES.I$(getModuleNamePascalCase)DAO).to($(getModuleNamePascalCase)DAO);
iocContainer.bind<$(getModuleNamePascalCase)Servie>(IOC_TYPES.$(getModuleNamePascalCase)Servie).to($(getModuleNamePascalCase)Servie);
iocContainer
  .bind<$(getModuleNamePascalCase)Model>(IOC_TYPES.$(getModuleNamePascalCase)Model)
  .toConstantValue($(getModuleNameCamelCase)Model);

export { $(getModuleNamePascalCase)DAO, $(getModuleNamePascalCase)Servie };" >> src/core/ioc-container/inversify.config.ts

####
# server
server_old_code1="app.use(json());"
server_new_code1="app.use(json());\n\napp.use('\/$(getModuleName)s', $(getModuleNameCamelCase)Router);"
server_file="src/server.ts"
sed -i "" "s/$server_old_code1/$server_new_code1/" $server_file

server_old_code2="import { json } from 'body-parser';"
server_new_code2="import { $(getModuleNameCamelCase)Router } from '@$(getModuleName)\/$(getModuleName).router';\nimport { json } from 'body-parser';"
sed -i "" "s/$server_old_code2/$server_new_code2/" $server_file

#####
# tsconfig
tsconfig_old_code="\"paths\": {"
tsconfig_new_code="\"paths\": {\n      \"@$(getModuleName)\": [\"src\/$(getModuleName)\"],\n      \"@$(getModuleName)\/*\": [\"src\/$(getModuleName)\/*\"],"
tsconfig_file="tsconfig.json"
sed -i "" "s/$tsconfig_old_code/$tsconfig_new_code/" $tsconfig_file

# configure files with linter and formatter