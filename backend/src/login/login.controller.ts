import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { StudentsService } from 'src/students/students.service';
import { LoginStudentDto } from './dto/login.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly studentsService: StudentsService) { }

    @Post('login')
    async loginSimple(@Body() loginSimpleDto: LoginStudentDto, @Res() res: Response) {
        const { name, email } = loginSimpleDto;


        const student = await this.studentsService.findByNameAndEmail(name, email);
        if (!student) {
            return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Nombre o email incorrectos.' });
        }

        return res.status(HttpStatus.OK).json({
            message: 'Inicio de sesión exitoso.',
            student: student,
        });
    }
}
