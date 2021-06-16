import { container } from 'tsyringe';

import { DayjsDateProvider } from './dateProvider/implementations/DayjsDateProvider';
import { EtherealMailProvider } from './MailProvider/implementations/EtherealMailProvider';

import { IDateProvider } from './dateProvider/IDateProvider';
import { IMailProvider } from './MailProvider/IMailProvider';

container.registerSingleton<IDateProvider>('DayjsDateProvider', DayjsDateProvider);

container.registerInstance<IMailProvider>('EtherealMailProvider', new EtherealMailProvider());
