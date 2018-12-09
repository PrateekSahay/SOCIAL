import { user } from './user.model';

export class Follow {
    topicId: number
    userId: string
    follow: boolean
    user: user
}