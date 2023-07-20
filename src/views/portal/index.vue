<template>
    <div class="w-full">
        <Header />
        <Portal />
        <Footer />
    </div>
</template>

<script>
import Portal from '../../components/Portal/Portal.vue'
import Header from '../../components/Header/Header.vue'
// import Footer from '../../components/Footer/Footer.vue'

export default {
    components: {
        Portal,
        Header,
        // Footer
    }
}
</script>
