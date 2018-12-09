import { user } from './user.model';

export class Follow {
    TopicId: number
    UserId: string
    follow: boolean
    user: user
}