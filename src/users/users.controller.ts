import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseIntPipe, ParseArrayPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IsString} from 'class-validator';

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

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.usersService.findOne(name);
  }

  @Put(':name')
  update(@Param('name') name: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(name, updateUserDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.usersService.remove(name);
  }
}
