import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateLocationDto } from './dtos/create-locations.dto';
import { LocationsService } from './locations.service';

@Controller('locations')
export class LocationsController {
    constructor(private locationsService: LocationsService){

    }
    @Get()
    findAll(){
        return this.locationsService.findAll();
    }
    @Post()
    create(@Body() body: CreateLocationDto){
        return this.locationsService.create(body);
    }
    @Get(':uuid')
    findByUuid(@Param('uuid') uuid: string){
       return this.locationsService.findByUuid(uuid);
    }
}
