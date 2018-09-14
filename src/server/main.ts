import './polyfills';

import { enableProdMode } from '@angular/core';
import { NestFactory } from '@nestjs/core';
import * as e from 'express';

import { ApplicationModule } from './app.module';
import { SERVER_CONFIG } from './server.constants';

declare const module: any;

async function bootstrap() {
  const express: any = e();

  if (process.env.NODE_ENV === 'production') {
    enableProdMode();
  }

  require('./config/index')(SERVER_CONFIG, express);
  // console.log('config:' + JSON.stringify(SERVER_CONFIG));
  const app = await NestFactory.create(
    ApplicationModule,
    express,
    //  {
    // logger: true,
    // }
  );

  app.enableCors();

  await app.listen(SERVER_CONFIG.httpPort);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
