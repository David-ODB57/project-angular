export interface User {
    id: number | null;
    niveau: number | null;
    email: string;
    password: string;
    pseudo?: string;
    avatar?: string;
    token?: string;
}
