const request = require('supertest')
const app = require('../app')

test("GET /city should return 200 code", async()=>{
    const res = await request(app).get('/city');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(2);
});

test("POST /city should return 201 code", async()=>{
    const newCity = {
        name: "Sincelejo",
        country: "Colombia",
        isCapital: true
    }
    const res = await request(app)
        .post('/city')
        .send(newCity);
    expect(res.status).toBe(201);
    expect(res.body.name).toBe(newCity.name);
})