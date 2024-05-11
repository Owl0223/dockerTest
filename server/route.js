const express = require('express');
const router = express.Router();
const Example = require('./example');

// GET API endpoint to retrieve examples
router.get('/api/examples', async (req, res) => {
  try {
    const examples = await Example.find();
    res.json(examples);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST API endpoint to create a new example
router.post('/api/examples', async (req, res) => {
  const example = new Example({
    name: req.body.name,
    description: req.body.description,
  });

  try {
    const newExample = await example.save();
    res.status(201).json(newExample);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
