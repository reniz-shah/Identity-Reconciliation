import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from 'src/config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';




@Module({
  imports: [ConfigModule.forRoot({
    load: [configuration],
    isGlobal: true
  }),
  TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      type: 'mysql',
      host: configService.get('database.host'),
      port: configService.get('database.port'),
      username: configService.get('database.username'),
      password: configService.get('database.password'),
      database: configService.get('database.name'),
      entities: [],
      synchronize: true,
    }),
  }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
