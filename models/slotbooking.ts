import mongoose, { Schema, models } from 'mongoose';
import { boolean } from 'zod';

const slotbookingSchema = new Schema({
    bookedBy : {
        type : String,
        required : true
    },
    center : {
        type: String
    },
    sport : {
        type : String
    },
    court : {
        type : Number
    },
    paymentDone : {
        type : Boolean
    },
    itemsCollected : {
        type : Boolean
    },
    date : {
        type : String
    },
    time : {
        type : String
    },
    no_of_items : {
        type : Number
    }
}, { timestamps: true });

const Slotbooking = models?.Slotbooking || mongoose.model('Slotbooking', slotbookingSchema);

export default Slotbooking;
