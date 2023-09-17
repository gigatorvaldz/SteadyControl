import { Module } from '@nestjs/common';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CitiesSchema } from 'src/Schemas/cities.schema';

@Module({
  controllers: [CitiesController],
  providers: [CitiesService],
  imports: [
    MongooseModule.forFeature([{ name: 'cities', schema: CitiesSchema }])
  ]
})
export class CitiesModule { }
