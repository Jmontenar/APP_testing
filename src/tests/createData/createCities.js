const City = require("../../models/City")

const createCities = async()=>{
    const city = [{
        name: "Cartagena",
        country: "Colombia",
        isCapital: true
    },
    {
        name: "Medellín",
        country: "Colombia",
        isCapital: true
    }]
    await City.bulkCreate(city)
} 

module.export = createCities