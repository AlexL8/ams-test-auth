import { NavigateFunction } from "react-router-dom"

export interface UserResponse {
    id: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    image: string,
    token: string
}

export interface defaultThunkPayload {
    navigate: NavigateFunction;
}