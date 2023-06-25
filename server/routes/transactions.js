const router = require('express').Router()
const { addIncome } = require('../controllers/income')
router.get('/', (req, res) => {
    res.send('testing router path ')
})

router.post('/add-income', addIncome)

module.exports = router