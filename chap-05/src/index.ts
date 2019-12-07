import * as Koa from 'koa';
import flight from './routes/flight';

const app = new Koa();
app.use(flight);

app.listen(3000);
console.log('Server is listening at port 3000');