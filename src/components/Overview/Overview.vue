<template>
    <div class="flex justify-center">
        <div class="container">
            <div class="flex flex-col px-4 lg:px-0">
                <div class="flex flex-col md:flex-row gap-5">
                    <div class="w-full md:w-1/2">
                        <div class="flex justify-center items-center bg-green-500">
                            <div class="w-1/3">
                                <p class="text-3xl text-white">Wash (%)</p>
                            </div>

                            <div class="w-2/3">
                                <div class="flex w-full p-3">
                                    <div class="bg-green-300 w-1/2 text-white py-5">
                                        <p class="text-2xl font-semibold">{{ wash.male_percentage }} %</p>
                                        <p class="text-xs">Male</p>
                                    </div>
                                    <div class="bg-green-400 w-1/2 text-white py-5">
                                        <p class="text-2xl font-semibold">{{ wash.female_percentage }} %</p>
                                        <p class="text-xs">Female</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2">
                        <div class="flex justify-center items-center bg-orange-500">
                            <div class="w-1/3">
                                <p class="text-3xl text-white">Wash (%)</p>
                            </div>

                            <div class="w-2/3">
                                <div class="flex w-full p-3">
                                    <div class="bg-orange-300 w-1/2 text-white py-5">
                                        <p class="text-2xl font-semibold">{{ wash.male_percentage }} %</p>
                                        <p class="text-xs">Male</p>
                                    </div>
                                    <div class="bg-orange-400 w-1/2 text-white py-5">
                                        <p class="text-2xl font-semibold">{{ wash.female_percentage }} %</p>
                                        <p class="text-xs">Female</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full flex flex-col py-10">
                    <div class="w-full flex flex-col md:flex-row items-center justify-center gap-5">
                        <div class="w-full md:w-1/2">
                            <p class="text-xl font-semibold p-3 text-gray-600">Division</p>
                            <Chart type="bar" :data="chartData2" :options="chartOptions" class="h-30rem" />
                        </div>
                        <div class="w-full md:w-1/2">
                            <p class="text-xl font-semibold p-3 text-gray-600">District</p>
                            <Chart type="bar" :data="chartData2" :options="chartOptions" class="h-30rem" />
                        </div>
                    </div>
                </div>

                <div class="w-full flex flex-col pb-10">
                    <div class="w-full flex flex-col md:flex-row items-center justify-center gap-5">
                        <div class="w-full md:w-1/2">
                            <p class="text-xl font-semibold p-3 text-gray-600">Upazilla</p>
                            <Chart type="bar" :data="chartData2" :options="chartOptions" class="h-30rem" />
                        </div>
                        <div class="w-full md:w-1/2">
                            <p class="text-xl font-semibold p-3 text-gray-600">Union</p>
                            <Chart type="bar" :data="chartData2" :options="chartOptions" class="h-30rem" />
                        </div>
                    </div>
                </div>

                <div class="pb-10">
                    <DataTable ref="dt" :value="table_datas" dataKey="id" :rows="15" >

                        <Column field="serial" header="#" style="width: 5rem">
                            <template #body="{ data }">
                                {{ table_datas.indexOf(data) + 1 }}
                            </template>
                        </Column>

                        <Column field="group" header="Group" style="min-width:10rem"></Column>

                        <Column field="gender" header="Gender" style="min-width:10rem"></Column>

                        <Column field="wash_condition" header="Wash Condition" style="min-width:10rem"></Column>

                        <Column field="wash_habit" header="Wash Habit" style="min-width:10rem"></Column>

                        <Column field="percentage" header="P/A %" style="min-width:10rem"></Column>

                    </DataTable>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Chart from 'primevue/chart';

export default {
    data(){
        return{
            indexAxis: 'y',
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    grid: {
                        drawBorder: false
                    }
                }
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

            chartData:{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'My First dataset',
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            }
        }
    },

    components: {
        DataTable,
        Column,
        Chart
    },

    computed: {
        ...mapState ({
            total_student: state => state.school_data.total_student,
            daily_student: state => state.school_data.daily_student,
            wash: state => state.school_data.wash,
            table_datas: state => state.school_data.table_data
        })
    },
}
</script>

<style scoped>

</style>
