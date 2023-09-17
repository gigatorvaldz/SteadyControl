import { Module } from '@nestjs/common';
import { CitizensController } from './citizens.controller';
import { CitizensService } from './citizens.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CitizensSchema } from 'src/Schemas/citizens.schema';

@Module({
  controllers: [CitizensController],
  providers: [CitizensService],
  imports: [
    MongooseModule.forFeature([{ name: 'citizens', schema: CitizensSchema }])
  ]
})
export class CitizensModule { }
