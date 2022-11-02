import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';
import { Priority } from '../enums/Priority';
import { Status } from '../enums/Status';

// Entities is our table schema or model
// Because Type ORM uses decorators to define properties within our Entity files
// "experimentalDecorators": true /* Enable experimental support for TC39 stage 2 draft decorators. */,
// "emitDecoratorMetadata": true /* Emit design-type metadata for decorated declarations in source files. */,

// Decorators is used to tell type that this particular class over here it type of an entity
// Since it's a class decorator, we use it before the class with @symbol
// It converts the class Task into an Entity, and within the class we can define properties.
// They are directly related to table columns.
@Entity()

// Only used by Type ORM and will never be initialized
// That's why in tsconfig.json, we have
// "strictPropertyInitialization": false /* Check for class properties that are declared but not set in the constructor. */,
export class Task {
  // define a primary column or primary key within our entity
  // TypeORM will use a UUID as primary key for each of the entries that we create in our DB
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // It states that we create a text type column in our DB for title and mention in Column options
  @Column({
    type: 'text',
  })
  title: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  date: string;

  @Column({
    type: 'longtext',
  })
  description: string;

  // TypeORM will automatically infer that we want to use any of the 3 values within the Priority Enum
  // Unlike REACT, we don't have to use spread operator and use them as a union
  // But need to add some special options
  @Column({
    type: 'enum',
    enum: Priority,
    default: Priority.normal,
  })
  priority: Priority;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.todo,
  })
  status: Status;
}
