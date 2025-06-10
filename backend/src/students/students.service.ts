import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './schema/student.schema';
import { Model, HydratedDocument } from 'mongoose';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<Student>,
  ) { }
  async create(createStudentDto: CreateStudentDto) {
    const createStuden = new this.studentModel(createStudentDto);
    return createStuden.save();
  }

  async findAll() {
    const students = await this.studentModel.find().exec()
    return students
  }

  async findOne(id: string) {
    return this.studentModel.findById(id).exec();
  }
  async findByNameAndEmail(name: string, email: string): Promise<HydratedDocument<Student> | null> {
    return this.studentModel.findOne({ name, email }).exec();
  }

  async remove(id: string) {
    return this.studentModel.findByIdAndDelete(id).exec();
  }
}
