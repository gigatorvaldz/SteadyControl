import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cities } from 'src/Schemas/cities.schema';

@Injectable()
export class CitiesService {

    constructor(@InjectModel('cities') private citiesModel: Model<Cities>) { }

    async findAll(): Promise<Cities[]> {
        return this.citiesModel.find().exec();
    }

}
