import { cookies } from 'next/headers'

import { NextResponse } from 'next/server'

 
// This function can be marked `async` if using `await` inside
export function middleware(request) {

  const publicRoutes=["/","/auth/signin","/auth/signup"]
  const ContAccesAfterLogin=["/auth/signin","/auth/signup"]
  const privateRoutes=[,"/app","/app/account","/app/trash"]
  const cookieStore = cookies()
const user=cookieStore.get('user')

  const url=request.nextUrl.pathname
  console.log(url)
// 
  
  // if (publicRoutes.includes(url)) {
  //   return NextResponse.next()
  // }
  // if (!user) {
  //   return NextResponse.redirect(new URL('/login', request.url))
  // }

  // if (ContAccesAfterLogin.includes(url)) {
  //   return NextResponse.redirect(new URL('/app', request.url))
  // }


  // if (privateRoutes.includes(url)) {
  //   return NextResponse.redirect(new URL('/app', request.url))
  // }

  if(user==null  && privateRoutes.includes(url)){
    
    return NextResponse.redirect(new URL('/auth/signin', request.url))

  }

  if(user!=null && ContAccesAfterLogin.includes(url)){
    return NextResponse.redirect(new URL('/app', request.url))
  }

  return NextResponse.next()


  

  

  
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher:[ '/app', '/auth/signin', '/auth/signup']

}