import express from 'express';

import * as reminderController from './../controllers/reminder-controller.js'

const router = express.Router();

router.route('/')
  .get(reminderController.index)
  .post(reminderController.post);
router.route('/filter/:text')
  .get(reminderController.filter);
  router.route('/range')
  .get(reminderController.range);
router.route('/:id')
.get(reminderController.getById)
  .put(reminderController.put)
  .delete(reminderController.remove);
export default router;