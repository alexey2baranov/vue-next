<template>
  <div class="home">
<!--    <a-row type="flex">-->
<!--      <a-col span="24" style="width: 100%; height: 100%">-->
<!--        <line-chart style="height: inherit; width: inherit;" />-->
<!--      </a-col>-->
<!--    </a-row>-->
    <a-row :gutter="[16,8]" type="flex">
      <a-col flex="1">
        <table-members-of-project :isLoading="isLoadingProjects"
                                  @selected-project="selectedProject"
                                  :data=projectsValue
        />
      </a-col>
      <a-col flex="1">
        <table-load-members v-if="isVisibleTableMembers"
                            :isLoading="isLoadingMembers"
                            :data="membersValue"
                            :title="selectedProjectData['Проект']"
                            @selected-member="selectedMember"
        />
      </a-col>
    </a-row>
    <a-row :gutter="[16,8]" type="flex">
      <a-col flex="1" >
<!--        <line-chart />-->
      </a-col>
      <a-col flex="1">
        <table-load-member v-if="isVisibleTableMember"
                           :isLoading="isLoadingMember"
                           :title="selectedMemberData.fio"
                           :data="memberValue"
        />
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import {data0, data1, data2, data3, data4, dataM, dataP} from '@/components/AvgLoading/membersData0.ts';
import TableLoadMember from '@/components/AvgLoading/TableLoadMember.vue';
import TableLoadMembers from '@/components/AvgLoading/TableLoadMembers.vue';
import TableMembersOfProject from '@/components/AvgLoading/TableMembersOfProject.vue';
import LineChart from '@/components/Charts/LineChart.vue';
import differenceInBusinessDays from 'date-fns/differenceInBusinessDays';
import {defineComponent, onMounted, ref} from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    TableLoadMember,
    TableLoadMembers,
    TableMembersOfProject,
    // LineChart
  },
  setup() {
    let selectedProjectData = ref({});
    let selectedMemberData = ref({});
    let membersValue = ref([]);
    let projectsValue = ref([]);
    let memberValue = ref([]);
    let isLoadingMembers = ref(false);
    let isLoadingMember = ref(false);
    let isLoadingProjects = ref(false);
    let isVisibleTableMembers = ref(false);
    let isVisibleTableMember = ref(false);
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    const dateHumanize = (date: string) => {
      if (date.length) {
        return new Date(date).toLocaleString().slice(0, 10);
      }
    };

    onMounted(async () => {
      await sleep(1500);
      projectsValue.value = dataP as any;
    });
    const selectedProject = async (selectedProject: any) => {
      selectedProjectData.value = selectedProject;

      isVisibleTableMembers.value = true;
      isVisibleTableMember.value = false;
      isLoadingMembers.value = true;
      membersValue.value = [];
      memberValue.value = [];
      isLoadingProjects.value = true;

      await sleep(1500);
      switch (selectedProject.id) {
        case 0 :
          membersValue.value = data0 as any;
          break;
        case 1 :
          membersValue.value = data1 as any;
          break;
        case 2 :
          membersValue.value = data2 as any;
          break;
        case 3 :
          membersValue.value = data3 as any;
          break;
        case 4 :
          membersValue.value = data4 as any;
          break;
      }
      isLoadingMembers.value = false;
      isLoadingProjects.value = false;
    };
    const selectedMember = async (member: any) => {
      selectedMemberData.value = member;
      isVisibleTableMember.value = true;
      isLoadingMembers.value = true;
      memberValue.value = [];
      isLoadingMember.value = true;

      let fio = member.fio;

      let dataMember = dataM.map(item => {
        let status = ``;
        if (differenceInBusinessDays(new Date(item.plannedEndDate), new Date()) > 0
            && !item.endDate.length) {
          let d = differenceInBusinessDays(new Date(item.plannedEndDate), new Date());
          status = `${d}`;
        }
        if (differenceInBusinessDays(new Date(item.endDate), new Date(item.plannedEndDate)) > 0) {
          let d = differenceInBusinessDays(new Date(), new Date(item.plannedEndDate));
          status = `Просрочка ${d} дней`;
        }
        if (differenceInBusinessDays(new Date(), new Date(item.plannedEndDate)) > 0
            && !item.endDate.length) {
          let d = differenceInBusinessDays(new Date(), new Date(item.plannedEndDate));
          status = `Просрочка ${d} дней`;
        }
        if (differenceInBusinessDays(new Date(item.endDate), new Date(item.plannedEndDate)) === 0) {
          // let d = differenceInBusinessDays(new Date(), new Date(item.plannedEndDate))

          status = `Завершено`;
        }

        let plannedEndDate = dateHumanize(item.plannedEndDate);
        let endDate = dateHumanize(item.endDate);
        let createdAt = dateHumanize(item.createdAt);

        return {
          ...item,
          fio,
          plannedEndDate,
          endDate,
          createdAt,
          status
        };
      });
      await sleep(1500);
      switch (member.id) {
        case 123 :
          memberValue.value = dataMember as any;
          break;
        case 124 :
          memberValue.value = dataMember as any;
          break;
        case 134 :
          memberValue.value = dataMember as any;
          break;
        case 234 :
          memberValue.value = dataMember as any;
          break;
        case 12 :
          memberValue.value = dataMember as any;
          break;
        case 14 :
          memberValue.value = dataMember as any;
          break;
        case 34 :
          memberValue.value = dataMember as any;
          break;
        case 23 :
          memberValue.value = dataMember as any;
          break;
      }
      isLoadingMembers.value = false;
      isLoadingMember.value = false;
    };

    return {
      selectedProject,
      projectsValue,
      isLoadingProjects,
      selectedProjectData,
      isLoadingMembers,
      isVisibleTableMembers,
      membersValue,
      selectedMember,
      selectedMemberData,
      isLoadingMember,
      memberValue,
      isVisibleTableMember
    };
  }
});
</script>
<style scoped>
.table-members {
  /*display: flex;*/
  /*max-width: 500px;*/
  /*max-height: 300px;*/
  /*margin: 8px;*/
  /*width: 100%;*/
  /*height: 100%;*/
}

.table-block {
  /*display: flex;*/
  /*height: 100%;*/
  /*flex-wrap: nowrap;*/
}

.home {
  /*display: flex;*/
  width: 100%;
  height: 100%;
}
</style>
