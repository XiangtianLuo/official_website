<template>
    <div id="container">
        <router-view />
    </div>
</template>
<script>
export default {
    name: 'PageView'
}
</script>
<style scoped>
#container {
    flex: 1 1 auto;
    background: url('../assets/img/mainBackground.jpg') no-repeat;
    background-size: cover;
    background-position: center center;
}
</style>