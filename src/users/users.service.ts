import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
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

  async findOne(_id: ObjectId) {
    return this.userModel.findOne({_id});
  }

  async update(_id: ObjectId, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({_id}, {$set: {...updateUserDto}});
  }

  async remove(_id: ObjectId) {
    return this.userModel.deleteOne({_id});
  }
}
