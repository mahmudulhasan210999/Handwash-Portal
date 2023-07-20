<template>
    <div class="w-full">
        <Header />
        <SchoolData />
        <!-- <Footer /> -->
    </div>
</template>

<script>
import SchoolData from '../../components/School-Data/School-Data.vue'
import Header from '../../components/Header/Header.vue'
// import Footer from '../../components/Footer/Footer.vue'

export default {
    components: {
        SchoolData,
        Header,
        // Footer
    }
}
</script>
