<template>
  <el-button @click="changeData">改变</el-button>
  <el-button @click="restoreData">恢复</el-button>
  <el-row>
    <el-col :span="12">
      <kdChart :options="lineOption"></kdChart>
    </el-col>
    <el-col :span="12">
      <kdChart :options="pieOption"></kdChart>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="12">
      <kdChart :options="barOption"></kdChart>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import kdChart from './components/kd-Chart.vue';
import { getLineOptions, getPieOptions, getBarOptions } from './components/options';
import { ref, onMounted } from 'vue';
const lineOption = ref<object>()
const pieOption = ref<object>()
const barOption = ref<object>()
const changeData = () => {
  /**
   * 点击改变按钮时
   * 1.getLineOptions()=>折线图递归合并的配置项
   * 2.getPieOptions()=>饼图递归合并的配置项
   * 3.getBarOptions()=>柱状图递归合并的配置项
   */
  lineOption.value = getLineOptions({
    series: [
      {
        data: [1200, 25565, 224, 218, 135, 147, 260]
      }
    ]
  })
  pieOption.value = getPieOptions({

    series: [
      {
        data: [
          { value: 100, name: '轻度' },
          { value: 200, name: '中度' },
          { value: 560, name: '重度' },
          { value: 484, name: '高度' }
        ]
      }
    ]
  })
  barOption.value = getBarOptions({
    series: [{
      data: [50, 100, 120, 60, 70, 200],
    }]
  })
}
/*------------------------------ */
const restoreData = () => {
  /**
   * 点击恢复按钮时
   * 1.getLineOptions()=>折线图递归合并的配置项
   * 2.getPieOptions()=>饼图递归合并的配置项
   * 3.getBarOptions()=>柱状图递归合并的配置项
   */
  lineOption.value = getLineOptions({
    series: [
      {
        data: [150, 250, 224, 218, 135, 147, 260]
      }
    ]
  })
  pieOption.value = getPieOptions({
    series: [
      {
        data: [
          { value: 1048, name: '轻度' },
          { value: 735, name: '中度' },
          { value: 580, name: '重度' },
          { value: 484, name: '高度' }
        ]
      }
    ]
  })
  barOption.value = getBarOptions({
    series: [{
      data: [120, 200, 150, 80, 70, 110]
    }]
  })
}
/*------------------------------*/
onMounted(() => {
  restoreData() //调用初始化函数
})
</script>

<style >
</style>
