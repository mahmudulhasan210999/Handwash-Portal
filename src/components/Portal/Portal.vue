<template>
    <div class="flex justify-center">
        <div class="container">
            <div class="flex flex-col justify-center items-center px-4 lg:px-0">
                <!-- FIlter -->
                <div class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pb-10">
                    <div class="flex flex-col w-full text-left font-semibold">
                        <p class="py-2 text-gray-500">Primary School</p>
                        <Dropdown v-model="selectedCity" :options="primarySchool" optionLabel="name" placeholder="Select" class="w-full" />
                    </div>

                    <div class="flex flex-col w-full text-left font-semibold">
                        <p class="py-2 text-gray-500">Secondary School</p>
                        <Dropdown v-model="selectedCity" :options="secondarySchool" optionLabel="name" placeholder="Select" class="w-full" />
                    </div>

                    <div class="flex flex-col w-full text-left font-semibold">
                        <p class="py-2 text-gray-500">Gender</p>
                        <Dropdown v-model="selectedCity" :options="gender" optionLabel="title" placeholder="Select" class="w-full" />
                    </div>

                    <div class="flex flex-col w-full text-left font-semibold">
                        <p class="py-2 text-gray-500">Date</p>
                        <Calendar v-model="date" showIcon />
                    </div>
                    <div class="flex items-end">
                        <Button class="w-full" label="Filter" severity="warning"  />
                    </div>

                </div>
                
                <!-- Data Section -->
                <div class="w-full flex flex-col">  
                    <div class="flex flex-col md:flex-row gap-5">
                        <div class="w-full md:w-1/3 flex flex-col">
                            <p class="p-2 font-semibold bg-yellow-500 text-white">Wash (Total) - 100</p>
                            <div class="flex w-full">
                                <div class="w-1/2 p-5 bg-yellow-200">
                                    <p class="text-2xl font-semibold">345</p>
                                    <p class="text-xs">Primary</p>
                                </div>
                                <div class="w-1/2 p-5 bg-yellow-300">
                                    <p class="text-2xl font-semibold">302</p>
                                    <p class="text-xs">Secondary</p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-1/3 flex flex-col">
                            <p class="p-2 font-semibold bg-sky-500 text-white">Wash (Daily) - 100</p>
                            <div class="flex w-full">
                                <div class="w-1/2 p-5 bg-sky-200">
                                    <p class="text-2xl font-semibold">300</p>
                                    <p class="text-sm">Primary</p>
                                </div>
                                <div class="w-1/2 p-5 bg-sky-300">
                                    <p class="text-2xl font-semibold">265</p>
                                    <p class="text-sm">Secondary</p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-1/3 flex flex-col">
                            <p class="p-2 font-semibold bg-green-500 text-white">Wash W/D (30%)</p>
                            <div class="flex w-full">
                                <div class="w-1/2 p-5 bg-green-200">
                                    <p class="text-2xl font-semibold">350 <i class="pi pi-sort-alt" style="font-size: 1.2rem"></i></p>
                                    <p class="text-sm">Primary (32%)</p>
                                </div>
                                <div class="w-1/2 p-5 bg-green-300">
                                    <p class="text-2xl font-semibold">325 <i class="pi pi-sort-alt" style="font-size: 1.2rem"></i></p>
                                    <p class="text-sm">Secondary (65%)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pt-5 flex flex-col md:flex-row gap-5">
                        <div class="w-full md:w-1/3 flex flex-col">
                            <p class="p-2 font-semibold bg-rose-500 text-white">No. of School - 1000</p>
                            <div class="flex w-full">
                                <div class="w-1/2 p-5 bg-rose-200">
                                    <p class="text-2xl font-semibold">345</p>
                                    <p class="text-sm">Primary</p>
                                </div>
                                <div class="w-1/2 p-5 bg-rose-300">
                                    <p class="text-2xl font-semibold">245</p>
                                    <p class="text-sm">Secondary</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 flex flex-col">
                            <p class="p-2 font-semibold bg-green-500 text-white">No. of School - 1000</p>
                            <div class="flex w-full">
                                <div class="w-1/2">
                                    <p class="bg-yellow-500 text-white text-sm">Primary</p>
                                    <div class="w-full flex">
                                        <div class="w-1/2 p-3 bg-yellow-200">
                                            <p class="text-xl font-semibold">345</p>
                                            <p class="text-sm">Primary</p>
                                        </div>
                                        <div class="w-1/2 p-3 bg-yellow-300">
                                            <p class="text-xl font-semibold">345</p>
                                            <p class="text-sm">Secondary</p>
                                        </div>
                                    </div>
                                </div>  
                                <div class="w-1/2">
                                    <p class="bg-sky-500 text-white text-sm">Secondary</p>
                                    <div class="w-full flex">   
                                        <div class="w-1/2 p-3 bg-sky-200">
                                            <p class="text-xl font-semibold">295</p>
                                            <p class="text-sm">Primary</p>
                                        </div>
                                        <div class="w-1/2 p-3 bg-sky-300">
                                            <p class="text-xl font-semibold">305</p>
                                            <p class="text-sm">Secondary</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 flex flex-col">
                            <p class="p-2 font-semibold bg-orange-500 text-white">Life Impact</p>
                            <div class="flex w-full">
                                <div class="w-full p-7 bg-orange-300">
                                    <p class="text-2xl font-semibold">345</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Primary School Section -->
                <div class="w-full flex flex-col py-10">
                    <p class="text-3xl font-semibold p-3 text-gray-600">Primary School</p>
                    <div class="w-full flex flex-col md:flex-row items-center justify-center gap-5">
                        <div class="w-full md:w-1/3 p-5">
                            <Chart type="pie" :data="chartData1" :options="chartOptions" class="w-full md:w-30rem" />
                        </div>
                        <div class="w-full md:w-2/3">
                            <Chart type="bar" :data="chartData2" :options="chartOptions" class="h-30rem" />
                        </div>
                    </div>
                </div>

                <!-- Secondary School Section -->
                <div class="w-full flex flex-col pb-10">
                    <p class="text-3xl font-semibold p-3 text-gray-600">Secondary School</p>
                    <div class="w-full flex flex-col md:flex-row items-center justify-center gap-5">
                        <div class="w-full md:w-1/3 p-5">
                            <Chart type="pie" :data="chartData3" :options="chartOptions" class="w-full md:w-30rem" />
                        </div>
                        <div class="w-full md:w-2/3">
                            <Chart type="bar" :data="chartData4" :options="chartOptions" class="h-30rem" />
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </div>
</template>

<script>
import Chart from 'primevue/chart';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import Button from 'primevue/button';
import 'primeicons/primeicons.css';
export default {
    data(){
        return{
            chartData1:{
                labels: ['Male', 'Female'],
                datasets: [
                    {
                        data: [540, 325],
                    }
                ]
            },

            chartData2:{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Male',
                    data: [50, 25, 12, 48, 90, 76, 42]
                },
                {
                    type: 'bar',
                    label: 'Female',
                    data: [21, 84, 24, 75, 37, 65, 34]
                },
            ]
            },

            chartData3:{
                labels: ['Male', 'Female'],
                datasets: [
                    {
                        data: [420, 325],
                    }
                ]
            },

            chartData4:{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Male',
                    data: [75, 68, 55, 28, 77, 76, 88]
                },
                {
                    type: 'bar',
                    label: 'Female',
                    data: [21, 55, 24, 75, 65, 65, 74]
                },
            ]
            },

            primarySchool:([
                { name: 'Abdul Kalam Govt Primary School'},
                { name: 'Kalam Govt Primary School'},
                { name: 'Akram Ali Govt Primary School'},
                { name: 'Maijdi Govt Primary School'},
                { name: 'Chowmohoni Govt Primary School'}
            ]),

            secondarySchool:([
            { name: 'Abdul Kalam Govt Seconsdary School'},
                { name: 'Kalam Govt Seconsdary School'},
                { name: 'Akram Ali Govt Seconsdary School'},
                { name: 'Maijdi Govt Seconsdary School'},
                { name: 'Chowmohoni Govt Seconsdary School'}
            ]),

            gender:([
                { title: 'Male'},
                { title: 'Female'},
            ])
        }
    },
    components: {
        Chart,
        Dropdown,
        Calendar,
        Button
    },
}
</script>   

<style>
</style>
