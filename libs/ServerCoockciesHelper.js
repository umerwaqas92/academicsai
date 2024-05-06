import { cookies as serverCookies } from 'next/headers'
import {Cookies as CookiesUniversal} from 'universal-cookie'


export function getUserFromCoockies() {
    "use server";
    const cookieStore = serverCookies()
const user=cookieStore.get('user')

    
}

export function getCLientUserFomCoockies() {
    "use client";
    const cookieStore = CookiesUniversal()
const user=cookieStore.get('user')

    return user
}