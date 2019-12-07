import { Context } from 'koa';
import { data } from '../data';
import { Flight, create } from '../flight';

const flights: Flight[] = [];
Object.values(data).forEach(item => flights.push(create(item)));

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
    flights[flightNumber].triggerArrival();
    ctx.body = flights[flightNumber].getInformation();
    await next();
}