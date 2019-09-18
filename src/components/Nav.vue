<template>
    <header id="Nav">
        <div class="logo">
            <h1 class="trade-mark">Portofolio</h1>
        </div>
        <nav>
            <li class="trade-mark">
                <a href="">home</a>
            </li>
            <li class="trade-mark">
                <a href="">Projects</a>
            </li>
            <li class="trade-mark">
                <a href="">contact</a>
            </li>
            <li class="trade-mark">
                <a href="">resume</a>
            </li>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style>
header#Nav{
    position: fixed;
    background: var(--main-color);
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}
header#Nav nav{
    display: flex;
    align-items: center;
}
header#Nav .logo h1{
    margin: 10px;
}
header#Nav nav li{
    list-style: none;
    margin: 10px 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    color: var(--second-color);
}


</style>