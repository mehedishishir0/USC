const { sendAbout, getAbout } = require('../Controllers/aboutControllers')
const upload = require('../middlewares/imgUploder')

const aboutRouter = require('express').Router()

aboutRouter.post('/',upload.single('princlpalimg'),sendAbout)
aboutRouter.get('/',getAbout)



module.exports = aboutRouter