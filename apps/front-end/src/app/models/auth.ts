export interface Login{
    username: string;
    password: string;
};

export interface LoginResponse{
    access_token: string;
}

export interface SignUp{
    username: string;
    password: string;
    confirmPassword?: string;
};