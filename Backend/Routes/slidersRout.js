const { getSlider, sendSlider } = require('../Controllers/slidersControllers')
const upload = require('../middlewares/imgUploder')

const sliderRouter = require('express').Router()

sliderRouter.get("/",getSlider)
sliderRouter.post("/",upload.array('slideImg'),sendSlider)

module.exports = sliderRouter