import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './students/students.module';
import { TeacherModule } from './teacher/teacher.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://matisancassani:sanca123@cluster0.lcblgku.mongodb.net/CatedraIF'),
    StudentsModule,
    TeacherModule,
    LoginModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
