import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type TeacherSchema = HydratedDocument<Teacher>
@Schema()
export class Teacher {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    chair: string;

    @Prop({ default: 'teacher' })
    role: string;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);