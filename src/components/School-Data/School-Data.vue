<template>
    <div class="flex justify-center">
        <div class="container px-4 lg:px-0">
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

export default {
    components: {
        DataTable,
        Column
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
