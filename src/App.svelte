<script>
  import { db, auth } from "./firebase.js";
  import { doc, getDoc } from "firebase/firestore";
  import { collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";
  import { onSnapshot } from "firebase/firestore";
  import { setDoc, addDoc, serverTimestamp, updateDoc, increment, deleteDoc } from "firebase/firestore"; 
  import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
    import { onMount } from "svelte";
  import Text2ico from "./components/Text2ico.svelte";
  import Img2ico from "./components/Img2ico.svelte";
  import FaviconJS from "./favicon.js/favicon.mjs";
  import Emoji2ico from "./components/Emoji2ico.svelte";


  let interns = [];
  
  let email;

  let fetchDocument = async () => {
    let docSnap = await getDoc(doc(db, "Interns", "hannan.satopay@ieee.org"));
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

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

  let fetchCollection = async () => {
    onSnapshot(query(collection(db, "Interns")), (querySnapshot) => {
      interns = [];
      querySnapshot.forEach((doc) => {
        interns = [...interns, doc.data()];
      });
    });
  }

  fetchCollection();

  let addIntern = async () => {
    // await setDoc(doc(db, "Interns", "james.bond@gmail.com"), {
    //   name: "Tom Cruise",
    // }, { merge: true });
    await addDoc(collection(db, "Interns"), {
      name: "Tom Cruise",
      timestamp: serverTimestamp()
    });
  }

  let incrementAge = async () => {
    await updateDoc(doc(db, "Interns", "hannan.satopay@ieee.org"), {
        age: increment(2)
    });
  }

  let deleteDocument = async () => {
    await deleteDoc(doc(db, "Interns", "hannan.satopay@ieee.org"));
  }

  let register = async () => {
    let email = 'hannan.satopay@ieee.org';
    let password = 'password';
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("User Details", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  }

  let login = async () => {
    let email = 'hannan.satopay@ieee.org';
    let password = 'password';
    // let password = 'pwd';
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("User Details", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  }

  let logout = async() => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  onMount(async()=> {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Signed In
        console.log("User Data", user);
        email = user.email;
      } else {
        email = null;
        console.log("User is not logged in");
      }
    });
  });
</script>

<main>
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

  <Text2ico/>
  <!-- <Img2ico/> -->
  <!-- <Emoji2ico/> -->
  
</main>

<style>
</style>