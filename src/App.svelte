<script>
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