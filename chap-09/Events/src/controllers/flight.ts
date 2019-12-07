import { Context } from 'koa';
import { data } from '../data';
import { Flight, create } from '../flight';
import { FlightSchema } from '../schemas/flight';
import { EventEmitter } from 'events'

const flights: Flight[] = [];
Object.values(data).forEach(item => flights.push(create(item)));
const flightEmitter = new EventEmitter();
flightEmitter.on('arrival', (flight: Flight) => {
    const record = new FlightSchema(flight.getInformation());
    record.save();
});

export const getFlight = async(ctx: Context, next: () => void) => {
    const flightNumber: number = ctx.params.flightId;
    if (flights[flightNumber]) {
        ctx.body = flights[flightNumber].getInformation();
    } else {
        ctx.status = 404;
        ctx.body = 'Something Bad Happened';
    }   
    await next();
}

export const getAllFlights = async(ctx: Context, next: () => void) => {
    const flightData: Flight[] = [];
    flights.forEach(item => flightData.push(item.getInformation()));
    ctx.body = flightData;
    await next();
}

export const modifyFlight = async(ctx: Context, next: () => void) => {
    const flightNumber: number = ctx.params.flightId;
    if (flights[flightNumber]) {
        flights[flightNumber].triggerArrival();
        flightEmitter.emit('arrival', flights[flightNumber])
        ctx.body = { status: 'success' };
    } else {
        ctx.status = 404;
        ctx.body = 'Something Bad Happened';
    }
    await next();
}

export const getArrivedFlights = async(ctx: Context, next: () => void) => {
    ctx.body = await FlightSchema.find().setOptions({sort: 'actualArrives'}).exec();
    await next();
}