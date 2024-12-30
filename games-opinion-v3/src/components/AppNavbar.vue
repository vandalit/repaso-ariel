<template>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/administracion">Administración</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
};
</script>

<style scoped>
nav {
    background-color: #333;
    padding: 10px;
}

ul {
    list-style: none;
    display: flex;
    gap: 10px;
}

li {
    color: white;
}
</style>