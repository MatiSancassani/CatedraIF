import { IsString, MaxLength, IsOptional } from "class-validator";

export class CreateTeacherDto {
    @IsString()
    @MaxLength(25)
    name: string;

    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsString()
    @IsOptional()
    chair: string;
}
