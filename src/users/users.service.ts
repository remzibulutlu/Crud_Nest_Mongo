import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, Users } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private userModel: Model<UserDocument>) { }


  async create(createUserDto: CreateUserDto): Promise<Users> {
    return new this.userModel(createUserDto).save();
  }
  
  async findAll() {
    return this.userModel.find();
  }

  async findOne(name: string) {
    return this.userModel.findOne({name});
  }

  async update(name: string, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({name}, {$set: {...updateUserDto}});
  }

  async remove(name: string) {
    return this.userModel.deleteOne({name});
  }
}
