<script>  
    // import HeadPara from '../tutorials/asset/';
    import HeadPara from './headPara.svelte';
    const str="What is a favicon?";
</script>

<main>
    <HeadPara str={str} title="TUTORIALS"/>
    <div class="container">
        <h1>What is a favicon?</h1>
        <p>A favicon is a small icon or collection of icons associated with a website, web page, or web application. Its displayed within the browser tabs and bookmarks bar. The examples below show the favicons for Google, Reddit, and Squarespace within the browser tab.</p>
        <div id='imageSet'>
            <div class="imageControl">
                <img src="../googleFavicon.png" alt="googleFavicon" />
            </div>
            <div class="imageControl">
                <!-- <img src='./../.' -->
                <img src="../redditFavicon.png" alt="redditFavicon"/>
            </div>
            <div class="imageControl">
                <img src="../squarespaceFavicon.png" alt="squarespaceFavicon"/>
            </div>
        </div>
        <p>Below are some favicons from a handful of popular websites displayed within the Chrome bookmarks bar.</p>
        <img class="kpBig" src="../flickr.png" alt="flickrBigFav"/>
        
        <h1>What is a favicon used for ? </h1> 
        <p>A favicon is used to help users visually identify websites, web pages, and web applications more easily within browser tabs, bookmarks, shortcuts, and address bars more easily. It’s important to have a favicon for your website for brand recognition so that your users can easily identify your site in their browser tabs and bookmarks.</p>
        <p>Squarespace uses its logo as its favicon to stay consistent with the company's brand.</p>
        <img class="kpBig" src="../squarespace.png" alt="sqaurespace"/>

        <h1>What are alternative names for favicon ?</h1>
        <p>Some alternative names for favicon are browser icon, favorite icon, shortcut icon, tab icon, URL icon, and bookmark icon. The word favicon is short for “favorite icon” and originates from Internet Explorer’s “Favorites” feature which most modern browsers call “bookmarks”.</p>

        <h1>What are common favicon file formats?</h1>
        <h3>ICO - favicon.ico</h3>
        <p>The most common favicon formats are ICO, PNG, and SVG, but there are additional formats for specific browsers or devices. The ICO file format was developed by Microsoft and is the original file format for the favicon. The format is unique because it allows for multiple small images within the same file. This is advantageous because the small icons required for a favicon in ICO format (16x16, 32x32, and 48x48 pixels) can be scaled and optimized independently. At small dimensions you can’t rely on the browser to automatically resize your icon in an optimal way. The ICO format is supported by all browsers and it’s the only format that IE5 through IE10 supports.</p>
        <h3>PNG - favicon.png</h3>
        <p>The PNG format is a nice format because it’s a format that most people are used to and doesn’t require any special tools to create. With modern screens being high resolution the original problem of small icon dimensions for small resolutions no longer exists. For browsers that support the PNG favicon format oftentimes the quality of the favicon displayed within the browser tab or bookmarks bar will be higher than the ICO format. The disadvantage of the PNG format is that it’s not compatible with IE5 through IE10.</p>
        <h3>SVG - favicon.svg</h3>
        <p>The SVG format has benefits over the PNG and ICO formats, but doesn’t have great browser support yet. SVG files are very lightweight and they are infinitely scalable. This means that image quality is superb without sacrificing load times for heavy images. Only Chrome, Firefox, and Opera support SVG format favicons.</p>

        <h1>What are common favicon sizes?</h1>
        <p>It’s important to note that your favicon needs to be square.</p>
        <p>For ICO format the recommended sizes are 16x16, 32x32, and 48x48 pixels.</p>
        <p>For PNG format the recommended sizes are 16x16 and 32x32, but browsers will accept any square PNG image.</p>

        <h1>Do favicons affect search engine optimization or SEO?</h1>
        <p>The presence of a favicon can indirectly affect SEO. Some search engines, such as DuckDuckGo, display the favicon within the search results. An eye-catching favicon can help increase click through rates (CTR) on these search engines. Additionally a favicon is a must for building brand recognition and brand trust. A missing favicon can cause users to lose trust in the website and increase bounce rates.</p>
    </div>
</main>

<style>
    .container{
        padding:5rem 6rem;
        width:56%;
        line-height:1.5;
        color:#4a4a4a;
    }
    #imageSet{
        display:flex;
    }
    #imageSet img{
        width:100%;   
    }
    .imageControl{
        width:33%;
        padding:0.75rem;
        height:100px;
    }
    .kpBig{
        width:100%;
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
    @media(max-width:700px){
        #imageSet{
            flex-direction:column;
        }
        .imageControl{
            width:100%;
            height: fit-content;
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