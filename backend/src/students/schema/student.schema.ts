import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type StudenSchema = HydratedDocument<Student>
@Schema()
export class Student {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop({ default: 'student' })
    role: string
}

export const StudenSchema = SchemaFactory.createForClass(Student);