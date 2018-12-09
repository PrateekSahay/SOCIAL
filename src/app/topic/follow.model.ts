import { users } from './user.model';

export class Follow {
    topicId: number
    userId: string
    follow: boolean
    users: users
}