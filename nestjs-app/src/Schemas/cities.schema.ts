import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CitiesDocument = HydratedDocument<Cities>;

@Schema()
export class Cities {
    @Prop()
    name: string;

    @Prop()
    data: number;
    
    @Prop()
    id: number;

}

export const CitiesSchema = SchemaFactory.createForClass(Cities);