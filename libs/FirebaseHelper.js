
import { initializeApp,getApps } from "firebase/app";
import { getFirestore,collection,doc,setDoc, addDoc,getDoc,getDocs,updateDoc, orderBy, deleteDoc } from "firebase/firestore";
import { getStorage,ref,uploadString ,storageRef,getDownloadURL,uploadBytes, list, listAll} from "firebase/storage";
import { getAuth, signInWithEmailAndPassword ,signInWithPopup,signInWithRedirect, GoogleAuthProvider} from "firebase/auth";
import { GithubAuthProvider,updateProfile } from "firebase/auth";
import { serverTimestamp } from "firebase/firestore";
import { query, where } from "firebase/firestore";  


// redirect to google login



import {    deleteObject } from 'firebase/storage';

import Cookies from 'universal-cookie';









// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5RcF49IgvOqf1VrBQhuLJYvYZEdxQ3y0",
  authDomain: "academicsaiv2.firebaseapp.com",
  projectId: "academicsaiv2",
  storageBucket: "academicsaiv2.appspot.com",
  messagingSenderId: "614732511495",
  appId: "1:614732511495:web:9154182af3f95793016da2",
  measurementId: "G-0VQ4NTH0ED"
};

// Initialize Firebase
// check if firebase is already initialized

let app;
if (getApps().length < 1) {
 app= initializeApp(firebaseConfig);
  // Initialize other firebase products here
}{
  app= getApps()[0];
}
const db = getFirestore(app);


export const auth = getAuth();


const cookies = new Cookies(null, { path: '/' });



// upload image to firebase storage

export async function uploadImageToFirebaseStorage(image_base64){
  try {
    const storage = getStorage();
    // random
    const random_name = Math.random().toString(36).substring(7);
    const mountainsRef = ref(storage, random_name+".jpg");
    const final_image = image_base64.replace('data:image/jpeg;base64,','');
  // console.log("final_image",final_image)
  
    const resp =await uploadString(mountainsRef, image_base64, 'data_url')
  
     const downloadUrl=await getDownloadURL(mountainsRef);
    //   console.log("downloadUrl",downloadUrl)
  
    // console.log("resp",resp)
    return downloadUrl
  } catch (error) {
    console.log("error",error)
    return ""
    
  }


}


// upload file
export async function uploadFileToFirebaseStorage(file){

    const storage = getStorage();
    // random

    const mountainsRef = ref(storage, file.name);
    uploadBytes(mountainsRef, file)
    console.log("file.name",file.name)


  
       
      let downloadUrl=await getDownloadURL(mountainsRef);
      return downloadUrl

    
   





}




// // add invoice to db
// export async function addInvoiceToDB(invoce,userId,invoiceId){
//   const invoiceRef = doc(db, "invoices", invoiceId);

//   await setDoc(invoiceRef, invoce);
//   console.log("invoice added to db")

// }


// login with email and password import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export async function loginWithEmailAndPassword(email,password){
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user
  } catch (error) {
    console.log("error",error)
    return null
    
  }

  

}


  // get current user
  export async function getCurrentUser(){
    const auth = getAuth();
    return auth.currentUser

  }



  // upload file to temp firebase
  export async function uploadFileToTempFirebaseStorage(file){
    try {
      const storage = getStorage();
      // random

      // get file extension
      const mountainsRef = ref(storage,"/tmp", file.name);
      const resp =await uploadBytes(mountainsRef, file)
      const downloadUrl=await getDownloadURL(mountainsRef);

      return downloadUrl
    } catch (error) {
      console.log("error",error)
      return ""
      
    }
  
  
  }


  // upload pdf to firebase storage
  export async function uploadPdfToFirebaseStorage(pdfBuffer,userId,id){
    try {
      const storage = getStorage();
      // randomc
      const UniqueFilename = id;
        const pdfRef = ref(storage, `pdfs/${userId}/${UniqueFilename}.pdf`);

        await uploadBytes(pdfRef, pdfBuffer);
        const downloadUrl=await getDownloadURL(pdfRef);
        return downloadUrl
    }
    catch (error) {
      console.error('Errror uploading PDF:', error);
      // return NextResponse.error(new Error('Internal Server Error'));
  }
}


// upload xlsx file xlsxBuffer to firebase storage and return download url 
export async function uploadXlsxToFirebaseStorage(xlsxBuffer,userId,id){
  try {
    const storage = getStorage();
    // randomc
    const UniqueFilename = id;
      const xlsxRef = ref(storage, `xlsx/${userId}/${UniqueFilename}.xlsx`);

      await uploadBytes(xlsxRef, xlsxBuffer);
      const downloadUrl=await getDownloadURL(xlsxRef);
      return downloadUrl
  }
  catch (error) {
    console.error('Errror uploading XLSX:', error);
    // return NextResponse.error(new Error('Internal Server Error'));
}
}


// delete all pdf files from firebase storage by userId /pdfs/clu6w51f000025t140gzidtb2
export async function deleteAllPdfFilesFromFirebaseStorage(userId,) {
  try {
    const storage = getStorage();
    const folderRef = ref(storage, `pdfs/${userId}`);
    const listResult = await listAll(folderRef);
   
    listResult.items.forEach(async (itemRef) => {
      await deleteObject(itemRef);
    });

    console.log("All PDF files deleted");
  } catch (error) {
    console.error('Error deleting PDF:', error);
  }
}

// deleted all excel files from firebase storage by userId /xlsx/clu6w51f000025t140gzidtb2
export async function deleteAllXlsxFilesFromFirebaseStorage(userId,) {
  try {
    const storage = getStorage();
    const folderRef = ref(storage, `xlsx/${userId}`);
    const listResult = await listAll(folderRef);
   
    listResult.items.forEach(async (itemRef) => {
      await deleteObject(itemRef);
    });

    console.log("All XLSX files deleted");
  } catch (error) {
    console.error('Error deleting XLSX:', error);
  }
}


// upload xml to firebase storage and return download url  and delete all xml files from firebase storage by userId /xml/clu6w51f000025t140gzidtb2
export async function uploadXmlToFirebaseStorage(xmlBuffer,userId,id){
  try {
    const storage = getStorage();
    // randomc
    const UniqueFilename = id??Math.random().toString(36).substring(7);
      const xmlRef = ref(storage, `xml/${userId}/${id}.xml`);

      await uploadBytes(xmlRef, xmlBuffer);
      const downloadUrl=await getDownloadURL(xmlRef);

      // delete all xml files from firebase storage by userId /xml/clu6w51f000025t140gzidtb2
      // const itemrRef = ref(storage, `xml/${userId}/${id}.xml`);

      // await deleteObject(itemrRef);


      // const listResult = await listAll(folderRef);
   
      // listResult.items.forEach(async (itemRef) => {
      //   await deleteObject(itemRef);
      // });

      // console.log("All XML files deleted");
      return downloadUrl

  }
  catch (error) {
    console.error('Errror uploading XML:', error);
    // return NextResponse.error(new Error('Internal Server Error'));
}
}


// google loign

export async function LoginWithGoogle(loginDone,onError) {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  // signInWithRedirect(auth, provider);

  


  
  signInWithRedirect(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;

    loginDone(user)




    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    console.log(error)
    onError(error)
    // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // // The email of the user's account used.
    // const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  
}


// login with github
export async function LoginWithGithub(loginDone,onError) {
  const auth = getAuth();
  const provider = new GithubAuthProvider();


  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;

    loginDone(user)
    
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    onError(error)
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });
}


// add review to firebase wordsList,feedback,score,inputEassy 
export async function AddEassayReviewToDB({  eassayData,id, trashed,status}) {
  const user=cookies?.get('user')
  // const userId=JSON.parse(user).uid

  // console.log("user from firbase ",user)

const data=eassayData


console.log("data",data)





  const reviewRef = doc(db, "reviews", id);

  await setDoc(reviewRef, {
    eassayData:data,
    userId:user?.uid,
    id:id,
    trashed:trashed,
    status:status,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });

  
}



export async function UpdateEassayReviewToDB({  eassayData,id, trashed}) {
  const user=cookies?.get('user')
  // const userId=JSON.parse(user).uid

  // console.log("user from firbase ",user)

const data=eassayData


console.log("data",data)





  const reviewRef = doc(db, "reviews", id);

  await updateDoc(reviewRef, {
    eassayData:data,
    userId:user?.uid,
    id:id,
    trashed:trashed,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });

  
}


// get eassayData by id

export async function GetEassayDataById(id,user) {


  const userId=user?.uid

  const docRef = doc(db, "reviews", id);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists() && docSnap.data().userId===userId) {
    return docSnap.data()
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!",docSnap.data(),userId);
  }
}


// get all reviews by user.userId
export async function GetAllReviewsByUserId(user,_q) {

  const userId=user?.uid
  let q;

  // if (_q){
  // q=query(collection(db, "reviews"), where("userId", "==", userId,),
  // where("trashed", "==", false), 
  // where("eassayData", "in", _q),
  // orderBy("createdAt", "desc"));
  // }else{
    q=query(collection(db, "reviews"), where("userId", "==", userId,),
    where("trashed", "==", false), 
    
    orderBy("createdAt", "desc"));


  const querySnapshot = await getDocs(q);

  const reviews = [];
  querySnapshot.forEach((doc) => {
    reviews.push({ id: doc.id, ...doc.data() });
  });
  // sereach in eassayData
  if (_q){
    const _reviews=[];
    reviews.forEach(review=>{
      const inputEassy=JSON.stringify(review?.eassayData?.inputEassy);

      if (inputEassy.toLocaleLowerCase().includes(_q.toLocaleLowerCase())){
        _reviews.push(review)
      }

        
    })
    return _reviews
  }

  return reviews;

}


export async function GetAllReviewsByUserIdTrashed(user) {

  const userId=user?.uid



  const q = query(collection(db, "reviews"), where("userId", "==", userId,),
  where("trashed", "==", true), 
  orderBy("createdAt", "desc"));

  const querySnapshot = await getDocs(q);

  const reviews = [];
  querySnapshot.forEach((doc) => {
    reviews.push({ id: doc.id, ...doc.data() });
  });

  return reviews;

}

// add trassh==true to reviews
export async function SetReviewAsTrashed(id) {
  console.log("id DeleteReview: ",id)

  const reviewRef = doc(db, "reviews", id);
  await updateDoc(reviewRef, {
    trashed: true
  });


}


// delte reviews
export async function DeleteReview(id) {
  console.log("id DeleteReview: ",id)
  const reviewRef = doc(db, "reviews", id);
  await deleteDoc(reviewRef);

}


// update status
export async function UpdateEassayStatus(id,status) {
  const reviewRef = doc(db, "reviews", id);
  await updateDoc(reviewRef, {
    status: status
  });
  
}

// add user data to db
export async function addUserProfileToDB({email,fullName,photoURL}) {
    const userRef = doc(db, "users", user.id);

    await setDoc(userRef, {
      email:email,
      fullName:fullName,
      photoURL:photoURL
    });

    console.log("user added to db")
}


export async function RequestDemo({name,email,phone,company}) {
    const _collection = collection(db, "demo_requests");

    await addDoc(_collection, {
      name:name,
      email:email,
      phone:phone,
      company:company,
      createdAt:serverTimestamp()
    });
  }

  // updateProfile 



  // AddorUpdateProfileData
  export async function AddorUpdateProfileData({user,firstName,lastName,fullName,photoFIle}) {

    let urlPhoto=null;

    if(photoFIle){
    urlPhoto = await uploadFileToFirebaseStorage(photoFIle)
    }

   if(!urlPhoto){
    const profileData=await getUserProfile({uid:user.uid})

    urlPhoto=profileData?.photoURL
   }

   if(!urlPhoto){
    urlPhoto=user?.photoURL
   }


    const userRef = doc(db, "users", user.uid);

    await setDoc(userRef, {
      email:user?.email,
      fullName:fullName,
      firstName:firstName,
      lastName:lastName,
      photoURL:urlPhoto,
      createdAt: serverTimestamp()
    });

    
  }


  // get user profile
  export async function getUserProfile({uid}) {

    const userRef = doc(db, "users", uid);

    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

  }


  export async function updateUserProfile({fullName,photoFIle}) {

    let urlPhoto=null;

    if(photoFIle){urlPhoto=    await uploadFileToFirebaseStorage(photoFIle)}



    // if(urlPhoto){
    //   await updateProfile(auth.currentUser, {
    //     displayName: fullName,urlPhoto}
    //   );
  
    // }else{
    //   await updateProfile(auth.currentUser, {
    //     displayName: fullName
    //   });
    // }

   
   
      
    // console.log("user added to db")

}