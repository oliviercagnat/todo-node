import { Router, Response, Request } from 'express';
import { TaskController } from './tasks.controller';

// Fire the Router function
// Will contains all our Routes for our Task Entity
export const taskRouter: Router = Router();

// We define a sub-route which is /tasks
// will be added to the root route of our app
taskRouter.get('/tasks', (req: Request, res: Response) => {
  const taskController = new TaskController();
  taskController.getAll();
});
