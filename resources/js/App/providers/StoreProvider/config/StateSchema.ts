import { LoginSchema } from '@/Features/AuthByUserEmail';
import { CounterSchema } from '@/entities/Counter';
import { PostDetailSchema } from '@/entities/Post';
import { UserSchema } from '@/entities/User';

export interface StateSchema {
  counter: CounterSchema;
  postDetail: PostDetailSchema;
  user: UserSchema;
  login: LoginSchema;
}
