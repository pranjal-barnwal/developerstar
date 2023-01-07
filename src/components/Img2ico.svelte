<script>
    // import dropimg from "./assets/48x48.813b813.c2822fa3d9ef25a65543ba9409e52e89.png";
    import FaviconJS from "../favicon.js/favicon.mjs";
    let img;
    let input;
    let container;
    //   let image ;
    let placeholder;
    let showImage = false;
    let canvas;
    let img_pre;
    let input_file;
    function image_preview() {
      const file = input_file.files[0];
      if (file) {
        showImage = true;
        const reader = new FileReader();
        reader.addEventListener("load", function () {
          img_pre.setAttribute("src", reader.result);
        });
        reader.readAsDataURL(file);
        return;
      }
      showImage = false;
    }
    function onChange() {
      // const file = input.files[0];
      // if (file) {
      //   showImage = true;
      //   const reader = new FileReader();
      //   reader.addEventListener("load", function() {
      //     img_pre.setAttribute("src", reader.result);
      //   });
      //   reader.readAsDataURL(file);
      //   return;
      // }
      // showImage = false;
      // canvas.width = 40;
      // canvas.height = 40;
      // CANVAS
      const ctx = canvas.getContext("2d");
      const myfile = input_file.files[0];
      var image_url = URL.createObjectURL(myfile);
      canvas.height = 128;
      canvas.width = 128;
      const image = new Image(canvas.width, canvas.height);
      console.log(canvas.width, canvas.height);
      image.onload = function () {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      };
      image.src = image_url;
      // function download() {
      //   const image = canvas.toDataURL();
      //   const favicon = new FaviconJS(canvas);
      // const dataurl = favicon.ico([16,32,48]);
      // // const bundle = favicon.bundle();
      // const link = document.createElement("a");
      // link.href = dataurl;
      // link.download = 'favicon.ico';
      // link.click();
      // }
      // document.querySelector('span').addEventListener('click',download);
    }
    // DOWNLOAD BUTTON
    function download() {
      const image = canvas.toDataURL();
      const favicon = new FaviconJS(canvas);
      const dataurl = favicon.ico([16, 32, 48]);
      // const bundle = favicon.bundle();
      const link = document.createElement("a");
      link.href = dataurl;
      link.download = "favicon.ico";
      link.click();
    }
    // document.querySelector('span').addEventListener('click',download);
    // COPY BUTTON 
    function copyText(htmlElement) {
      if (!htmlElement) {
        return;
      }
      let elementText = htmlElement.innerText;
      let inputElement = document.createElement("input");
      inputElement.setAttribute("value", elementText);
      document.body.appendChild(inputElement);
      inputElement.select();
      document.execCommand("copy");
      inputElement.parentNode.removeChild(inputElement);
    }
    function onClick() {
      copyText(document.querySelector("#pre_code"));
    }
  </script>
  
  
   <!-- LINK FOR FONT -->
  <link
    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
    rel="stylesheet"
    type="text/css"
  />
  
  
  
  <main>
    <!-- <section class="favicon_generator is-black">
      <div class="favicon-body">
        <div class="container">
          <div class="columns">
            <div class="column is-7">
              <h1
                class=" subtitle is-spaced is-uppercase has-text-grey-light has-text-weight-bold"
              >
                Favicon Generator / Generate from Image
              </h1>
              <p class="title is-3 has-text-letter-spacing-wide">
                Quickly generate your favicon from an image by uploading your
                image below. Download your favicon in the most up to date formats.
              </p>
            </div>
          </div>
        </div>
      </div> -->
    <!-- </section> -->
  
    <!-- BLACK SECTION -->
    <section>
      <div class="container_text">
        <div class="hero-body">
          <div class="columns is-7">
            <h1 class="favi-heading">Favicon Generator / Generate from Image</h1>
            <p class="title is-2 has-text-letter-spacing-wide">
              Quickly generate your favicon from an image by uploading your image
              below. Download your favicon in the most up to date formats.
            </p>
          </div>
        </div>
      </div>
    </section>
  
    <!--Converter part  -->
  
    <section class="generate-from-image">
      <div class="container">
        <div class="columns is-8">
          <div class="box">
            <h3 class="title is-3">Converter</h3>
            <div class="file-dropzone">
              <input
                accept="image/jpeg, image/png, image/jpeg"
                bind:this={input_file}
                on:change={onChange}
                type="file"
                id="image"
                name="avatar"
                bind:value={img}
              />
              <p class="has-text-centered has-text-3 is-vcentered">
                <span>Drag and drop your file here or click here to upload</span>
              </p>
            </div>
            <br />
            <div class="field is-grouped">
              <p class="control" bind:this={container}>
                <canvas hidden id="canvas" bind:this={canvas} />
  
                <!-- {#if showImage}
                  <img
                    bind:this={img_pre}
                    src=""
                    alt="Preview"
                    width="40"
                    sizes="(max-width: 40px) 100vw, 40px "
                    class="image g-image"
                  /> -->
                  <!-- <canvas id="canvas" bind:this={canvas} width="40" height="40"></canvas> -->
                <!-- {:else}
                  
                  <img
                    src={dropimg}
                    alt="Favicon Preview 48x48"
                    width="40"
                    srcset={dropimg}
                    sizes="(max-width: 40px) 100vw, 40px"
                    class="image g-image"
                  />
                {/if} -->
              </p>
  
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <p class="control" on:click={download}>
                <a
                  id="download-package"
                  target="_blank"
                  class="button is-rounded is-info"
                >
                  <span class="icon">
                    <svg
                      data-v-14591542=""
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="download"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="svg-inline--fa fa-download fa-w-16"
                      ><path
                        data-v-14591542=""
                        fill="currentColor"
                        d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                        class=""
                      /></svg
                    >
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr />
  
    <!-- INSTALLATION PART -->
    <section class="section" style="height: auto !important;">
      <div class="container" style="height: auto !important;">
        <div class="content" style="height: auto !important;">
          <div class="columns is-8">
            <div class="box is-box">
              <h3 class="title is-4">Installation</h3>
              <p>
                First, use the download button to download the files listed below.
                Place the files in the root directory of your website.
              </p>
              <ul>
                <li>android-chrome-192x192.png</li>
                <li>android-chrome-512x512.png</li>
                <li>apple-touch-icon.png</li>
                <li>favicon-16x16.png</li>
                <li>favicon-32x32.png</li>
                <li>favicon.ico</li>
                <li>site.webmanifest</li>
              </ul>
              <p>
                Next, copy the following link tags and paste them into the
                <code> head</code> of your HTML.
              </p>
              <pre id="pre_code">
                          <code>
  &lt;link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"&gt;
  &lt;link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"&gt;
  &lt;link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"&gt;
  &lt;link rel="manifest" href="/site.webmanifest"&gt;
                          </code>
                      </pre>
              <button class="button is-info" id="button_copy" on:click={onClick}
                >Copy</button
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr />
  
    <!-- ABOUT SECTION -->
    <section class="section">
      <div class="container">
        <div class="columns is-8">
          <div class="box">
            <div class="content">
              <h3 class="title is-4">About the favicon generator</h3>
              <p>
                If you already have an image that you would like to use for a
                favicon on your website the this is the tool you need. The favicon
                generator will convert you image to a favicon. You can upload a
                PNG, JPG, or BMP and the favicon generator will output an ICO
                file.
              </p>
              <p>
                For the best result you should upload an square image. You can use
                a standard image editing tool if you need to crop your image. Once
                your image is prepared upload it using the tool above. Next,
                verify that the preview image is to your liking. Finally, use the
                download button to export your favicon in ICO format.
              </p>
              <h3 class="title is-4">
                Why do I need an ICO file instead of a PNG?
              </h3>
              <p>
                An ICO file is a special image file use by the browser. The unique
                feature of an ICO file is that it is multilayered. Each layer of
                the favicon holds a different size of the image. The common sizes
                for a ICO formatted favicon are 16x16px, 32x32px, and 48x48px.
              </p>
              <p>
                For best compatibility web browsers can leverage the ICO file
                generated by the favicon generator. The browsers will use the
                different sizes for displaying in different areas of the website
                such as the bookmarks bar, the address bar, the browser tab, and
                as a desktop shortcut.
              </p>
              <h3 class="title is-4">
                What types of images work best for the favicon generator?
              </h3>
              <p>
                The favicon generator works best with a simple icon, logo, or
                letter. Intricate or complex designs don't work well when they are
                resized using the favicon generator as much detail is lost. If
                your logo is very complex we recommend generating the favicon from
                text using the alternative generator.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  
  <style>
    /* :global(body) {
          box-sizing:border-box;
          color: rgb(74, 74, 74);
          display: block;
          font-size:16px;
          font-size: 1em;
          line-height: 24px;
      }
      .favicon_generator.is-black {
          background-color: #0a0a0a;
          color: #ffff;
          padding: 48px;
      }
      .favicon_generator {
          align-items: stretch;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
      }
      .favicon-body{
          flex-grow: 1;
          flex-shrink:0;
          padding: 3rem-1.5rem;
      }
      .container {
          margin: 0 auto;
          position: relative;
          width: auto;
      } */
    :global(body) {
      margin: 0;
      display: block;
      align-items: center;
      justify-content: center;
      padding: 0px;
      font-family: "Source Sans Pro", sans-serif;
      font-weight: 400;
    }
    section {
      display: block;
    }
    .container_text {
      width: 100%;
      /* height: 80vh; */
      background: black;
      color: white;
      /* margin-top: 10%; */
      box-sizing: border-box;
      padding: 48px;
    }
    .hero-body,
    .container {
      margin-left: 39.6px;
      margin-right: 39.6px;
    }
    .columns.is-7 {
      flex: none;
      width: 58.3333%;
      padding: 0.75rem;
      display: block;
    }
    .favi-heading {
      display: block;
      color: #b5b5b5;
      font-size: 1.25rem;
      line-height: 1.25;
      text-transform: uppercase;
      box-sizing: inherit;
    }
    .favi-heading:not(last-child),
    .title:not(:last-child) {
      margin-bottom: 1.5rem;
    }
    h1,
    p,
    h3,
    ul,
    li,
    pre {
      margin: 0;
      padding: 0;
    }
    .title {
      /* color: #363636; */
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.125;
      box-sizing: inherit;
    }
    .is-2 {
      font-size: 2rem;
    }
    .favi-heading,
    .title {
      word-break: break-word;
    }
    .has-text-letter-spacing-wide {
      letter-spacing: 0.05em;
    }
    .generate-from-image {
      padding: 48px;
    }
    /* .columns :last-child {
      margin-bottom: -0.75rem;
    } */
    .columns {
      margin-left: -0.75rem;
      margin-right: -0.75rem;
      margin-top: -0.75rem;
    }
    .columns.is-8 {
      flex: none;
      width: 66.66667%;
    }
    .box {
      background-color: #fff;
      border-radius: 6px;
      box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
        0 0 0 1px rgb(10 10 10 / 2%);
      color: #4a4a4a;
      display: block;
      padding: 2rem;
      box-sizing: inherit;
    }
    .title.is-3 {
      font-size: 2rem;
      color: #363636;
      font-weight: 600;
    }
    .file-dropzone {
      position: relative;
      background-color: #fff;
      border-radius: 6px;
      display: block;
      height: 10rem;
      border: 1px solid #dbdbdb;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
    }
    .file-dropzone input {
      position: absolute;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      outline: none;
      opacity: 0;
    }
    input[type="file" i] {
      appearance: none;
      background-color: initial;
      cursor: default;
      text-overflow: ellipsis;
      white-space: pre;
      text-align: start !important;
      padding: initial;
      border: initial;
      overflow: hidden !important;
    }
    input {
      writing-mode: horizontal-tb !important;
    }
    .has-text-centered {
      text-align: center !important;
    }
    span {
      font-style: inherit;
      font-weight: inherit;
      /* box-sizing: inherit; */
    }
    .field.is-grouped {
      display: flex;
      justify-content: flex-start;
    }
    .field.is-grouped > .control:not(:last-child) {
      margin-bottom: 0;
      margin-right: 0.75rem;
    }
    .field.is-grouped > .control {
      flex-shrink: 0;
    }
    .control {
      box-sizing: border-box;
      clear: both;
      font-size: 1rem;
      position: relative;
      text-align: inherit;
    }
    .image {
      display: block;
      position: relative;
    }
    img {
      height: auto;
      max-width: 100%;
    }
    img {
      overflow-clip-margin: content-box;
    }
    .button {
      margin: 0;
    }
    .button.is-rounded {
      border-radius: 9999px;
      padding-left: 1.25em;
      padding-right: 1.25em;
    }
    .button.is-info {
      background-color: #3e8ed0;
      border-color: transparent;
      color: #fff;
    }
    .button {
      background-color: #fff;
      border-color: #dbdbdb;
      border-width: 1px;
      color: #363636;
      cursor: pointer;
      justify-content: center;
      padding: calc(0.5em -1px) 1em;
      text-align: center;
      white-space: nowrap;
    }
    .button {
      align-items: center;
      border: 1px solid transparent;
      border-radius: 4px;
      box-shadow: none;
      display: inline-flex;
      font-size: 1rem;
      height: 2.5em;
      /* justify-content: flex-start; */
      line-height: 1.5;
      /* padding: calc(0.5em - 1px) calc(0.75em - 1px); */
      position: relative;
      vertical-align: top;
      /* font-size: 1rem;
      line-height: 1.5; */
    }
    .button .icon:first-child:not(:last-child) {
      margin-left: calc(-0.5rm - 1px);
      margin-right: 0.25em;
    }
    .button .icon {
      height: 1.5em;
      width: 1.5em;
    }
    .icon {
      align-items: center;
      display: inline-flex;
    }
    /* span.icon {
      font-style: inherit;
      font-weight: inherit
    } */
    .svg-inline--fa,
    svg:not(:root),
    .svg-inline--fa {
      overflow: visble;
    }
    .svg-inline--fa.fa-w-16 {
      width: 1em;
    }
    .svg-inline--fa {
      display: inline-block;
      font-size: inherit;
      height: 1em;
      vertical-align: -0.125em;
    }
    svg:not(:root) {
      overflow-clip-margin: content-box;
    }
    @media screen and (min-width: 1024px) {
      .section {
        padding: 3rem;
      }
    }
    /* .section {
      padding: 3rem 1.5rem;
    } */
    .section {
      display: block;
    }
    .title.is-4 {
      font-size: 1.5rem;
    }
    .content h3 {
      color: #363636;
      font-weight: 600;
      line-height: 1.125;
    }
    .box.is-box {
      background-color: #fff;
      border-radius: 6px;
      padding: 1.24rem;
    }
    .title.is-4 {
      word-break: break-word;
    }
    .content p:not(:last-child),
    .content ul:not(:last-child),
    .content pre:not(:last-child) {
      margin-bottom: 1em;
    }
    .content ul {
      list-style: disc outside;
      margin-left: 2em;
      margin-top: 1em;
    }
    li {
      display: list-item;
      text-align: -webkit-match-parent;
    }
    .content li + li {
      margin-top: 0.25em;
    }
    ul li::marker {
      unicode-bidi: isolate;
      font-variant-numeric: tabular-nums;
      text-transform: none;
      text-indent: 0px !important;
      text-align: start !important;
      text-align-last: start !important;
    }
    code,
    hr {
      background-color: #f5f5f5;
    }
    code {
      color: #da1039;
      font-size: 0.875em;
      font-weight: 400;
      padding: 0.25em 0.5em;
    }
    code,
    pre {
      -webkit-font-smoothing: auto;
      font-family: monospace;
    }
    .content pre {
      -webkit-overflow-scrolling: touch;
      overflow-x: auto;
      padding: 1.25em 1.5em;
      white-space: pre;
      word-wrap: normal;
    }
    pre {
      background-color: #f5f5f5;
      color: #4a4a4a;
      font-size: 0.875em;
      overflow-x: auto;
      padding: 1.25em 1.5em;
      white-space: pre;
      word-wrap: normal;
      line-height: 1.5em;
    }
    pre code {
      background-color: transparent;
      color: currentColor;
      font-size: 1.25em;
      padding: 0;
    }
    .content h3:not(:first-child) {
      margin-top: 1.33333em;
    }
    .content h3 {
      font-size: 1.5em;
      margin-bottom: 0.6666em;
    }
  </style>