<script>
    import HeadPara from "./headPara.svelte";
    import {link} from 'svelte-navigator';
    const str="How to add a favicon to your website - PNG format";
</script>
<main>
    <HeadPara str={str} title="TUTORIALS"/>
    <div class="container">
        <p>Use this tutorial if you have a PNG formatted favicon. A PNG formatted favicon ends with the .png file extension. If you have a ICO formatted favicon use <a href="/tutorials/how-to-add-a-favicon-to-a-website-ico-format" use:link>this tutorial</a> instead.</p>
    
        <h2>Step 1: Name Your Favicon</h2>
        <p>While not required, we recommend that you name your PNG formatted favicon <code>favicon.png</code>. If you want to use a custom name then head to this advanced tutorial.</p>
    
        <h2>Step 2: Upload Your Favicon</h2>
        <p>While not required, we recommend that you upload your favicon to your website's main or root directory. The file should be accessible at <code>yourwebsite.com/favicon.ico</code>. If you want to use a custom location then head to this advanced tutorial.</p>
    
        <h2>Step 3: Link to Your Favicon</h2>
        <p>You will need tell the web browser the location of your favicon. This requires placing a <code>link</code> tag within the <code>head</code> tag of your website. An example of the link tag is shown below. You will need to replace the value of the <code>href</code> attribute with the location of your PNG formatted favicon. <code class="languageHTML"> &lt;link rel="icon" href="http://www.yourwebsite.com/favicon.png" &gt;</code></p>
    
        <h2>Step 4: Testing</h2>
        <p>Once you've uploaded the favicon you should be able to verify that installation worked by viewing the favicon in the tab of the browser. Bookmark your webpage to validate that the favicon shows up in the bookmarks bar as well.</p>
    
        <h2>Step 5: Debugging</h2>
        <h3>Why isn't my favicon being displayed?</h3>
        <p>The most likely scenario is that your favicon is misnamed or was installed in the wrong directory. Make sure that your favicon is accessible at <code>yourwebsite.com/favicon.ico</code></p>
        <h3>Why isn't it displaying the latest version?</h3>
        <p>Web browsers cache the favicon and sometimes display older versions. You may need to clear your cache if seems like your favicon is not updating. This will force the browser to display the latest version of your favicon.</p>
    </div>
</main>
<style>
    .container{
        padding:3rem 5rem;
        width:56%;
        line-height:1.5;
        color:#4a4a4a;
    }
    a{
        color:#485fc7;
        text-decoration:none;
        display: inline;
    }
    a:hover{
        color:#000000;;
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