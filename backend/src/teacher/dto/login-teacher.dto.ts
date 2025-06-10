import { IsString } from 'class-validator';

export class LoginTeacherDto {
    @IsString()
    email: string;

    @IsString()
    password: string;
}