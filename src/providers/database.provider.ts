import { Feedback } from 'src/entity/feedback.entity';
import { createConnection } from 'typeorm';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'john.db.elephantsql.com',
        port: 5432,
        username: 'dtqwsflw',
        password: 'qZVhgVCLCJPlZDo0OxHhjfbqzurxpyqu',
        database: 'dtqwsflw',
        entities: [Feedback],
        synchronize: true,
      }),
  },
];
