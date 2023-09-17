import { Controller, Get } from '@nestjs/common';
import { CitizensService } from './citizens.service';

@Controller('citizens')
export class CitizensController {

    constructor(private citizensService: CitizensService) { }

    @Get()
    getAll() {
        return this.citizensService.findAll();
    }

}
