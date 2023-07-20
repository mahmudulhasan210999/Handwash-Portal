<template>
    <div class="flex justify-center">
        <div class="container">

            <div class="flex">
                <div class="w-1/2 flex pr-4">
                    <div class="w-1/2 border-r border-gray-700">
                        <p class="bg-yellow-500 text-white py-2">Total Student</p>
                        <div class="flex w-full border-t border-gray-700">
                            <div class="bg-yellow-200 w-1/2 py-2 border-r border-gray-700">
                                <p class="text-2xl">{{ total_student.male_count }}</p>
                                <p class="text-xs">Male</p>
                            </div>
                            <div class="bg-yellow-300 w-1/2 py-2">
                                <p class="text-2xl">{{ total_student.female_count }}</p>
                                <p class="text-xs">Female</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-1/2">
                        <p class="bg-yellow-500 text-white py-2">Daily Student</p>
                        <div class="flex w-full border-t border-gray-700">
                            <div class="bg-yellow-200 w-1/2 py-2 border-r border-gray-700">
                                <p class="text-2xl">{{ daily_student.male_count }}</p>
                                <p class="text-xs">Male</p>
                            </div>
                            <div class="bg-yellow-300 w-1/2 py-2">
                                <p class="text-2xl">{{ daily_student.female_count }}</p>
                                <p class="text-xs">Female</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-1/2 pl-4">
                    <div class="flex justify-center items-center bg-orange-500">
                        <div class="w-1/3">
                            <p class="text-4xl text-white">Wash (%)</p>
                        </div>

                        <div class="w-2/3 p-3">
                            <div class="flex w-full">
                                <div class="bg-orange-300 w-1/2 text-white py-3">
                                    <p class="text-3xl">{{ wash.male_percentage }} %</p>
                                    <p class="text-xs">Male</p>
                                </div>
                                <div class="bg-orange-400 w-1/2 text-white py-3">
                                    <p class="text-3xl">{{ wash.female_percentage }} %</p>
                                    <p class="text-xs">Female</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="border mt-6">
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
