<script>
  // import { db, auth } from "./firebase.js";
  // import { doc, getDoc } from "firebase/firestore";
  // import { collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";
  // import { onSnapshot } from "firebase/firestore";
  // import { setDoc, addDoc, serverTimestamp, updateDoc, increment, deleteDoc } from "firebase/firestore"; 
  // import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
  // import { onMount } from "svelte";

  import {Router, Route} from 'svelte-navigator';
  import EmojiHome from "./components/emoji2Icons/emojiHome.svelte";
  import OneEmoji from './components/emoji2Icons/oneEmoji.svelte';
  import TutorialIcon from './components/tutorials/tutorialIcon.svelte';
  import TutorialPng from './components/tutorials/tutorialPng.svelte';
  import HomeTutorial from './components/tutorials/homeTutorial.svelte';
  import TutorialFavicon from './components/tutorials/tutorialFavicon.svelte';    
  import Home from './components/Home.svelte';
  import Img2ico from './components/Img2ico.svelte';
  import Text2ico from './components/Text2ico.svelte';
  import Navigation from './components/Navbar.svelte';
  import Footer from './components/Footer.svelte';

  
  
  //? // *****CODE FOR FIREBASE AUTHENTICATION & STORAGE IF NEEDED TO IMPLEMENT AT END*****
  // let interns = [];
  // let email;

  // let fetchDocument = async () => {
  //   let docSnap = await getDoc(doc(db, "Interns", "hannan.satopay@ieee.org"));
  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // }

  // fetchDocument();

  // let fetchCollection = async () => {
  //   const querySnapshot = await getDocs(query(collection(db, "Interns")));
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     // console.log(doc.id, " => ", doc.data());
  //     // interns.push(doc.data());
  //     interns = [...interns, doc.data()];
  //   });
  //   // interns = interns;
  // }

  // fetchCollection();

  // let fetchCollection = async () => {
  //   onSnapshot(query(collection(db, "Interns")), (querySnapshot) => {
  //     interns = [];
  //     querySnapshot.forEach((doc) => {
  //       interns = [...interns, doc.data()];
  //     });
  //   });
  // }

  // fetchCollection();

  // let addIntern = async () => {
  //   // await setDoc(doc(db, "Interns", "james.bond@gmail.com"), {
  //   //   name: "Tom Cruise",
  //   // }, { merge: true });
  //   await addDoc(collection(db, "Interns"), {
  //     name: "Tom Cruise",
  //     timestamp: serverTimestamp()
  //   });
  // }

  // let incrementAge = async () => {
  //   await updateDoc(doc(db, "Interns", "hannan.satopay@ieee.org"), {
  //       age: increment(2)
  //   });
  // }

  // let deleteDocument = async () => {
  //   await deleteDoc(doc(db, "Interns", "hannan.satopay@ieee.org"));
  // }

  // let register = async () => {
  //   let email = 'hannan.satopay@ieee.org';
  //   let password = 'password';
  //   createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in 
  //     const user = userCredential.user;
  //     console.log("User Details", user);
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorCode, errorMessage);
  //   });
  // }

  // let login = async () => {
  //   let email = 'hannan.satopay@ieee.org';
  //   let password = 'password';
  //   // let password = 'pwd';
  //   signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in 
  //     const user = userCredential.user;
  //     console.log("User Details", user);
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorCode, errorMessage);
  //   });
  // }

  // let logout = async() => {
  //   signOut(auth).then(() => {
  //     // Sign-out successful.
  //   }).catch((error) => {
  //     // An error happened.
  //   });
  // }

  // onMount(async()=> {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // Signed In
  //       console.log("User Data", user);
  //       email = user.email;
  //     } else {
  //       email = null;
  //       console.log("User is not logged in");
  //     }
  //   });
  // });

</script>

<main>

  <Navigation/>
  <Router>
    <Route path="/" component={Home}></Route>
    <Route path="/favicon-convertor" component={Img2ico}></Route>
    <Route path="/favicon-generator" component={Text2ico}></Route>
    <Route path="/tutorials" component={HomeTutorial}></Route>
    <Route path="/tutorials/what-is-a-favicon" component={TutorialFavicon}>What is a favicon?</Route>
    <Route path="/tutorials/how-to-add-a-favicon-to-a-website-ico-format" component={TutorialIcon}>How to add a favicon to a website - ICO format</Route>
    <Route path="/tutorials/how-to-add-a-favicon-to-a-website-png-format" component={TutorialPng}>How to add a favicon to a website png format</Route>
    <Route path="/emoji-favicons" component={EmojiHome}></Route>
    <Route path="/emoji-favicons/:id/:codes" component={OneEmoji}>
        <OneEmoji id codes/>
    </Route>
  </Router>
  <Footer/>
  
  <!-- {#each interns as intern}
    <p>{intern.name}</p>
  {/each}
  <button on:click={addIntern}>Add Intern</button>
  <button on:click={incrementAge}>Increment Age</button>
  <button on:click={deleteDocument}>Delete Document</button>

  <div>
    {#if email}
      <p>User: {email}</p>
    {:else}
      <p>User is not signed-in</p>
    {/if}
    <button on:click={register}>Register</button>
    <button on:click={login}>Login</button>
    <button on:click={logout}>Logout</button>
  </div> -->

  <!-- <Home/> -->
  <!-- <Text2ico/> -->
  <!-- <Img2ico/> -->
  <!-- <Emoji2ico/> -->
  
</main>



<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');  
    *{
        margin:0;
        padding:0;
        text-decoration: none;
    }
    main{
        color: #4a4a4a;
        font-family: 'Source Sans Pro', sans-serif;
        margin: 0 auto;
    }
</style>
