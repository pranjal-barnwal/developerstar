<script>
    export let str;
    export let title;
</script>

<main>
    <div class="header">
        <h1>{title}</h1>
        <p>{str}</p>
    </div>
</main>

<style>
    .header{
        background-color: black;
        color:white;
        font-size:1.5rem;
        padding: 2rem 5rem;
        box-sizing: border-box;
    }
    h1{
        color:#b5b5b5 !important;
        font-size:1.125rem;
    }
    p{
        width:50%;
        font-weight: bolder;
        line-height:1.125;
        font-size: 2rem;    
    }
    

    @media (min-width:2200px){
        .header p, .header h1{
            margin:1rem 5%;
            font-size:2rem;
        }
    }
    @media (min-width:1700px) and (max-width:2200px){
        .header p,.header h1{
            margin:1rem 5%;
            font-size:1.75rem;
        }
    }
    @media(max-width:950px){
    
        .header p,.header h1{
            width:70%;
            margin: 2rem auto;
        }
    }
    @media(max-width:800px){
        .header{
            padding:1rem 2.5rem;
        }
        .header p,.header h1{
            width:100%;
        }
    }
</style>