<template>
    <div class="flex justify-center">
        <div class="container px-4 lg:px-0">
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
                    <p class="py-2 text-gray-500">Division</p>
                    <Dropdown v-model="selectedCity" :options="division" optionLabel="name" placeholder="Select" class="w-full" />
                </div>

                <div class="flex flex-col w-full text-left font-semibold">
                    <p class="py-2 text-gray-500">District</p>
                    <Dropdown v-model="selectedCity" :options="district" optionLabel="name" placeholder="Select" class="w-full" />
                </div>

                <div class="flex flex-col w-full text-left font-semibold">
                    <p class="py-2 text-gray-500">Upazila</p>
                    <Dropdown v-model="selectedCity" :options="district" optionLabel="name" placeholder="Select" class="w-full" />
                </div>

                <div class="flex flex-col w-full text-left font-semibold">
                    <p class="py-2 text-gray-500">Union</p>
                    <Dropdown v-model="selectedCity" :options="district" optionLabel="name" placeholder="Select" class="w-full" />
                </div>

                <div class="flex flex-col w-full text-left font-semibold">
                    <p class="py-2 text-gray-500">Date</p>
                    <Calendar v-model="date" showIcon />
                </div>

                <div class="flex items-end">
                    <Button class="w-full" label="Filter" severity="warning"  />
                </div>
            </div>

            <div class="flex flex-col md:flex-row gap-5">
                <div class="w-full md:w-1/2 flex">
                    <div class="w-1/2 border-r-2 border-gray-500">
                        <p class="p-2 font-semibold bg-yellow-500 text-white">Total Student</p>
                        <div class="flex w-full">
                            <div class="bg-yellow-200 w-1/2 py-5">
                                <p class="text-2xl font-semibold">{{ total_student.male_count }}</p>
                                <p class="text-xs">Male</p>
                            </div>
                            <div class="bg-yellow-300 w-1/2 py-5">
                                <p class="text-2xl font-semibold">{{ total_student.female_count }}</p>
                                <p class="text-xs">Female</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-1/2">
                        <p class="p-2 font-semibold bg-yellow-500 text-white">Daily Student</p>
                        <div class="flex w-full">
                            <div class="bg-yellow-200 w-1/2 py-5">
                                <p class="text-2xl font-semibold">{{ daily_student.male_count }}</p>
                                <p class="text-xs">Male</p>
                            </div>
                            <div class="bg-yellow-300 w-1/2 py-5">
                                <p class="text-2xl font-semibold">{{ daily_student.female_count }}</p>
                                <p class="text-xs">Female</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full md:w-1/2">
                    <div class="flex justify-center items-center bg-orange-500 h-full">
                        <div class="w-1/3">
                            <p class="text-3xl text-white">Wash (%)</p>
                        </div>

                        <div class="w-2/3">
                            <div class="flex w-full px-4">
                                <div class="bg-orange-300 w-1/2 text-white py-6">
                                    <p class="text-2xl font-semibold">{{ wash.male_percentage }} %</p>
                                    <p class="text-xs">Male</p>
                                </div>
                                <div class="bg-orange-400 w-1/2 text-white py-6">
                                    <p class="text-2xl font-semibold">{{ wash.female_percentage }} %</p>
                                    <p class="text-xs">Female</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full flex flex-col pt-10">
                <p class="text-3xl font-semibold p-3 text-gray-600">Secondary School</p>
                <div class="w-full flex flex-col md:flex-row items-center justify-center gap-10">
                    <div class="w-full md:w-1/2">
                        <Chart type="bar" :data="chartData2" :options="chartOptions" class="w-full md:w-30rem" />
                    </div>
                    <div class="w-full md:w-1/2">
                        <Chart type="bar" :data="chartData4" :options="chartOptions" class="h-30rem" />
                    </div>
                </div>
            </div>

            <div class="py-10">
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
</template>

<script>
import { mapState } from "vuex";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Chart from 'primevue/chart';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import Button from 'primevue/button';

export default {
    data(){
        return{
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
            ]),

            division:([
                { name: 'Chittagong'},
                { name: 'Dhaka'},
                { name: 'Rajshahi'},
                { name: 'Sylhet'},
                { name: 'Mymensingh'},
                { name: 'Barisal'},
                { name: 'Rangpur'},
                { name: 'Khulna'},
            ]),

            district:([
                { name: 'Chittagong'},
                { name: 'Dhaka'},
                { name: 'Rajshahi'},
                { name: 'Sylhet'},
                { name: 'Mymensingh'},
                { name: 'Barisal'},
                { name: 'Rangpur'},
                { name: 'Khulna'},
            ])
        }
    },


    components: {
        DataTable,
        Column,
        Chart,
        Dropdown,
        Calendar,
        Button
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
