import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Feedback } from 'src/entity/feedback.entity';
import { FeedbacksService } from './feedbacks.service';

@Controller()
export class FeedbacksController {
  constructor(private feedbacksService: FeedbacksService) {}

  @Get()
  getAllFeedbacks(): Promise<Feedback[]> {
    return this.feedbacksService.getFeedbacks();
  }
  @Post()
  create(@Body() feedback: Feedback) {
    return this.feedbacksService.addFeedback(feedback);
  }
  @Get(':id')
  getOneFeedback(@Param('id') id: string): Promise<Feedback> {
    return this.feedbacksService.findOne(Number(id));
  }
  @Patch(':id')
  updateFeedback(
    @Param(':id') id: string,
    @Body() feedback: Feedback,
  ): Promise<Feedback> {
    return this.feedbacksService.update(Number(id), feedback);
  }
  @Delete(':id')
  deleteFeedback(@Param('id') id: string) {
    return this.feedbacksService.delete(Number(id));
  }
}
