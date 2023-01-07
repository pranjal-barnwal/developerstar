<svelte:head>
  <title>HOME PAGE</title>
  <meta name="description" content="Favicon Generator Website">
</svelte:head>

<script>
  import "../app.css"
  import Cards from "./Cards.svelte";
  import MediaQuery from "svelte-media-query";
</script>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .para {
  font-weight: 600;
  color: #fff;
  font-size: 1.5em;
}

  .section_2 {
    padding: 20px 80px;
  }

  .desktop {
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-direction: row;
    gap: 20px;
  }

  ._bg {
    position: relative;
    width: 100%;
    height: max-content;
    background: rgba(246, 250, 255);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 99% 670px;
    /* background-attachment: fixed; */
  }

  .container {
    margin: auto 50px;
    text-align: left;
    word-wrap: wrap;
    line-height: 2;
  }

  p {
    color: rgb(83, 99, 135);
    font-size: 1.125rem;
  }

  .cards {
    background: #fff;
    padding: 5px 20px;
    margin: 0px 0px 12px 0px;
    border-radius: 0.5rem;
  }

  @media only screen and (max-width: 576px) {
    .section_2 {
      padding: 20px 30px;
    }
  }
</style>

<main>
	<div class = "black_header">
    <div class = "head_part">
      <h2>FAVICON GENERATOR</h2>
      <p class = "para">
         Quickly generate your favicon from text,<br /> image, or choose from hundreds of emojis.</p>
    </div>
  </div>

<div class = "section_2">
    <h3>Favicon Generators</h3>
      <MediaQuery query="(min-width: 768px)" let:matches>
          {#if matches}
          <div class=" desktop">
             <Cards /> 

          </div>
          {/if}
      </MediaQuery> 

      <MediaQuery query="(min-width: 576px) and (max-width: 786px)" let:matches>
          {#if matches}
           <div class="tablet">
                <Cards /> 
            </div>
          {/if}
      </MediaQuery>

      <MediaQuery query="(max-width:480px)" let:matches>
	        {#if matches}
	          <div class="mobile">
              <Cards /> 
            </div>
            {/if}
      </MediaQuery>
</div>
  <div class = "_bg">
  <div class = "section_2">
    <div class = "container">
            <h1>Why do we need Favicon Generator? </h1>
            <p>
              A favicon is a small icon or collection of icons associated with a website, web page, or web application. 
              It’s displayed within the browser tabs and bookmarks bar. The examples below show the favicons for Google, Reddit, and Squarespace within the browser tab. 
              A favicon is used to help users visually identify websites, web pages, and web applications.
              <br /> 
            </p>
          <h1>How do i Create a Favicon</h1>
              <div class = "cards">
                  <h3>1. Create a logo</h3>
                  <p>
                    To maintain a consistent brand identity, website icons are normally created out of essential elements of your logo. So, you need to start with a logo. Enter your company name and select your industry. Favicon will generate multiple
                    logos that fit your business like a glove. Choose the one you like best!
                  </p>
              </div>

               <div class = "cards">
                  <h3>2. Create a Favicon</h3>
                  <p>
                  Create an icon design based on your selected logo. You can create a single website icon or a full set of different sizes (16-128 px). The best part is that you don’t need to draw a single line. Sim
                  pre-made templates and edit them as you like!
                  </p>
              </div>

               <div class = "cards">
                  <h3>3. Save and download your files</h3>
                  <p>
                  Download your file in the right format (PNG) to your computer. 
                  Now you can add them to your website or any other platform!
                  </p>
              </div>
        </div>
    </div>
  </div>

	<!-- <Button /> -->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="0.9" d="M0,96L80,106.7C160,117,320,139,480,165.3C640,192,800,224,960,224C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>

</main>