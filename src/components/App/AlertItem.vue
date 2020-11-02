<template>
  <a-alert
      :message=message
      :type=type
      show-icon
      class="alert-item"
      :title="description"
  >
    <template v-slot:description>
      <p style="
              white-space: nowrap;
              overflow: hidden;
              padding: 5px;
              text-overflow: ellipsis;">
        {{description}}
      </p>
    </template>
  </a-alert>
</template>
<script lang="ts">

import {
  defineComponent,
} from "vue";
export default defineComponent({
  props: {
    message: {
      require: false,
      type: String
    },
    description: {
      require: false,
      type: String || Object
    },
    type: {
      require: false,
      type: String
    },
  },
})

</script>

<style>
.alert-item{
  width: 60%;
}
</style>
