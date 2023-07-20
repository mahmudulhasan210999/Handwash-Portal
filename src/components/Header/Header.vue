<template>
    <div class="flex justify-between items-center px-6 bg-gray-500 py-4 mx-6 mt-6 rounded-md">
        <div class="">
            <p class="text-white">{{ dateTime() }}</p>
        </div>

        <!-- Buttons -->
        <div class="flex gap-4 text-white">
            <router-link to="/">
                <button>All</button>
                <!-- <button class="bg-primary2 hover:bg-action-edit rounded-full w-9 h-9"><i class="pi pi-pencil" style="font-size: 1rem; color: white;"></i></button> -->
            </router-link>

            <router-link to="/school-data">
                <button>School Data</button>
            </router-link>

            <router-link to="/overview">
                <button>Overview</button>
            </router-link>
        </div>

        <div class="bg-white w-8 h-7 rounded-md flex justify-center items-center cursor-pointer">
            <!-- <p @click="getLogout"><i class="pi pi-sign-out self-center text-green-700" style="font-size: 0.9rem"></i></p> -->
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
