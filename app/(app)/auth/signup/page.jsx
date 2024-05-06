"use client";
import SocialLoginButtons from '@/app/components/SocialLoginButtons';
import { useAuth } from '@/app/context/AuthContext';
import { AddorUpdateProfileData } from '@/libs/FirebaseHelper';
import { signIn, useSession ,signOut} from 'next-auth/react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function page() {

  const { user,signUp,isLogin } = useAuth();

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [loading, setLoading] = useState(false);
  // checkbox
  const [checked, setChecked] = useState(false);

  const [error, setError] = useState(null);


  useEffect(() => {
    if (error) {
    // wait 1 second
      setTimeout(() => {
        setError(null);
      }, 10000);
    }
  }, [error]);

  async function signupProcess () {
    console.log("signip process");
    setError(null);
    if(!email && !firstName && !lastName && !password && !confirmPassword){
      setError('Please fill all the fields');
      return; 
      
    }
    if(!password && !confirmPassword){
      setError('Please fill all the fields');
      return;

    }

    if (password.trim() !== confirmPassword.trim()) {
      // alert('Passwords do not match');
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {



      const _email = email.trim();
      const _password = password.trim();

      const userCred=await signUp(_email, _password);


      const user = userCred.user;
      await AddorUpdateProfileData({
        user: user,
        fullName: firstName + ' ' + lastName,
        firstName: firstName,
        lastName: lastName,
        photoFIle: null
      });
      console.log('user',user); 
      router.push('/app');
    } catch (error) {
      console.log(error);
      setError(error.message.replace("Firebase:", ""));
    }
    setLoading(false);
  };

const validateForm = () => {
  return (email && firstName && lastName && password && confirmPassword) && (password.trim() === confirmPassword.trim());
};


  // console.log(session)
  return (
    <div className='flex items-center justify-center  w-full md:pr-10 z-0'>

    <div className=' flex md:flex-row flex-col  gap-2     justify-center items-start  '>
      <img src='/images/Illustration.png' className=' md:w-1/2 w-full scale-75  md:scale-95 lg:pr-32 hidden md:block ' loading="eager" />
      
      <div className='container flex flex-col  space-y-2 w-full md:min-w-[450px] lg:min-w-[500px] '>
       <div className='flex flex-row items-center justify-between'>
       <h1 className='text-3xl font-bold *:'>Signup</h1>
       <Link href={"/auth/signin"} className='link '>Signin instead</Link>
       </div>
        <p className='text-lg'>Enter your details</p>
        {/* first name,last name, */}

        <p className='text-sm text-gray-500'>First Name</p>
        <input disabled={loading} value={firstName}  onChange={(e) => setFirstName(e.target.value)}  className='input input-md input-bordered w-full  ' type="text" placeholder='First Name' required />

        <p className='text-sm text-gray-500'>Last Name</p>
        <input disabled={loading} value={lastName}  onChange={(e) => setLastName(e.target.value)} className='input input-md  input-bordered w-full  ' type="text" placeholder='Last Name' required/>


        <p className='text-sm text-gray-500'>Email</p>
        <input disabled={loading} value={email}  onChange={(e) => setEmail(e.target.value)}  className='input input-md input-bordered w-full  ' type="email" placeholder='Email' required />
        <p className='text-sm text-gray-500'>Password</p>
        <input disabled={loading} value={password}  onChange={(e) => setPassword(e.target.value)} className='input input-md input-bordered w-full  ' type="password" placeholder='Password' required/>
        {/* confrim */}

        <p className='text-sm text-gray-500'>Confirm Password</p>
        <input disabled={loading} value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)} className='input input-md input-bordered w-full  ' type="password" placeholder='Confirm Password' required/>
        

        <div className="flex flex-row gap-2 items-center  py-2">
        <input disabled={loading} defaultValue={checked} value={checked}  onChange={(e) => setChecked(e.target.checked)} type="checkbox" defaultChecked className="checkbox checkbox-md" required />
        <p className='text-sm text-gray-500'>By creating an account, I agree to our  <span className='link'> Terms of use</span> and <span className='link'>Privacy Policy</span> </p>
        </div>


 <p className=' text-red-600  text-sm '>{error??""}</p>



        <button 
        disabled={!validateForm() || loading}
onClick={signupProcess}
        
        className='btn btn-md btn-primary w-full mt-5 rounded-full' >

         {loading&&  <span className='loading loading-spinner'></span>}
          Sign Up</button>
        <br />
        <div className="divider  ">OR</div>
<br />
<SocialLoginButtons />

  <br />
  <br />
  <br />





      </div>
      
       

    </div>
    </div>
  )
}
