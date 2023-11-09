import { MainPageSchema } from '@/Features/Admin/AddMainPageSettings';
import { CounterSchema } from '@/entities/Counter';
import { PostDetailSchema } from '@/entities/Post';

export interface StateSchema {
  counter: CounterSchema;
  postDetail: PostDetailSchema;
  addMainPageSettings: MainPageSchema;
}
