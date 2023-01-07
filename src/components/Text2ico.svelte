<script>
  import { getContext } from "svelte";
  import FaviconJS from "../favicon.js//favicon.mjs";
  let canvas;
  let input;
  let input_font;
  let input_color;
  let input_text_size;
  let input_text_font = 'Rockwell';
  // let dropdown_fontselect;
  let fonts_family = [
    { id: 1, text: `Arial` },
    { id: 2, text: `Brush Script MT` },
    { id: 21, text: `Calibri` },
    { id: 22, text: `Consolas` },
    { id: 3, text: `Garamond` },
    { id: 4, text: `Georgia` },
    { id: 41, text: `Impact` },
    { id: 411, text: `Poppins` },
    { id: 42, text: `Rockwell` },
    { id: 43, text: `Source Sans Pro` },
    { id: 5, text: `Tahoma` },
    { id: 6, text: `Trebuchet MS` },
    { id: 7, text: `Times New Roman` },
    { id: 8, text: `Verdana` },
  ];
  
  let selected;
  let backgroundShape = [
    { id: 0, text: `Rectangle` },
    { id: 1000, text: `Circle` },
    { id: 20, text: `Rounded` },
  ];
  let select_backgroundShape;

  // change_backgroundcolor
  function backgroundColorchange() {
    let colorChange = input_color.value;
    return (document.getElementById("canvas").style.backgroundColor =
      colorChange);
  }

  // change_font_color
  function fontColorchange() {
    let fontcolorChange = input_font.value;
    return (document.getElementById("canvas").style.backgroundColor =
      fontcolorChange);
  }

  // change background shape
  function shapeChange() {
    let inputBorderVal = select_backgroundShape.text;
    // console.log(select_backgroundShape);
    if (inputBorderVal == "Rectangle") inputBorderVal = "0px";
    if (inputBorderVal == "Circle") inputBorderVal = "1000px";
    if (inputBorderVal == "Rounded") inputBorderVal = "1000px";
    return (document.getElementById(
      "canvas"
    ).style.borderRadius = `${inputBorderVal}`);
  }

  // change font size & family in the text
  function fontChange() {
    let fontchangesize = input_text_size.value;
    let fontfamilychange = `${fontchangesize}px ${input_text_font}`;
    // console.log("FontChangeFamily: ",fontfamilychange);
    return (document.getElementById("canvas").style.font = fontfamilychange);
  }

  function convert() {
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    // const input = document.getElementById("input");
    // const canvas = document.getElementById("canvas");
    // const image = document.getElementById("image");
    const image = new Image(canvas.width, canvas.height);
    ctx.fillStyle = backgroundColorchange();
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = "#d85537";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    console.log(canvas.width, canvas.height);
    let inputBorderVal = select_backgroundShape.text;
    if (inputBorderVal == "Rectangle") {
      ctx.beginPath();
      ctx.roundRect(0, 0, 128, 128, 0);
      ctx.stroke();
    }
    if (inputBorderVal == "Circle") {
      ctx.beginPath();
      ctx.roundRect(0, 0, 128, 128, 10000);
      ctx.stroke();
    }
    if (inputBorderVal == "Rounded") {
      ctx.beginPath();
      ctx.roundRect(0, 0, 128, 128, 30);
      ctx.stroke();
    }
    ctx.fill();

    ctx.font = fontChange();
    ctx.fillStyle = fontColorchange();
    // ctx.borderRadius = shapeChange();
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    console.log("Font: " + ctx.font);
    // console.log("BorderRadius: "+ctx.borderRadius);

    const x = canvas.width / 2;
    const y = canvas.height / 2;
    ctx.fillText(input.value, x, y);

    let dataURL = canvas.toDataURL();
    console.log(dataURL);
    image.src = dataURL;
    // alert(`(${selected.text})`)
    // alert(`${select_backgroundShape.background_shape}`)
    //  console.log(`${select_backgroundShape.background_shape}`);
  }

  // DOWNLOAD THE FAVICON IN ico
  function download() {
    // if(canvas == null) return;
    console.log("Canvas not null");
    const image = canvas.toDataURL();
    const favicon = new FaviconJS(canvas);
    const dataurl = favicon.ico([16, 32, 48]);
    // const bundle = favicon.bundle();
    const link = document.createElement("a");
    link.href = dataurl;
    link.download = "favicon.ico";
    link.click();
  }
  // DOWNLOAD THE FAVICON IN PNG
  // function download() {
  //   const image = canvas.toDataURL();
  //   const favicon = new FaviconJS(canvas);
  // const dataurl = favicon.png(32);
  // // const bundle = favicon.bundle();
  // const link = document.createElement("a");
  // link.href = dataurl;
  // link.download = 'favicon.png';
  // link.click();
  // }

  function copyCode() {
    let cpyTxt = `<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">`;
    navigator.clipboard.writeText(cpyTxt);
  }

  document.addEventListener('readystatechange', () => {    
    if (document.readyState == 'complete') convert();
  });
  
</script>

<main>
  <section class="banner section">
    <div class="banner_div">
      <h2 class="banner_header">FAVICON GENERATOR / GENERATE FROM TEXT</h2>
      <p class="banner_para">
        Quickly generate your favicon from text by selecting the text, fonts,
        and colors. Download your favicon in the most up to date formats.
      </p>
    </div>
  </section>

  <section class="preview section">
    <div class="previewing flexed">
      <span class="preview_text">Sample</span>
      <img
        src="/favicon.ico"
        alt="Preview1 for favicon"
        class="preview_img preview_img1"
      />
      <img
        src="/favicon.ico"
        alt="Preview2 for favicon"
        class="preview_img preview_img2"
      />
      <img
        src="/favicon.ico"
        alt="Preview3 for favicon"
        class="preview_img preview_img3"
      />
    </div>
    <div class="buttons flexed">
      <a href="https://twitter.com/" class="white_button"
        ><i class="icon fa-brands fa-twitter" /> Twitter</a
      >
      <button on:click={download} class="blue_button"
        ><i class="icon fa-solid fa-download" /> Download</button
      >
    </div>
  </section>

  <section class="generator section" on:load={convert}>
    <div class="box">
      <h2 class="generator_head">Generate From Text</h2>

      <div class="flexbox_generator">
        <div class="control">
          <label for="input" class="label preview_text">Text</label>
          <input
            bind:this={input}
            placeholder="Enter your text"
            type="text"
            id="input"
            on:change={convert}
            value="i"
          />

          <label for="color" class="label preview_text">Background Color</label>
          <input
            bind:this={input_color}
            type="color"
            id="color"
            value="#04aa6b"
            on:change={convert}
          />

          <label for="fontcolor" class="label preview_text">Font Color</label>
          <input
            bind:this={input_font}
            type="color"
            id="fontcolor"
            value="#454545"
            on:change={convert}
          />
        </div>

        <div class="control">
          <label for="background" class="label preview_text"
            >Background Shape</label
          >
          <select bind:value={select_backgroundShape} on:change={convert}>
            {#each backgroundShape as shape}
              <option value={shape}>
                {shape.text}
              </option>
            {/each}
          </select>
          <label for="textSize" class="label preview_text"
            >Enter Font Size</label
          >
          <input
            id="textSize"
            type="number"
            bind:this={input_text_size}
            placeholder="Recommended size b/w 44 & 76"
            value="72"
            on:change={convert}
          />

          <label for="font-family" class="label preview_text">
            Font Family</label
          >
          <select
            id="font-family"
            bind:value={input_text_font}
            on:change={convert}
          >
            {#each fonts_family as font_family}
              <option value={font_family.text}>
                {font_family.text}
              </option>
            {/each}
          </select>
        </div>

        <div class="control preview-box">
          <label for="preview" class="label preview_text">Preview</label>
          <canvas id="canvas" bind:this={canvas} width="128" height="128" />
          <button hidden id="convertBtn" on:change={convert}>Convert</button>
          <button on:click={download} class="blue_button"
            ><i class="icon fa-solid fa-download" /> Download</button
          >
        </div>
      </div>
    </div>
  </section>

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

        Next, copy the following link tags and paste them into the head of your
        HTML.

        <pre class="html_codes">
  &lt;link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"&gt;
  &lt;link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"&gt;
  &lt;link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"&gt;
  &lt;link rel="manifest" href="/site.webmanifest"&gt;
  </pre>
        <a class="blue_button" on:click={copyCode} ><i class="icon fa-regular fa-clipboard"/> Copy</a
        >
      </div>
    </div>
  </section>

  <section class="faq section">
    <div class="box">
      <h3 class="faq_head">Why favicon.io?</h3>
      <p class="faq_para">
        Whether you want to generate a favicon from text, from an existing
        image, or from an emoji we've got you covered. The favicon generator is
        completely free and extremely easy to use. The generated favicon will
        work for all browsers and multiple platforms.
      </p>

      <h3 class="faq_head">Getting started with the favicon generator</h3>
      <p class="faq_para">
        The tool above will allow you to generate a favicon from text. Start by
        choosing one to two letters for the favicon generator. Since the favicon
        generator outputs very small images it's important to use few characters
        for maximum legibility. Once cool feature with this favicon generator is
        that you can copy and paste both unicode characters and emojis into the
        text box. This is useful for when an emoji isn't listed on the emoji
        favicon page. <a href="https://www.google.com" class="faq_link"
          >Here's an example keeping it 💯</a
        >
      </p>

      <h3 class="faq_head">Making the background simple</h3>
      <p class="faq_para">
        Next, select the shape of the background. There are three simple shapes
        available: square, circle, and rounded. These are the most common shapes
        used to generate a favicon. You can see examples of these shapes with <a
          href="https://www.google.com"
          class="faq_link">ProductHunt</a
        >, <a href="https://www.google.com" class="faq_link">IndieHackers</a>,
        and <a href="https://www.google.com" class="faq_link">HackerNews</a>.
      </p>

      <h3 class="faq_head">Selecting the font for your favicon</h3>
      <p class="faq_para">
        The favicon generator uses <a
          href="https://www.google.com"
          class="faq_link">Google Fonts</a
        > which has 800+ fonts available. This is useful to match the font used on
        your own website. In the future there will be a dedicated font page to help
        you select your font. It will have filters for languages, styles, and commonly
        used fonts. You can edit the font size once you've selected your font. Try
        to take up as much space as possible.
      </p>

      <h3 class="faq_head">Tailoring the colors</h3>
      <p class="faq_para">
        The last step is to select the colors. If you have the HEX values of the
        colors you want then you can just enter them into the input box.
        Otherwise you can use some of the colors that we suggest using the color
        picker below each input box. One cool feature is that you can use
        transparent backgrounds. Simply type "transparent" into the background
        color box. <a href="https://www.google.com" class="faq_link"
          >Here's an example of a favicon generated with a transparent
          background.</a
        >
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

  .flexed {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .preview {
    padding: 2% 10%;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .preview_text {
    font-weight: bold;
    color: #363636;
    margin-right: 8px;
  }

  .preview_img {
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
  }

  .icon {
    margin-right: 5px;
  }
  .white_button {
    background: white;
    color: #363636;
    font-weight: bold;
    border: 1px solid lightgray;
    border-radius: 6px;
    padding: 8px 15px;
    text-decoration: none;
    margin-right: 10px;
    cursor: pointer;
  }
  .white_button:hover {
    border-color: slategray;
  }

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
    width: 30%;
  }

  .control label {
    display: block;
    margin-top: 20px;
    margin-bottom: 3px;
    font-size: 16px;
    color: rgb(81, 95, 108);
  }

  .control input,
  .control select {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    border: 2px solid rgb(206, 206, 206);
    /* outline: none; */
  }
  .control input[type="text"],
  .control input[type="number"],
  .control select {
    padding-left: 10px;
  }

  .preview-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
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
    /* overflow: hidden; */
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
  .buttons button:hover {
    opacity: 0.9;
  }

  .install_list {
    margin: 10px 20px;
    line-height: 1.9rem;
  }

  .html_codes {
    margin-top: 10px;
    margin-bottom: 20px;
    background: #ededed;
    border-radius: 12px;
    padding: 15px;
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
    font-size: 0.93rem;
    color: #4a4a4a;
  }

  .faq_link {
    text-decoration: none;
    color: #485fc7;
  }
  .faq_link:hover {
    color: #001b92;
  }
</style>
