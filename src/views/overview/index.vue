<template>
    <div class="w-full">
        <Header />
        <Overview />
        <!-- <Footer /> -->
    </div>
</template>

<script>
import Overview from '../../components/Overview/Overview.vue'
import Header from '../../components/Header/Header.vue'
// import Footer from '../../components/Footer/Footer.vue'

export default {
    components: {
        Overview,
        Header,
        // Footer
    }
}
</script>
