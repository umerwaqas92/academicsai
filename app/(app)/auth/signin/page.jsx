"use client";
import SocialLoginButtons from '@/app/components/SocialLoginButtons';
import { useAuth } from '@/app/context/AuthContext';
import { RevalidatePage } from '@/libs/revalidateHelper';
import { signIn, useSession ,signOut} from 'next-auth/react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'sonner';

export default function page() {
  const { user,logIn,isLogin } = useAuth();

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);


  // useEffect(() => {
  //   if (isLogin) {
  //     router.push('/app');
  //   }
  
  // }, [isLogin]);

  
  const handleSubmit = async () => {
    // e.preventDefault();
    try {

      if (!email || !password) return;

      setLoading(true);

      
      const _email = email.trim();
      const _password = password.trim();
      const user=  await logIn(_email, _password);
      console.log('user',user);
      // router.push('/app');
      RevalidatePage({
        path:"/app"
      }
        
      );

      // if(user){
      //   // RedirectTo( '/app');

      //   router.push('/app');
      // }{

      //   toast.error('Invalid email or password');
      //   setLoading(false);
      // }

     
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error.message.replace('Firebase: ', ''));

    }
  };



  const validateForm = () => {
    return (email && password) && (password.trim() !== '');
  };
  
  


  // console.log(session)
  return (
    <div className='flex items-center justify-center  w-full md:pr-10 '>

    <div className=' flex md:flex-row flex-col  gap-2 md:mt-16    justify-center items-center  w-full'>
      <img src='/images/Illustration.png' className=' md:w-1/3 w-1/2   md:scale-95 lg:pr-32 mb-20 md:mb-0' loading="eager" />
      
      <div className='container flex flex-col  space-y-2 w-full  md:min-w-[450px] lg:min-w-[500px] max-w-[600px]'>

        <div className='flex flex-row items-center justify-between'>
       <h1 className='text-3xl font-bold *:'>Sign In</h1>
       <Link href={"/auth/signup"} className='link '>Signup instead</Link>
       </div>
        <p className='text-lg'>Enter your email and password</p>
        {/* lable */}
        <p className='text-sm text-gray-500'>Email</p>
        <input disabled={loading} value={email} onChange={(e) => setEmail(e.target.value)} className='input input-md input-bordered w-full  ' type="email" placeholder='Email'  required/>
        <p className='text-sm text-gray-500'>Password</p>
 

        <input disabled={loading} value={password} onChange={(e) => setPassword(e.target.value)} className='input input-md input-bordered w-full  ' type="password" placeholder='Password' required />
        <button

          disabled={!validateForm() || loading}
        
        onClick={handleSubmit}
        className='btn btn-md btn-primary w-full mt-5 rounded-full' >
         {loading&&  <span className='loading loading-spinner'></span>}
          
          Sign In</button>
<br />
        <div className="divider  ">OR</div>
<br />
<SocialLoginButtons />


      </div>

      <br />
      <br />
      <br />

      
       

    </div>
    </div>
  )
}
