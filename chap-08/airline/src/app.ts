import * as Koa from 'koa';
import flight from './routes/flight';

export const app = new Koa();
app.use(flight);