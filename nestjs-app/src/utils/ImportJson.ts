import mongoose from "mongoose"
import { CitiesSchema } from "src/Schemas/cities.schema"
import * as fs from "fs"
import { CitizensSchema } from '../Schemas/citizens.schema';

const importJson = async () => {
    try {
        const Cities = mongoose.model('cities', CitiesSchema)
        const Citizens = mongoose.model('citizens', CitizensSchema)

        const cities = JSON.parse(fs.readFileSync('./data/cities.json', 'utf-8'))
        const citizens = JSON.parse(fs.readFileSync('./data/citizens.json', 'utf-8'))

        mongoose.connect(process.env.DB_URL).then(() => console.log('db connected'))
        await Cities.deleteMany()
        await Cities.create(cities)

        await Citizens.deleteMany()
        await Citizens.create(citizens)
        console.log('data successfully imported')
    } catch (error) {
        console.log('error', error)
    }
}

export default importJson;