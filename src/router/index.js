
import {initializeApp} from 'firebase/app'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import{
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth'
import {
  getFirestore, collection,addDoc, deleteDoc, doc
  
  
} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyChqIyvkSsAw3yT6DKzJMYPhu5FYE3TMR4",
  authDomain: "firstproj-a4a91.firebaseapp.com",
  projectId: "firstproj-a4a91",
  storageBucket: "firstproj-a4a91.appspot.com",
  messagingSenderId: "727671980380",
  appId: "1:727671980380:web:936fbf174f702678d84199"
};

initializeApp(firebaseConfig)

const db = getFirestore()

const auth = getAuth()

//signing users up






const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path:'/jobs',
    redirect:'/'
  },
  {
    path:'/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


const usersCollection = collection(db, 'users')




document.addEventListener("DOMContentLoaded", function() { 

  const addBooks= document.querySelector('.adduser')
  addBooks.addEventListener('submit', (e)=>{
    e.preventDefault()
    addDoc(usersCollection,{
      name: addBooks.name.value,
      pass: addBooks.password.value,
    })
    .then(()=>{
      addBooks.reset()
    })
  })

  const delBooks= document.querySelector('.dele')
  delBooks.addEventListener('submit', (e)=>{
    e.preventDefault()

    const docRef= doc(db, 'users', delBooks.id.value)
    deleteDoc(docRef)
    .then(()=>{
      delBooks.reset()
    })
    .catch((err)=> {
      console.log(err.message)
    })
  })




const signupForm = document.querySelector('.signup')

  
  
  signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log("Hello")
    const email = signupForm.email.value
    const password = signupForm.password.value
    console.log(email,password)
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred)=>{
        console.log('user created:',cred.user)
        signupForm.reset()
      })
      .catch((err)=>{
        console.log(err.message)
      })
   
})




const logoutButton = document.querySelector('.logout')
if (logoutButton){
  logoutButton.addEventListener('click', () => {
    signOut(auth)
    .then(()=>{
      console.log('the user signed out')
    })
    .catch((err)=>{
      console.log(err.message)
    })

  })
}

const loginForm = document.querySelector('.login')
if (loginForm){
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = loginForm.email.value
    const password = loginForm.password.value

    signInWithEmailAndPassword(auth,email,password)
    .then((cred)=>{
      console.log('user logged in: ',cred.user)
    })
    .catch((err)=>{
      console.log(err.message)
    })
    
  })
}
})








