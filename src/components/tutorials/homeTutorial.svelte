<script>
    import HeadPara from './headPara.svelte';
    import {link} from 'svelte-navigator';
    const str="Want to learn how to install a favicon on your website? Interested in how the .ico format works? We've created easy, but comprehensive tutorials!";
  </script>
  
  <main>
    <HeadPara str={str} title="TUTORIALS"/>
    <div id='overview'>
      <h1>Overview</h1>
      <p>What is a favicon, why do I need one, and how can I generate one?</p>
      <span class="anchor">
          <a href="/tutorials/what-is-a-favicon" use:link>What is a favicon?</a>
      </span>
    </div>
    <div id='installation'>
      <h1>Installation</h1>
      <p>After you've generated your favicon you can use the following comprehensive guides to install it on your website.</p>
      <a href="/tutorials/how-to-add-a-favicon-to-a-website-ico-format" use:link>How to add a favicon to a website - ICO format</a>
      <a href="/tutorials/how-to-add-a-favicon-to-a-website-png-format" use:link>How to add a favicon to a website png format</a>
    </div>
      <!-- footer  -->
  </main>

  <style>
    a{
      text-decoration: none;
      display:list-item;
      width:fit-content;
      list-style: disc inside;
      margin-left:25px;
      color:#485fc7;
    }
    a:hover{
      color:#000000;
    }
    #overview, #installation{
      line-height:2rem;
      padding:5rem;
      box-sizing: border-box;
    }
    main h1{
      margin-bottom:2rem;
      font-size: 1.5rem;
    }
    @media(min-width:2200px) and (max-width:2700px){
        #overview, #installation{
            max-width:1300px;
            margin:3rem 7%;
            font-size:1.5rem;
        }
    }
    @media (min-width:1700px) and (max-width:2200px){
        #overview, #installation{
            max-width:1000px;
            margin:2.5rem 7%;
            font-size:1.5rem;
        }
    }
    @media(max-width:950px){
        #overview, #installation{
            width:70%;
            margin:3rem auto;
            font-size:1.25rem;
            padding:2.5rem;
        }
    }
    @media(max-width:800px){
        #overview, #installation{
            width:90%;
            margin: 2.5rem auto;
            padding:2rem;
        }
    }
    @media(max-width:535px){
        #overview, #installation{
            padding:0.75rem;
            margin:1rem auto;
        }
    }
    @media(max-width:380px){
        #overview, #installation{
            font-size: 0.85rem;
            width:95%;
            padding:0.25rem;
        }
    }
  </style>
