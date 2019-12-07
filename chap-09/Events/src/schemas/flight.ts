import * as mongoose from 'mongoose';

const flightSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: [true, 'Number is required']
    },
    origin: {
        type: String,
        required: [true, 'Origin is required']
    },
    destination: {
        type: String,
        required: [true, 'Destination is required']
    },
    arrives: {
        type: String,
        required: [true, 'Arrives is required']
    },
    departs: {
        type: String,
        required: [true, 'Departs is required']
    },
    actualArrives: {
        type: Number,
        required: [false]
    },
    actualDeparts: {
        type: Number,
        required: [false]
    }
});

export const FlightSchema = mongoose.model('Flight', flightSchema, 'Flight');

