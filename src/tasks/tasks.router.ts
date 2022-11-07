import { Router } from 'express';
import { taskController } from './tasks.controller';
import {
  createValidator,
  updateValidator,
} from './tasks.validator';

// Fire the Router function
// Will contains all our Routes for our Task Entity
export const taskRouter: Router = Router();

// We define a sub-route which is /tasks
// will be added to the root route of our app
taskRouter.get('/tasks', taskController.getAll);

taskRouter.post(
  '/tasks',
  createValidator,
  taskController.create,
);

taskRouter.put(
  '/tasks',
  updateValidator,
  taskController.update,
);
