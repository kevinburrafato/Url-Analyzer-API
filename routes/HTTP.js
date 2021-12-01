const express = require('express');
const recordsController = require('../controllers/records.controller');

const router = express.Router();

router.get('/', recordsController.getRecords);
router.get('/:id', recordsController.getRecordsById);
router.post('/', recordsController.createRecords);
router.put('/:id', recordsController.updateRecords);
router.delete('/:id', recordsController.deleteRecords);

module.exports = router;