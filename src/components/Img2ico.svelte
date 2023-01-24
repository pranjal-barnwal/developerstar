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

  function copyCode() {
    let cpyTxt = `<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest">`;
    navigator.clipboard.writeText(cpyTxt);
  }
</script>

<!-- LINK FOR FONT -->
<link
  href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
  rel="stylesheet"
  type="text/css"
/>

<main>
  <section class="banner section">
    <div class="banner_div">
      <h2 class="banner_header">FAVICON GENERATOR / GENERATOR FROM TEXT</h2>
      <p class="banner_para">
        Quickly generate your favicon from an image by uploading your image
        below. Download your favicon in the most up to date formats.
      </p>
    </div>
  </section>

  <section class="generator section">
    <div class="box">
      <h2 class="generator_head">Converter</h2>
      <div class="flexbox_generator">
        <div class="control">
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
        </div>
        <div class="control preview-box">
          <!-- <p class="control" bind:this={container}>
              <canvas hidden id="canvas" bind:this={canvas} />
            </p> -->
          <label for="preview" class="label preview_text">Preview</label><canvas
            id="canvas"
            bind:this={canvas}
            width="128"
            height="128"
          />

          <button on:click={download} class="blue_button"
            ><i class="icon fa-solid fa-download" />Download</button
          >
        </div>
      </div>
    </div>
  </section>

  <hr />

  <section class="install section">
    <div class="box">
      <h2 class="generator_head">Installation</h2>
      <div class="install_para">
        First, use the download button to download the files listed below. Place
        the files in the root directory of your website.

        <ul class="install_list">
          <li>android-chrome-192x192.png</li>
          <li>android-chrome-512x512.png</li>
          <li>apple-touch-icon.png</li>
          <li>favicon-16x16.png</li>
          <li>favicon-32x32.png</li>
          <li>favicon.ico</li>
          <li>site.webmanifest</li>
        </ul>
        Next, copy the following link tags and paste them into the head of your HTML.
        <pre class="html_codes">&lt;link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" &gt;

&lt;link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" &gt;

&lt;link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" &gt;

&lt;link rel="manifest" href="/site.webmanifest" &gt;

</pre>
        <div class="copy_html_btn">
          <a class="blue_button" on:click={copyCode}
            ><i class="icon fa-regular fa-clipboard" />Copy</a
          >
        </div>
      </div>
    </div>
  </section>

  <!-- last section -->

  <section class="faq section">
    <div class="box">
      <h3 class="faq_head">About the favicon generator</h3>
      <p class="faq_para">
        If you already have an image that you would like to use for a favicon on
        your website the this is the tool you need. The favicon generator will
        convert you image to a favicon. You can upload a PNG, JPG, or BMP and
        the favicon generator will output an ICO file.
      </p>
      <p class="faq_para">
        For the best result you should upload an square image. You can use a
        standard image editing tool if you need to crop your image. Once your
        image is prepared upload it using the tool above. Next, verify that the
        preview image is to your liking. Finally, use the download button to
        export your favicon in ICO format.
      </p>

      <h3 class="faq_head">Why do I need an ICO file instead of a PNG?</h3>
      <p class="faq_para">
        An ICO file is a special image file use by the browser. The unique
        feature of an ICO file is that it is multilayered. Each layer of the
        favicon holds a different size of the image. The common sizes for a ICO
        formatted favicon are 16x16px, 32x32px, and 48x48px.
      </p>

      <p class="faq_para">
        For best compatibility web browsers can leverage the ICO file generated
        by the favicon generator. The browsers will use the different sizes for
        displaying in different areas of the website such as the bookmarks bar,
        the address bar, the browser tab, and as a desktop shortcut.
      </p>

      <h3 class="faq_head">
        What types of images work best for the favicon generator?
      </h3>
      <p class="faq_para">
        The favicon generator works best with a simple icon, logo, or letter.
        Intricate or complex designs don't work well when they are resized using
        the favicon generator as much detail is lost. If your logo is very
        complex we recommend generating the favicon from text using the
        alternative generator.
      </p>
    </div>
  </section>
</main>

<style>
  #canvas {
    width: 64px;
    height: 64px;
    border: 1px solid red;
  }
  .section {
    padding: 3% 10%;
  }
  .banner {
    padding-top: 90px;
    padding-bottom: 90px;
    background: black;
    color: #fff;
  }
  .banner_header {
    color: #b5b5b5;
    /* letter-spacing: .001rem; */
    letter-spacing: -0.07ch;
    font-weight: bold;
    font-size: 1.3rem;
  }
  .banner_para {
    padding-top: 30px;
    font-size: 1.9rem;
    font-weight: bold;
    max-width: 60%;
    line-height: 130%;
  }
  /* .flexed {
    display: flex;
    align-items: center;
    justify-content: center;
  } */
  /* .preview {
    padding: 2% 10%;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
  } */

  .preview_text {
    font-weight: bold;
    color: #363636;
    margin-right: 8px;
  }
  /* .preview_img {
    margin-left: 10px;
  }
  .preview_img1 {
    width: 48px;
  }
  .preview_img2 {
    width: 32px;
  }
  .preview_img3 {
    width: 16px;
  } */
  .icon {
    margin-right: 5px;
  }
  /* .white_button {
    background: white;
    color: #363636;
    font-weight: bold;
    border: 1px solid lightgray;
    border-radius: 6px;
    padding: 8px 15px;
    text-decoration: none;
    margin-right: 10px;
    cursor: pointer;
  } */
  .blue_button {
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
    padding: 9px 15px;
    border-radius: 6px;
    background: #3188be;
    color: white;
  }
  .blue_button:hover {
    background: #3488ce;
  }
  .box {
    border-radius: 12px;
    padding: 20px 40px;
    padding-bottom: 70px;
    /* border: 1px solid slategray; */
    box-shadow: 2px 12px 50px rgba(145, 147, 148, 0.219);
  }
  .generator_head {
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 1.8rem;
    font-weight: bold;
    color: #363636;
  }
  .flexbox_generator {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .control {
    /* border: 1px solid gray; */
    width: 90%;
  }
  /* .control label {
    display: block;
    margin-top: 20px;
    margin-bottom: 3px;
    font-size: 16px;
    color: rgb(81, 95, 108);
  } */
  /* .control input {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    border: 2px solid rgb(206, 206, 206);
  } */
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
  /* .control input[type="text"],
  .control input[type="number"],
  .control select {
    padding-left: 10px;
  } */
  .preview-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .preview-box label {
    display: inline-block;
  }
  .preview-box button {
    margin-top: 25px;
  }
  #canvas {
    margin-top: 20px;
    border: none;
    box-shadow: 1px 2px 10px gray;
  }

  .install .box {
    max-width: 65%;
    color: #4a4a4a;
    font-size: 0.95rem;
  }
  button {
    cursor: pointer;
    outline: none;
    border: none;
    transition: all 0.3s;
  }
  .install_list {
    margin: 10px 20px;
    line-height: 1.9rem;
  }
  .html_codes {
    margin: 20px;
    background: #ededed;
    border-radius: 12px;
    padding: 30px 15px;
  }
  .install .blue_button {
    display: inline-block;
    margin-bottom: 10px;
  }
  .faq .box {
    max-width: 65%;
    color: #4a4a4a;
    font-size: 0.95rem;
    padding-bottom: 30px;
  }
  .faq_head {
    padding-top: 32px;
    padding-bottom: 8px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #4a4a4a;
  }
  .faq_para {
    font-size: 0.9rem;
    color: #5a5a5a;
    letter-spacing: 0.012rem;
  }
  /* .faq_link {
    text-decoration: none;
    color: #485fc7;
  } */
  /* .faq_link:hover {
    color: #001b92;
  } */
  @media screen and (max-width: 700px) {
    .banner_para {
      max-width: 100%;
    }
    .generator_head {
      font-size: 1.4rem;
    }
    .flexbox_generator {
      flex-direction: column;
    }
    .control {
      width: 100%;
    }
    .file-dropzone {
      flex-direction: row;
    }
    /* .preview {
      display: flex;
      flex-direction: column;
      justify-content: center;
    } */
    /* .flexed {
      margin-top: 30px;
      margin-bottom: 20px;
    } */
    .faq .box,
    .install .box {
      max-width: 100%;
    }
    .blue_button {
      display: inline-block;
    }
    .copy_html_btn {
      display: flex;
      justify-content: center;
    }
  }
  .html_codes {
    white-space: pre-wrap;
    /* css-3 */
    white-space: -moz-pre-wrap;
    /* Mozilla, since 1999 */
    white-space: -pre-wrap;
    /* Opera 4-6 */
    white-space: -o-pre-wrap;
    /* Opera 7 */
    word-wrap: break-word;
  }
</style>
