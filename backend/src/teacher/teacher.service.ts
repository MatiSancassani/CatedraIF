import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher } from './schema/teacher.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { LoginTeacherDto } from './dto/login-teacher.dto';

@Injectable()
export class TeacherService {

  constructor(
    @InjectModel(Teacher.name) private teacherModel: Model<Teacher>,
  ) { }
  async create(createTeacherDto: CreateTeacherDto) {
    if (!createTeacherDto.password) {
      throw new Error('Password is required');
    }

    const hashedPassword = await bcrypt.hash(createTeacherDto.password, 10);
    const newTeacher = new this.teacherModel({
      ...createTeacherDto,
      password: hashedPassword,
    });
    return newTeacher.save();
  }

  async login(loginDto: LoginTeacherDto) {
    const teacher = await this.teacherModel.findOne({ email: loginDto.email }).exec();

    if (!teacher || !teacher.password) {
      throw new NotFoundException('Teacher not found or password not set');
    }

    if (!loginDto.password) {
      throw new UnauthorizedException('Password is required');
    }

    const passwordMatch = await bcrypt.compare(loginDto.password, teacher.password);

    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return {
      message: 'Login successful',
      teacher: {
        id: teacher._id,
        name: teacher.name,
        email: teacher.email,
        role: teacher.role,
      }
    };
  }

  async findAll() {
    return this.teacherModel.find().exec();
  }

  async findOne(id: string) {
    return this.teacherModel.findById(id).exec();
  }

}
