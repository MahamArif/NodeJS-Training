import { app } from './helpers/app';

const supertest = require('supertest');
const should = require('should');

describe('flights', () => {
	
	it('should return valid flight data for flight 18', 
	(done: any) => {
		supertest(app)
		.get('/flight/18')
		.expect(200)
		.end((err: any, res: any) => {
			res.status.should.equal(200);
			done();
		});

	});

	it('should return an error for an invalid flight', 
	(done: any) => {
		supertest(app)
		.get('/flight/99999999')
		.expect(404)
		.end((err: any, res: any) => {
			res.status.should.equal(404);
			done();
		});

	});

	it('should mark a flight as arrived',
	(done: any) => {
		supertest(app)
		.put('/flight/18')
		.expect(200)
		.end((err: any, res: any) => {
			res.status.should.equal(200);
			res.body.should.have.property('status', 'done');
			supertest(app)
			.get('/flight/18')
			.expect(200)
			.end((err: any, res: any) => {
				res.status.should.equal(200);
				res.body.should.not.have.property('actualArrive', undefined);
				done();
			})
		});
	});
});