"use server"
import { redirect } from "next/navigation"




export  async function RedirectTo(path){

    redirect(path)
}