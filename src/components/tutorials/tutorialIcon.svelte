<script>
    import HeadPara from "./headPara.svelte";
    import {link} from 'svelte-navigator';
    const str="How to add a favicon to your website - ICO format";
</script>
<main>
    <HeadPara str={str} title="TUTORIALS"/>
    <div class="container">
        <p>Use this tutorial if you have an ICO formatted favicon. An ICO formatted favicon ends with the .ico file extension. If you have a PNG formatted favicon use <a href="/tutorials/how-to-add-a-favicon-to-a-website-png-format" use:link>this tutorial</a> instead.</p>
    
        <h2>Step 1: Name Your Favicon</h2>
        <p>Make sure that your favicon is named <code>favicon.ico</code>. The naming of the file is important because web browsers automatically look for a file with that specific name. If you need to use a custom name then head to this advanced tutorial.</p>
    
        <h2>Step 2: Upload Your Favicon</h2>
        <p>Upload your favicon to your website's main or root directory. The file should be accessible at <code>yourwebsite.com/favicon.ico</code>. The location of the file is important because web browsers will automatically look for a file named <code>favicon.ico</code> in that specific location. If you need to use a custom location then head to this advanced tutorial.</p>
    
        <h2>Step 3: Testing</h2>
        <p>Once you've uploaded the favicon you should be able to verify that installation worked by viewing the favicon in the tab of the browser. Bookmark your webpage to validate that the favicon shows up in the bookmarks bar as well.</p>
    
        <h2>Step 4: Debugging</h2>
        <h3>Why isn't my favicon being displayed?</h3>
        <p>The most likely scenario is that your favicon is misnamed or was installed in the wrong directory. Make sure that your favicon is accessible at <code>yourwebsite.com/favicon.ico</code></p>
        <h3>Why isn't it displaying the latest version?</h3>
        <p>Web browsers cache the favicon and sometimes display older versions. You may need to clear your cache if seems like your favicon is not updating. This will force the browser to display the latest version of your favicon.</p>
    </div>
</main>
<style>
    .container{
        padding:5rem 6rem;
        width:56%;
        line-height:1.5;
        color:#4a4a4a;
    }
    a{
        text-decoration: none;
        color:#485fc7;
        display: inline;
    }
    a:hover{
        color:#000000;
    }
    code{
        background-color: #F5F5F5;
        color:#da1039;
        font-size:.875em;
        font-weight:400;
        padding: 0.25rem 0.5rem;
    }
    @media(min-width:2200px) and (max-width:2700px){
        .container{
            max-width:1300px;
            margin:3rem 7%;
            font-size:1.5rem;
        }
    }
    @media (min-width:1700px) and (max-width:2200px){
        .container{
            max-width:1000px;
            margin:3rem 7%;
            font-size:1.25rem;
        }
    }
    @media(max-width:950px){
        .container{
            width:80%;
            max-width:550px;
            margin:1rem auto;
            padding:1rem 1rem;
        }
    }
    @media(max-width:535px){
        .container{
            padding:0.75rem;
            margin:0.25rem auto;
        }
    }
    @media(max-width:380px){
        .container{
            font-size: 0.85rem;
            width:95%;
            padding:0.25rem;
        }
    }
</style>