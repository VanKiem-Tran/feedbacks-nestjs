import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { feedbacksProvider } from 'src/providers/feedbacks.provider';
import { FeedbacksController } from './feedbacks.controller';
import { FeedbacksService } from './feedbacks.service';

@Module({
  imports: [DatabaseModule],
  controllers: [FeedbacksController],
  providers: [...feedbacksProvider, FeedbacksService],
})
export class FeedbacksModule {}
