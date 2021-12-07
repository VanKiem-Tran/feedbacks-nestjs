import { Provider } from '@nestjs/common';
import { Feedback } from 'src/entity/feedback.entity';
import { Connection } from 'typeorm';

export const feedbacksProvider: Provider[] = [
  {
    provide: 'FEEDBACKS_REPOSITORY',
    useFactory: (connection: Connection) => {
      connection.getRepository(Feedback);
    },
    inject: ['DATABASE_CONNECTION'],
  },
];
