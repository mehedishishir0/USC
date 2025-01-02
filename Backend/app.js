const express = require('express')
const createError = require('http-errors')
const cors = require('cors')
const { errorResponse } = require('./middlewares/response')
const sliderRouter = require('./Routes/slidersRout')
const aboutRouter = require('./Routes/aboutRoutes')
const ourGalleryRouter = require('./Routes/ourGalleryRoute')
const app = express()

// middlewares
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/slider',sliderRouter)
app.use('/api/about',aboutRouter)
app.use('/api/ourgallery',ourGalleryRouter)


app.get('/',(req,res)=>{
    res.send('this is app route')
})


app.use((req,res,next)=>{
    next(createError(404,'route not found'))
})
app.use((error,req,res,next)=>{
    errorResponse(res, {
        statusCode: error.statusCode,
        message: error.message,
      });
})


module.exports = app