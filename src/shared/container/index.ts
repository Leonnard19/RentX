import { container } from 'tsyringe';

import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
import { SpecificationRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository';

import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationRepository
);

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);