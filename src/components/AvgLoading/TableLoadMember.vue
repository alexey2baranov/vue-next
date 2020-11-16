<template>
  <a-table :loading="isLoading"
           :bordered="true"
           :pagination="{defaultPageSize: 7}"
           size="small"
           :title="() => `Загрузка сотрудника ${title}`"
           :data-source="data"
           rowKey='id'
           :columns="columns"
  >
    <template #filterDropdown="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }">
      <div style="padding: 8px">
        <a-input
            :ref="c => (searchInput = c)"
            :placeholder="`Search ${column.dataIndex}`"
            :value="selectedKeys[0]"
            style="width: 188px; margin-bottom: 8px; display: block;"
            @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
            @pressEnter="handleSearch(selectedKeys, confirm, column.dataIndex)"
        />
        <a-button
            type="primary"
            size="small"
            style="width: 90px; margin-right: 8px"
            @click="handleSearch(selectedKeys, confirm, column.dataIndex)"
        >
          <template #icon><SearchOutlined /></template>
          Найти
        </a-button>
        <a-button size="small" style="width: 90px" @click="handleReset(clearFilters)">
          Сбросить
        </a-button>
      </div>
    </template>
    <template #filterIcon="filtered">
      <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
    </template>
    <template #customRender="{ text, column }">
      <span v-if="searchText && searchedColumn === column.dataIndex">
        <template
            v-for="(fragment, i) in text
            .toString()
            .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
            :key='i'
        >
          <mark v-if="fragment.toLowerCase() === searchText.toLowerCase()" class="highlight">
            {{ fragment }}
          </mark>
          <template v-else>{{ fragment }}</template>
        </template>
      </span>
      <template v-else>
        {{ text }}
      </template>
    </template>
  </a-table>
</template>

<script>
import { SearchOutlined } from '@ant-design/icons-vue';

export default {
  name: "TableLoadMember",
  components: {
    SearchOutlined,
  },
  props: {
    data: {
      require: true,
      type: Array
    },
    isLoading: {
      require: true,
      type: Boolean
    },
    title: {
      require: true,
      type: String
    }
  },
  data() {
    return {
      searchText: '',
      searchInput: null,
      searchedColumn: '',
      columns: [
        {
          title: 'ФИО',
          dataIndex: 'fio',
          // key: id,
          slots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          defaultSortOrder: 'descend',
          sorter: (a, b) => a['Проект'] - b['Проект'],
          onFilter: (value, record) =>
              record['Проект']
                  .toString()
                  .toLowerCase()
                  .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                console.log(this.searchInput);
                this.searchInput.focus();
              }, 0);
            }
          },
        },
        {
          title: 'Задача',
          dataIndex: 'title',
          // key: 'id',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a['Задач в работе'] - b['Задач в работе'],
          slots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          onFilter: (value, record) =>
              record['Задач в работе']
                  .toString()
                  .toLowerCase()
                  .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          },
        },
        {
          title: 'Дата поступления',
          dataIndex: 'createdAt',
          // key: 'id',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a['Работают'] - b['Работают'],
          slots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          onFilter: (value, record) =>
              record['Работают']
                  .toString()
                  .toLowerCase()
                  .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          },
        },
        {
          title: 'Дата завершения(план)',
          dataIndex: 'plannedEndDate',
          // key: 'id',
          slots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          defaultSortOrder: 'descend',
          sorter: (a, b) => a['Отсутствуют'] - b['Отсутствуют'],
          onFilter: (value, record) =>
              record['Отсутствуют']
                  .toString()
                  .toLowerCase()
                  .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          },
        },
        {
          title: 'Дата завершения(факт.)',
          dataIndex: 'endDate',
          // key: 'id',
          slots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          defaultSortOrder: 'descend',
          sorter: (a, b) => a['Средняя загрузка'] - b['Средняя загрузка'],
          onFilter: (value, record) =>
              record['Средняя загрузка']
                  .toString()
                  .toLowerCase()
                  .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          },
        },
        {
          title: 'Осталось дней до завершения',
          dataIndex: 'status',
          // key: 'id',
          slots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
            customRender: 'customRender',
          },
          defaultSortOrder: 'descend',
          sorter: (a, b) => a['Средняя загрузка'] - b['Средняя загрузка'],
          onFilter: (value, record) =>
              record['Средняя загрузка']
                  .toString()
                  .toLowerCase()
                  .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          },
        },
      ],
    };
  },
  methods: {
    handleSearch(selectedKeys, confirm, dataIndex) {
      confirm();
      console.log(selectedKeys[0]);
      this.searchText = selectedKeys[0];
      this.searchedColumn = dataIndex;
      this.$forceUpdate();
    },

    handleReset(clearFilters) {
      clearFilters();
      this.searchText = '';
    },
  },
};
</script>
<style scoped>
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}
</style>


