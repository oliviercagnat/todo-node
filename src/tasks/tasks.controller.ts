import { Task } from './tasks.entity';
import { AppDataSource } from '../..';
// convert an instance of a Class to a plain Object
import { instanceToPlain } from 'class-transformer';

export class TaskController {
  constructor(
    // By default, we load the Task repository
    private taskRepository = AppDataSource.getRepository(
      Task,
    ),
  ) {}

  // @ts-ignore
  public async getAll(): Promise<Task[]> {
    // Declare a variable to hold all tasks
    let allTasks: Task[];

    // Fetch all tasks using the repository
    try {
      allTasks = await this.taskRepository.find({
        // Will order all our tasks by date in ascending order
        order: {
          date: 'ASC',
        },
      });
      console.log(allTasks);
    } catch (errors) {
      console.log(errors);
    }

    // Convert the tasks instance to an aray of objects
  }
}
