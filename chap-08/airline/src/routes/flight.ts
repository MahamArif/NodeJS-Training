import * as Router from 'koa-router';
import * as compose from 'koa-compose';
import * as flight from '../controllers/flight';

const router = new Router();

router.get('/flight/:flightId', flight.getFlight);
router.get('/flights', flight.getAllFlights);
router.put('/flight/:flightId', flight.modifyFlight);
router.get('/arrivals', flight.getArrivedFlights);

const routes = router.routes();
export default compose([routes]);