import { ReactNode } from "react";

export interface User {
    name: string;
    email: string;
    password: string;
    avatarUrl: string;
    
}

export interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    signIn: () => void;
    signOut: () => void;
}


export type Radio = {
    value: string
    label: string
    desc ?: string 
    icon?: ReactNode
}


export type Step = {
    id: string
    title : string
    subTitle: string
    component: ReactNode
}




export interface UserPrefrenceType {
    age: string;
    gender: 'male' | 'female' | string;
    weight: string;
    height: string
    activityLevel: string;
    goal: string
  }
