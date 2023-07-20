<template>
    <div class="flex justify-center">
        <div class="container">
            <div class="flex justify-between items-center px-6 bg-yellow-500 mt-0 lg:mt-6 py-4">
                <div class="">
                    <p class="text-white">{{ dateTime() }}</p>
                </div>

                <div class="bg-white w-8 h-7 flex justify-center items-center cursor-pointer">
                    <!-- <p @click="getLogout"><i class="pi pi-sign-out self-center text-green-700" style="font-size: 0.9rem"></i></p> -->
                </div>
            </div>

            <div class="flex justify-center">
                <!-- Buttons -->
                <div class="flex gap-4 py-4">
                    <router-link to="/">
                        <button class="hover:font-semibold">All</button>
                    </router-link>

                    <router-link to="/school-data">
                        <button class="hover:font-semibold">School Data</button>
                    </router-link>

                    <router-link to="/overview">
                        <button class="hover:font-semibold">Overview</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    methods: {
        dateTime() {
            return moment().format('dddd, MMMM Do YYYY')
        },

        // getLogout() {
        //     localStorage.removeItem('access_token')
        //     localStorage.removeItem('refresh_token')
        //     localStorage.removeItem('loggedIn')
        //     this.$router.push('/login')
        // }
    }
}
</script>
