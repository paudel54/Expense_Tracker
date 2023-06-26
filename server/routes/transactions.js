const router = require('express').Router()
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income')
router.get('/', (req, res) => {
    res.send('testing router path ')
})
// we can chain the router
router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    //:Id can be anything like string or Number or any dyanmic value
    .delete('/delete-income/:id', deleteIncome)

module.exports = router