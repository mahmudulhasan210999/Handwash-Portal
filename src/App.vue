<template>
    <div>
        <router-view></router-view>
        <!-- <HelloWorld /> -->
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    components: {
        HelloWorld
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
}
</style>
