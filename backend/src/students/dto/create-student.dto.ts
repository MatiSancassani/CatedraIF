import { IsString, MaxLength } from "class-validator";

export class CreateStudentDto {
    @IsString()
    @MaxLength(25)
    name: string;

    @IsString()
    email: string;
}
