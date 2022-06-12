import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseIntPipe, ParseArrayPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IsString} from 'class-validator';
import { ObjectId } from 'mongoose';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':_id')
  findOne(@Param('_id') _id: ObjectId) {
    return this.usersService.findOne(_id);
  }

  @Put(':_id')
  update(@Param('_id') _id: ObjectId, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(_id, updateUserDto);
  }


  @Delete(':_id')
  remove(@Param('_id') _id: ObjectId) {
    return this.usersService.remove(_id);
  }
}
