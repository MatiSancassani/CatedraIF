import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudenSchema, Student } from './schema/student.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Student.name, schema: StudenSchema }])],
  controllers: [StudentsController],
  providers: [StudentsService],
  exports: [StudentsService]
})
export class StudentsModule { }
