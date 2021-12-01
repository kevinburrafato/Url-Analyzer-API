const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('Records API', () => {

    /**
     * Test the GET route
     */
    describe('GET /api/HTTP', () => {
        it('It should GET all the records', (done) => {
            chai.request(server)
                .get('/api/HTTP')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                done();
                })
        })

        it('It should NOT GET all the records', (done) => {
            chai.request(server)
                .get('/apis/HTTP')
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                })
        })

    })

    /**
     * Test the GET (by id) route
     */
    describe('GET /api/HTTP/:id', () => {
        it('It should GET the records by ID', (done) => {
            const recordsId = 1;
            chai.request(server)
                .get('/api/HTTP/' + recordsId)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id');
                    response.body.should.have.property('id').eq(1);
                    response.body.should.have.property('status');
                    response.body.should.have.property('error');
                    response.body.should.have.property('data');
                done();
                })
        })

        it('It should NOT GET the records by ID', (done) => {
            const recordsId = 123;
            chai.request(server)
                .get('/api/HTTP/' + recordsId)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.text.should.be.eq('The records with the provided id were not found');
                done();
                })
        })
    })

    /**
     * Test the POST route
     */
    
    describe('POST /api/HTTP', () => {
        it('It should POST new records', (done) => {
            const records = {
                status: 200,
                error: 'No error',
                data: {
                    'url': {
                        'domain': 'www.yoursite.com',
                        'scheme': 'HTTP',
                        'path': 'home'
                    },
                    'request': {
                        'method': 'POST',
                    },
                    'response': {
                        'http': '200',
                        'date': 'Mon, 27 Jul 2009',
                        'server': 'Apache/2.2.14 (Win32)',
                        'page-load': '0.5',
                        'first-interaction': '0.8'
                    }
                },
                createdAt: new Date(),
                updatedAt: new Date()
            }
            chai.request(server)
                .post('/api/HTTP')
                .send(records)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id');
                    response.body.should.have.property('status');
                    response.body.should.have.property('error');
                    response.body.should.have.property('data');
                done();
                })
        })

        it('It should NOT POST new records without the status property', (done) => {
            const records = {
                error: 'No error',
                data: {
                    'url': {
                        'domain': 'www.yoursite.com',
                        'scheme': 'HTTP',
                        'path': 'home'
                    },
                    'request': {
                        'method': 'POST',
                    },
                    'response': {
                        'http': '200',
                        'date': 'Mon, 27 Jul 2009',
                        'server': 'Apache/2.2.14 (Win32)',
                        'page-load': '0.5',
                        'first-interaction': '0.8'
                    }
                },
                createdAt: new Date(),
                updatedAt: new Date()
            }
            chai.request(server)
                .post('/api/HTTP')
                .send(records)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.text.should.be.eq('Please provide status, error and data');
                done();
                })
        })
    })
     

    /**
     * Test the PUT route
     */
     
     describe('PUT /api/HTTP/:id', () => {
        it('It should PUT the selected records', (done) => {
            const recordsId = 3
            const records = {
                status: 404,
                error: 'Page not found',
                data: {
                    'url': {
                        'domain': 'www.yoursite.com',
                        'scheme': 'HTTP',
                        'path': 'home'
                    },
                    'request': {
                        'method': 'POST',
                    },
                    'response': {
                        'http': '404',
                        'date': 'Mon, 27 Jul 2009',
                        'server': 'Apache/2.2.14 (Win32)',
                        'page-load': '0.5',
                        'first-interaction': '0.8'
                    }
                },
                createdAt: new Date(),
                updatedAt: new Date() 
            }
            chai.request(server)
                .put('/api/HTTP/' + recordsId)
                .send(records)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                done();
                })
        })

        it('It should NOT PUT the selected records', (done) => {
            const recordsId = 123
            const records = {
                status: '400',
                error: 'No Error',
                data: {
                    'url': {
                        'domain': 'www.yoursite.com',
                        'scheme': 'HTTP',
                        'path': 'home'
                    },
                    'request': {
                        'method': 'POST',
                    },
                    'response': {
                        'http': '400',
                        'date': 'Mon, 27 Jul 2009',
                        'server': 'Apache/2.2.14 (Win32)',
                        'page-load': '0.5',
                        'first-interaction': '0.8'
                    }
                },
            }
            chai.request(server)
                .put('/api/HTTP/' + recordsId)
                .send(records)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.text.should.be.eq('The records with the provided id were not found');
                done();
                })
        })
    })
    

    /**
     * Test the DELETE route
     */
     describe('DELETE /api/HTTP/:id', () => {
        it('It should DELETE the selected records', (done) => {
            const recordsId = 2;
            chai.request(server)
                .delete('/api/HTTP/' + recordsId)
                .end((err, response) => {
                    response.should.have.status(200);
                done();
                })
        })

        it('It should NOT DELETE the selected records', (done) => {
            const recordsId = 123;
            chai.request(server)
                .delete('/api/HTTP/' + recordsId)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.text.should.be.eq(`No records found with the id ${recordsId}`);
                done();
                })
        })
    })

})