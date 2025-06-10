import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginStudentDto {
    @IsNotEmpty({ message: 'El nombre no puede estar vacío.' })
    @IsString({ message: 'El nombre debe ser una cadena de texto.' })
    name: string;

    @IsEmail({}, { message: 'Por favor, introduce un correo electrónico válido.' })
    email: string;
}