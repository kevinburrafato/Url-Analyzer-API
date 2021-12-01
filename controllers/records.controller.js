const models = require('../models');

getRecords = async (req, res) => {
    const records = await models.Records.findAll({});
    
    if (!records) {
        return res.status(400).send(
            'There are no records'
        )
    }

    return res.send(records);
}

getRecordsById = async (req, res) => {
    const { id } = req.params;

    const records = await models.Records.findOne({
        where: {
            id,
        },
    })

    if (!records) {
        return res.status(400).send(
            'The records with the provided id were not found'
        )
    }

    return res.send(records);
}

createRecords = async (req, res) => {
    const {status, error, data} = req.body;
    if (!status || !error || !data) {
        return res.status(400).send(
            'Please provide status, error and data'
        )
    }

    try {
        let newRecords = await models.Records.create({
          status, 
          error, 
          data
        });
        return res.status(200).send(newRecords)
    } catch (err) {
        return res.status(500).send(
            `Error: ${err.message}`
        )
    }
}

updateRecords = async (req, res) => {
    const {status, error, data} = req.body;
    const { id } = req.params;

    const records = await models.Records.findOne({
        where: {
            id,
        },
    })

    if (!records) {
        return res.status(400).send(
            'The records with the provided id were not found'
        )
    }

    try {
        if (status) {
            records.status = status;
        }
        if (error) {
            records.error = error;
        }
        if (data) {
            records.data = data;
        }
        
        await records.save()
        return res.status(200).send(
            `Records ${id} has been updated`,
        )
    } catch (err) {
        return res.status(500).send(
            `Error: ${err.message}`
        )
    }
}

deleteRecords = async (req, res) => {
    const { id } = req.params;
  
    const records = await models.Records.findOne({
      where: {
        id,
      },
    });
  
    if (!records) {
      return res.status(400).send(
        `No records found with the id ${id}`,
      );
    }
  
    try {
      await records.destroy();
      return res.send(
        `Records ${id} has been deleted`,
      );
    } catch (err) {
      return res.status(500).send(
        `Error: ${err.message}`,
      );
    }
  };

module.exports = {
    getRecords:getRecords,
    getRecordsById: getRecordsById,
    createRecords: createRecords,
    updateRecords: updateRecords,
    deleteRecords: deleteRecords,
}