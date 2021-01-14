<template>
  <div class="home">
    <a-row>
      <a-col>
      </a-col>
      <a-col>
        <a-upload-dragger
            name="file"
            :multiple="true"
            action="http://localhost:8080/parse"
            @change="handleChange"
            style="max-width: 400px;"
        >
          <p class="ant-upload-drag-icon">
            <a-icon type="inbox"/>
          </p>
          <p class="ant-upload-text">
            Нажмите или перенесите файлы для загрузки
          </p>
          <p class="ant-upload-hint">
            Поддерживает единичную и множественную загрузку
          </p>
        </a-upload-dragger>
      </a-col>
      <a-col>
      </a-col>
    </a-row>

  </div>
</template>

<script lang="ts">
import {defineComponent,} from 'vue';

export default defineComponent({
  name: 'Home',
  components: {},
  methods: {
    async handleChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        (this as any).$message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        (this as any).$message.error(`${info.file.name} file upload failed`)
      }
    }
  }
})
</script>

<style scoped>

</style>
