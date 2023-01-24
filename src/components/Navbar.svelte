<script>
    import {Router, link} from 'svelte-navigator';
</script>
<main>
    <Router>
        <nav>
            <div class="logo">
                <a href="/" use:link><img src='./logo.png' alt="#"/></a>
                <div class="hamBurger navBar">
                    <div class="slice"></div>
                    <div class="slice"></div>
                    <div class="slice"></div>
                </div>
            </div>
            <div class="navBar">
                <div class='navPills'>
                    <a href="/favicon-convertor" use:link>Convertor</a>
                    <a href="/favicon-generator" use:link>Generator</a>
                    <a href="/emoji-favicons" use:link>Emojis</a>
                    <a href="/tutorials" use:link>Tutorials</a>
                    <a href="/logo-generator" use:link>Logos</a>
                </div>
                <div class='promo'>
                    <a href="https://twitter.com/" class="white_button" style="margin-right: 10px;"><i class="icon fa-brands fa-twitter"/>Tweet</a>
                    <a href="https://www.buymeacoffee.com" class="white_button"><i class="icon fa fa-coffee"/>Buy me a coffee</a>    
                </div>
            </div>
        </nav>
    </Router>
</main>
<style>
    nav{
        display:flex;
        justify-content: flex-start;
        width:95%;
        height:5.5rem;
        margin: 0 auto;
        padding:1.25rem;
        align-items: center;
    }
    .logo img{
        height:2.75rem;
        padding:0.5rem;
    }
    .logo{
        display:flex;
        align-items:center;
        justify-content: space-between;
    }
    .navBar{
        display:flex;
        justify-content:space-between;
        align-items: center;
        flex:1;
    }
    .navPills{
        display:flex;
        justify-content: flex-start;
    }

    a{
        font-weight: 900;
        text-decoration:none;
        font-family: 'Source Sans Pro', sans-serif;
        color:#4A4A4A;
        margin: 0 .5rem;
        padding: .5rem .75rem;
        cursor:pointer;
        border-radius:.25rem;
    }
    a:hover{
        background-color: #f5f5f5;
        color:#485fc7;
    }
    .promo{
        display:flex;
        justify-content: flex-end;
    }
    .white_button{
        background: white;
        color: #363636;
        font-weight: bold;
        border: 1px solid lightgray;
        padding: .5rem .9375rem;
        margin:0;
        text-decoration: none;
        cursor: pointer;
    }
    .white_button:hover{
        border-color: slategray;
    } 
    .icon {
        margin-right: 0.3125rem;
    }
    .hamBurger{
        /* flex:1; */
        display:none;
        padding:12px;
        flex-direction: column;
    }
    .slice{
        border: 1px solid black;
        width: 20px;
        margin-bottom: 10px;
    }
    @media(min-width:1700px){
        nav{
            width:88%;
        }
    }
    @media(max-width:1023px){
        .navBar{
            display: none;
            flex:0;
        }
        .logo{
            flex:1;
        }
        .hamBurger{
            display:inline-flex;
            justify-content: flex-end;
        }
    }
</style>