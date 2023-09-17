import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Citizens } from 'src/Schemas/citizens.schema';

@Injectable()
export class CitizensService {

    constructor(@InjectModel('citizens') private citizensModel: Model<Citizens>) { }

    async findAll(): Promise<Citizens[]> {
        return this.citizensModel.find().exec();
    }

}
