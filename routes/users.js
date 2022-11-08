const express = require('express')
const router = express.Router()

// routing endpoint users utama
router.get('/', (req, res) => {
    res.json('akwoawkoawko')
})

module.exports = router