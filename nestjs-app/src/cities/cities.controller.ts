import { Controller, Get } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {


    constructor(private citiesService: CitiesService) { }

    @Get()
    getAll() {
        return this.citiesService.findAll();
    }


}
