<template>
    <div class="flex justify-center">
        <div class="container">
            <div class="flex flex-col justify-center items-center px-4 lg:px-0">
                <!-- Data Section -->
                <div class="w-full flex flex-col">  
                    <div class="flex flex-col md:flex-row gap-5">
                        <div class="w-full md:w-1/3 flex flex-col">
                            <p class="p-2 font-semibold bg-yellow-500 text-white">Wash(Total) - 100</p>
                            <div class="flex w-full">
                                <div class="w-1/2 p-5 bg-yellow-200">
                                    <p class="text-2xl font-semibold">345</p>
                                    <p class="text-sm">Primary</p>
                                </div>
                                <div class="w-1/2 p-5 bg-yellow-300">
                                    <p class="text-2xl font-semibold">345</p>
                                    <p class="text-sm">Primary</p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-1/3 flex flex-col">
                            <p class="p-2 font-semibold bg-sky-500 text-white">Wash(Total) - 100</p>
                            <div class="flex w-full">
                                <div class="w-1/2 p-5 bg-sky-200">
                                    <p class="text-2xl font-semibold">345</p>
                                    <p class="text-sm">Primary</p>
                                </div>
                                <div class="w-1/2 p-5 bg-sky-300">
                                    <p class="text-2xl font-semibold">345</p>
                                    <p class="text-sm">Primary</p>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-1/3 flex flex-col">
                            <p class="p-2 font-semibold bg-green-500 text-white">Wash(Total) - 100</p>
                            <div class="flex w-full">
                                <div class="w-1/2 p-5 bg-green-200">
                                    <p class="text-2xl font-semibold">345</p>
                                    <p class="text-sm">Primary</p>
                                </div>
                                <div class="w-1/2 p-5 bg-green-300">
                                    <p class="text-2xl font-semibold">345</p>
                                    <p class="text-sm">Primary</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pt-5 flex flex-col md:flex-row gap-5">
                        <div class="w-full md:w-1/3 flex flex-col">
                            <p class="p-2 font-semibold bg-rose-500 text-white">Wash(Total) - 100</p>
                            <div class="flex w-full">
                                <div class="w-1/2 p-5 bg-rose-200">
                                    <p class="text-2xl font-semibold">345</p>
                                    <p class="text-sm">Primary</p>
                                </div>
                                <div class="w-1/2 p-5 bg-rose-300">
                                    <p class="text-2xl font-semibold">345</p>
                                    <p class="text-sm">Primary</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 flex flex-col">
                            <p class="p-2 font-semibold bg-green-500 text-white">No. of Schoole - 1000</p>
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
                                            <p class="text-sm">Primary</p>
                                        </div>
                                    </div>
                                </div>  
                                <div class="w-1/2">
                                    <p class="bg-sky-500 text-white text-sm">Secondary</p>
                                    <div class="w-full flex">
                                        <div class="w-1/2 p-3 bg-sky-200">
                                            <p class="text-xl font-semibold">345</p>
                                            <p class="text-sm">Primary</p>
                                        </div>
                                        <div class="w-1/2 p-3 bg-sky-300">
                                            <p class="text-xl font-semibold">345</p>
                                            <p class="text-sm">Primary</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 flex flex-col">
                            <p class="p-2 font-semibold bg-orange-500 text-white">Wash(Total) - 100</p>
                            <div class="flex w-full">
                                <div class="w-full p-5 bg-orange-300">
                                    <p class="text-2xl font-semibold">345</p>
                                    <p class="text-sm">Primary</p>
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
                            <Chart type="pie" :data="chartData1" :options="chartOptions" class="w-full md:w-30rem" />
                        </div>
                        <div class="w-full md:w-2/3">
                            <Chart type="bar" :data="chartData2" :options="chartOptions" class="h-30rem" />
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </div>
</template>

<script>
import Chart from 'primevue/chart';
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
            }
        }
    },
    components: {
        Chart
    },
}
</script>

<style>
</style>
