<svelte:head>
    <link rel="icon" type="image/svg" href={`https://twemoji.maxcdn.com/2/svg/${codes.toLowerCase()}.svg`}/>
    <title>favicon.io - favicon.io</title>
</svelte:head>
<script>
    import Instruct from "./instruct.svelte";
    import HeadPara from "../tutorials/headPara.svelte";
    export let id;
    export let codes;
    let gid=id.split('-').map((word)=>{
        return word[0].toUpperCase()+word.slice(1);
    }).join(' ');
    let gcodes=codes.toLowerCase().replace(/\s+/g,'-');
    const str="Choose from hundreds of emojis to create your favicon. Emoji images from the Twemoji project.";
</script>
<main>
    <HeadPara str={str} title="FAVICON GENERATOR / GENERATE FROM EMOJI"/>
    <div class="container">
        <h1>Emoji Favicons > {gid}</h1>
        <p>Preview your favicon in multiple sizes</p>
        <div id="preview">
            <img src={`https://twemoji.maxcdn.com/2/svg/${gcodes.toLowerCase()}.svg`} alt={`${gcodes}`} style="height: 64px;" />
            <img src={`https://twemoji.maxcdn.com/2/svg/${gcodes.toLowerCase()}.svg`} alt={`${gcodes}`} style="height: 48px;" />
            <img src={`https://twemoji.maxcdn.com/2/svg/${gcodes.toLowerCase()}.svg`} alt={`${gcodes}`} style="height: 32px;" />
            <img src={`https://twemoji.maxcdn.com/2/svg/${gcodes.toLowerCase()}.svg`} alt={`${gcodes}`} style="height: 16px;" />
            <img src={`https://twemoji.maxcdn.com/2/svg/${gcodes.toLowerCase()}.svg`} alt={`${gcodes}`} style="height: 8px;" />
        </div>
        <Instruct/>
        <p>Download your favicon in multiple formats.</p>
        <button id="download">Download</button>
    </div>
    <div class="container">
        <h2>Installation</h2>
        <p>First, use the download button to download the files listed below. Place the files in the root directory of your website.</p>
        <ul>
            <li>android-chrome-192x192.png</li>
            <li>android-chrome-512x512.png</li>
            <li>apple-touch-icon.png</li>
            <li>favicon-16x16.png</li>
            <li>favicon-32x32.png</li>
            <li>favicon.ico</li>
            <li>site.webmanifest</li>
        </ul>
        <p>Next, copy the following link tags and paste them into the <span style="background-color:#f5f5f5; color:#da1039; font-size:0.875rem; padding: 0.25rem 0.5rem;">head</span> of your HTML.</p>
        <div class="links">
            <code class="languageHTML"> &lt;link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" &gt;</code>
            <code class="languageHTML"> &lt;link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" &gt;</code>
            <code class="languageHTML"> &lt;link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" &gt;</code>
            <code class="languageHTML"> &lt;link rel="manifest" href="/site.webmanifest" &gt;</code>
        </div>
        <button id="copy">Copy</button>
    </div>
</main>
<style>
    button{
        cursor:pointer;
        justify-content: center;
        text-align:center;
        color:#fff;
        border-color:transparent;
        padding:1rem 1.5rem;
        border-radius:0.25rem;
    }
    .container{
        padding:1rem;
        width:56%;
        line-height:1.5;
        color:#4a4a4a;
        border:3px solid #f5f5f5;
        margin:3rem 5rem;
    }
    .links{
        background-color: #f5f5f5;
        padding:1rem;
    }
    .links code{
        display:block;
    }
    #preview{
        display:flex;
        justify-content: space-between;
        align-items: baseline;
        flex-wrap: wrap;
    }
    #preview img{
        box-sizing: border-box;
        margin: 2rem;
        align-self: center;
    }
    #copy{
        background-color:#3e8ed0;
        margin:1rem 0;
    }
    #download{
        background-color: #00d1b2;
        width:100%;
        max-width:650px;
        font-size:1.5rem;
        display:block;
        margin:0 auto;
    }
    @media(min-width:2200px){
        .container{
            max-width:1300px;
            margin:3rem 7%;
            font-size:1.5rem;
        }
    }
    @media(min-width:1700px) and (max-width:2200px){
        .container{
            max-width:1000px;
            margin:3rem 7%;
            font-size:1.25rem;
        }
        #copy{
            width:15%;
            display: block;
            margin:2rem auto;
        }
    }
    @media(max-width:950px){
        .container{
            width:70%;
            margin:3rem auto;
        }
        #copy{
            width:20%;
        }
    }
    @media(max-width:800px){
        .container{
            width:90%;
        }
    }
    @media(max-width:550px){
        .container{
            padding:0.75rem;
            margin:1rem auto;
        }
        #preview{
            flex-direction: column;
        }
        #copy{
            display: block;
            margin:1rem auto;
            width:50%;
        }
    }
    @media(max-width:380px){
        .container{
            font-size: 0.85rem;
            width:95%;
            padding:0.25rem;
        }
        #download{
            display: block;
            width:80%;
            margin: 0 auto;
            /* align-self: center; */
        }
    }
</style>