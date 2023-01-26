import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasisModule } from './basis/basis.module';
import { User } from './basis/users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [User],
      //autoLoadEntities: true,
      synchronize: true,
    }),
    BasisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
