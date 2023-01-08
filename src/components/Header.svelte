<script>
    import Logo from "../logo.png"
</script>

<main>
    <nav class="navbar">

        <!-- LOGO -->
        <a href="/" aria-current="page" class="logo">
            <img src={Logo} alt="Logo" width="166" height="28">
        </a>

        <!-- NAVIGATION MENU -->
        <ul class="nav-links">

        <!-- USING CHECKBOX HACK -->
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">&#9776;</label>

        <!-- NAVIGATION MENUS -->
        <div class="menu">
        
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Tutorials</a></li>
        <li><a href="/">Emojis</a></li>
        <li><a href="/">Logos</a></li>
        <li><a href="/">Contact</a></li>
        
        </div>
        
        </ul>

        </nav>
</main>


<style>

a{
    text-decoration: none;
}

li {
    list-style: none;
}

.navbar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    position: sticky;
    background-color: white;
    color: black;
    border-bottom: 0.1px solid rgb(177, 174, 174);
}

.nav-links a{
    color: black;
    font-weight: 900;
}

.menu{
    display: flex;
    gap: 1em;
    font-size: 18px;
}

.menu li:hover{
    background-color: whitesmoke;
    border-radius: 50%;
    transition: 0.3s ease;
}

.menu a:hover{
    color: rgb(32,156,238)
}



.menu li{
    padding: 5px 14px;
}


input[type=checkbox]{

display: none;

} 
.hamburger {

display: none;
font-size: 24px;
user-select: none;

}


@media (max-width: 850px) {

.menu { 
display:none;
position: absolute;
background-color: rgba(82, 82, 82, 0.158);
color: black;
right: 0;
left: 0;
top: 4em;
text-align: center;
padding: 16px 0;
}

.menu li:hover {
display: inline-block;
background-color:whitesmoke;
transition: 0.3s ease;
}

.menu li + li {
margin-top: 12px;
}

input[type=checkbox]:checked ~ .menu{
display: block;
}

.hamburger {
display: block;
}
}

</style>
