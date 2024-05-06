"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";



export async function RevalidatePage({path}) {
    revalidatePath(path, 'page')
    redirect(path) 
}


