/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();
const projectData = require('../data/helpers/projectModel');
const actionData = require('../data/helpers/actionModel');

// Projects
router.get('/', (req, res) => {
  projectData.get()
    .then((project) => {
      res.status(200).json(project);
    }).catch((err) => {
      res.status(500).json(err);
    });
});
router.get('/:id', (req, res) => {
  const { id } = req.params;
  projectData.get(id)
    .then((project) => {
      res.status(200).json(project);
    }).catch((err) => {
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  const newProject = req.body;
  projectData.insert(newProject)
    .then((project) => {
      res.status(201).json(project);
    }).catch((err) => {
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const newProject = req.body;
  projectData.update(id, newProject)
    .then((project) => {
      res.status(201).json(project);
    }).catch((err) => {
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  projectData.remove(id)
    .then((del) => {
      res.status(200).json(del);
    }).catch((err) => {
      res.status(500).json(err);
    });
});


router.get('/models/:id', (req, res) => {
  const { id } = req.params;
  projectData.getProjectActions(id)
    .then((project) => {
      res.status(200).json(project);
    }).catch((err) => {
      res.status(500).json(err);
    });
});


// actions
router.get('/actions', (req, res) => {
  actionData.get()
    .then((actions) => {
      res.status(201).json(actions);
    }).catch((err) => {
      res.status(500).json(err);
    });
});

router.get('/actions/:id', (req, res) => {
  const { id } = req.params;
  actionData.get(id)
    .then((actions) => {
      res.status(200).json(actions);
    }).catch((err) => {
      res.status(500).json(err);
    });
});
router.post('/actions/:project_id', (req, res) => {
  const action = req.body;
  // eslint-disable-next-line camelcase
  const { project_id } = req.params;
  action.project_id = project_id;
  actionData.insert(action)
    .then((actions) => {
      res.status(200).json(actions);
      console.log(action);
    }).catch((err) => {
      res.status(500).json(err);
    });
});
router.put('/actions/:id', (req, res) => {
  const { id } = req.params;
  const action = req.body;
  actionData.update(id, action)
    .then((actions) => {
      res.status(200).json(actions);
    }).catch((err) => {
      res.status(500).json(err);
    });
});
router.delete('/actions/:id', (req, res) => {
  const { id } = req.params;
  actionData.remove(id)
    .then((actions) => {
      res.status(200).json(actions);
    }).catch((err) => {
      res.status(500).json(err);
    });
});


module.exports = router;
