import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CitizensDocument = HydratedDocument<Citizens>;

@Schema()
export class Citizens {
    @Prop()
    name: string;

    @Prop()
    city_id: number;

    @Prop()
    id: number;

    @Prop()
    groups: Array<Object>;
}

export const CitizensSchema = SchemaFactory.createForClass(Citizens);