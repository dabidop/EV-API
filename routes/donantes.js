const {Router} = require('express');

const route = Router();

const{getDonante, postDonante, putDonante, deleteDonante} = require('../controller/donantes');

route.get('/', getDonante)
route.post('/', postDonante)
route.put('/', putDonante)
route.delete('/', deleteDonante)

module.exports = route