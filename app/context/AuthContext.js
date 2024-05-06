"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { auth } from '@/libs/FirebaseHelper';
import Cookies from 'universal-cookie';



// User data type interface
const UserType = {
  email: null,
  uid: null
};

// Create auth context
const AuthContext = createContext({});

// Make auth context available across the app by exporting it
export const useAuth = () => useContext(AuthContext);

// Create the auth context provider
export const AuthContextProvider = ({ children }) => {
  // Define the constants for the user and loading state
  const [user, setUser] = useState({ ...UserType });
  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  // Update the state depending on auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
          user: user
        });
        setIsLogin(true);
        const cookies = new Cookies(null);

        if (user) {
          cookies.set('uid', user.uid, { path: '/' });
          cookies.set('email', user.email, { path: '/' });
          cookies.set('user', user, { path: '/' });
          cookies.set('isLogin', true, { path: '/' });
        }




      } else {
        setUser({ ...UserType });
        setIsLogin(false);

        const cookies = new Cookies(null);
        cookies.remove('uid', { path: '/' });
        cookies.remove('email', { path: '/' });
        cookies.remove('user', { path: '/' });
        cookies.set('isLogin', false, { path: '/' });


      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Sign up the user
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login the user
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  

  // Logout the user
  const logOut = async () => {
    const cookies = new Cookies(null);
    cookies.remove('uid', { path: '/' });
    cookies.remove('email', { path: '/' });
    cookies.remove('user', { path: '/' });
    cookies.set('isLogin', false, { path: '/' });

    setUser({ ...UserType });
    
    return await signOut(auth);
  };

  // Wrap the children with the context provider
  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut,isLogin }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
