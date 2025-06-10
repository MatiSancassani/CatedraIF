import { Module } from '@nestjs/common';
import { AuthController } from './login.controller';
import { StudentsModule } from 'src/students/students.module';

@Module({
    imports: [StudentsModule],
    controllers: [AuthController],
    providers: [],
})
export class LoginModule { }