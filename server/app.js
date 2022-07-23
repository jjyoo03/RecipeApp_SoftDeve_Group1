import express from 'express'
import bodyParser from 'body-parser'

import placesRoutes from './routes/places-routes'

const app = express();

app.use(placesRoutes)

app.listen(5000);