"use client";
import { AddorUpdateProfileData, LoginWithGithub, LoginWithGoogle } from '@/libs/FirebaseHelper';
import React ,{useEffect, useState}from 'react'
import { useRouter } from 'next/navigation';
import {  toast } from 'sonner';
import { RevalidatePage } from '@/libs/revalidateHelper';


export default function SocialLoginButtons() {

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);





    const handleGoogleLogin = async () => {
        try {
          setLoading(true);
          
          
         
          await LoginWithGoogle(
            
           async (user) => {
            console.log('Login successful Google');

            await AddorUpdateProfileData({
              user: user,
              fullName: user.displayName,
              firstName: user.firstName,
              lastName: user.lastName,
              photoFIle: user.photoURL
            });

            await RevalidatePage({path:"/app"})

            // router.push('/app');
          }
          ,

            (error) => {
              setLoading(false);
              toast.error(error.message);
            }
        
        
        );
         
         
        
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      }
      
      // LoginWithGithub
      const handleGithubLogin = async () => {
        try {
          setLoading1(true);
          await LoginWithGithub(
           async (user) => {
              console.log('Login successful github');
            await AddorUpdateProfileData({user:user,fullName:user.displayName})

              router.push('/app');
            },

            (error) => {
              setLoading1(false);
              toast.error(error.message);
            }
          );
          console.log('Login successful github');
       
         
        } catch (error) {
          console.log(error);
          toast.error(error.message);

        }
      }

      useEffect(() => {
        localStorage.setItem('loading', loading);
      }, [loading]);


      useEffect(() => {
        setLoading1(localStorage.getItem('loading')??false);
      }, []);
  return (
    <button 
    disabled={loading}
    onClick={handleGoogleLogin}
    className='btn btn-md btn-ghost w-full mt-5 rounded-full bg-white border-black ' >
      <img src='/svg/googleicon.svg'/>
      Continue with Google</button>
  )
}
