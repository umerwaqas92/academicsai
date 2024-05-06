"use client";
import React,{useState} from 'react'
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';


export default function LogoutBtn() {
  const { user,logIn,logOut } = useAuth();
  const [loading, setLoading] = useState(false);

  const router = useRouter();



  const handleLogout = async () => {
    try {
    //   await logOut();
    //   router.push('/login');
    ///await 10 sec
    setLoading(true);
    // await new Promise((resolve) => setTimeout(resolve, 500));
    await logOut();
      router.push('auth/signin');


   
    
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

    
  return (
    <button onClick={handleLogout} className="btn btn-primary btn-sm text-white">
        {loading && <span className="loading loading-spinner loading-sm"></span>}
        Logout</button>
  )
}
