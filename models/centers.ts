import mongoose, { Schema, models } from 'mongoose';

const centerSchema = new Schema({
    centerName: {
        type: String,
        required: true
    },
    centerManager : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    sports : [{
        sportName : {
            type : String
        },
        no_of_courts : {
            type : Number
        },
        cost : {
            type : String
        }
    }]
}, { timestamps: true });

const Center = models?.Center || mongoose.model('Center', centerSchema);

export default Center;
