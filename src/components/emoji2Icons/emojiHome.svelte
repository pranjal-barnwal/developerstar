<svelte:head>
    <link rel="icon" type="image/png" href="public\faviconlogo.png"/>
    <title>Favicon Generator - Emoji to Favicon - favicon.io</title>
</svelte:head>
<script>
    import {link, Link} from 'svelte-navigator';
    import Instruct from "./instruct.svelte";
    import HeadPara from "../tutorials/headPara.svelte";
    const str="Choose from hundreds of emojis to create your favicon. Emoji images from the Twemoji project.";
    import { emojiHouse } from './emojiStore';
    let selectedVal='Smileys & Emotion';
</script>
<main>
    <HeadPara str={str} title="FAVICON GENERATOR / GENERATE FROM EMOJI"/>
    <div class="container">
        <h1>Emoji Favicons</h1>
        <Instruct/>
        <div class="categories">
            <label for="categories">Categories</label>
            <select id="dropdwn" bind:value={selectedVal}>
                {#each (Object.keys(emojiHouse).sort()) as act}
                    <option>{act}</option>
                {/each}
            </select>
            <h1>{selectedVal}</h1>
        </div>
        <table class="elements">
            <thead>
                <tr>
                    <th>Preview</th>
                    <th>Name</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {#each emojiHouse[selectedVal] as indi}
                    <tr>
                        <td>
                            <img src={`https://twemoji.maxcdn.com/2/svg/${indi.codes.toLowerCase().replace(/\s+/g,'-')}.svg`} alt={`${indi.char}`} style="height: 64px;" 
                            onError="this.parentElement.parentElement.style.display='none';"/>
                        </td>
                        <td>
                            <!-- <Link to={`/emoji-favicons/${indi.name.replace(/\s+/g,'-')}/${indi.codes}`}>{indi.name[0].toUpperCase()+indi.name.slice(1)}</Link> -->
                            <a href={`/emoji-favicons/${indi.name.replace(/\s+/g,'-')}/${indi.codes}`} use:link>
                                {indi.name[0].toUpperCase()+indi.name.slice(1)}
                            </a>
                        </td>
                        <td>{selectedVal}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</main>
<style>
    .container{
        padding:1rem;
        width:56%;
        line-height:1.5;
        color:#4a4a4a;
        border:3px solid #f5f5f5;
        margin:3rem 5rem;
    }
    .categories, .elements{
        padding: 1rem 0;
    }
    #dropdwn{
        display:block;
        height:2.5rem;
        width:100%;
        font-size:1rem;
        padding:0.25rem;
        padding-right:100px;
        margin-Top:16px;
        cursor:pointer;
    }
    table{
        width:100%;
    }
    thead{
        vertical-align:middle;
        display: table-header-group;
    }
    tr{
        display:table-row;
        text-align:center;
        border-color: inherit;
    }
    table td, table th{
        border:solid #dbdbdb;
        border-width: 0 0 2px;
        padding:0.5rem 0.75rem;
        vertical-align: top;
        text-align: start;
    }
    @media(min-width:2200px) and (max-width:2700px){
        .container{
            max-width:1300px;
            margin:3rem 7%;
            font-size:1.5rem;
        }
        #dropdwn{
            height:60px;
            font-size:1.5rem;
        }
        .categories, .elements{
            padding: 1.5rem 0;
        }
    }
    @media (min-width:1700px) and (max-width:2200px){
        .container{
            max-width:1000px;
            margin:3rem 7%;
            font-size:1.25rem;
        }
        #dropdwn{
            font-size:1.25rem;
        }
        #dropdwn{
            height:50px;
        }
    }
    @media(max-width:950px){
        .container{
            width:70%;
            margin:3rem auto;
        }
    }
    @media(max-width:675px){
        .container{
            width:90%;
        }
    }
    @media(max-width:535px){
        .container{
            padding:0.75rem;
            margin:1rem auto;
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
