<template>
    <header id="Nav">
        <div class="logo">
            <h1>Portofolio</h1>
        </div>
        <nav>
            <li>
                <a href="">home</a>
            </li>
            <li>
                <a href="">Projects</a>
            </li>
            <li>
                <a href="">contact</a>
            </li>
            <li>
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
    position: relative;
    border-bottom: var(--second-color) solid 2px;
    background: var(--main-color);
}
header#Nav nav li{
    list-style: none;
    margin: 10px 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    color: var(--second-color);
    border-bottom: 1px solid var(--second-color);
    position: relative;
    background: var(--main-color);
}
header#Nav nav li::after,
header#Nav .logo h1::after{
    content:'';
    background: var(--second-color);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translate(-50%,0);
    z-index: -1;
}

</style>