import mongoose, { Schema, models } from 'mongoose';
import { boolean } from 'zod';

const blockedSchema = new Schema({
    center : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Center"
    },
    sport : {
        type : String
    },
    court : {
        type : Number
    },
    date : {
        type : String
    },
    time : {
        type : String
    }
}, { timestamps: true });

const Blocked = models?.Blocked || mongoose.model('Blocked', blockedSchema);

export default Blocked;
