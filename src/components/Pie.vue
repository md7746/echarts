<template>
  <section>
    <div id="main"></div>
  </section>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'Pie',
  data () {
    return {
    }
  },
  created() {
    this.$nextTick(() => {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));
      console.log(myChart);
      // 绘制图表
      myChart.setOption({
        backgroundColor: '#2c343c',
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          data: [
            {value:235, name:'视频广告'},
            {value:274, name:'联盟广告'},
            {value:310, name:'邮件营销'},
            {value:335, name:'直接访问'},
            {value:400, name:'搜索引擎'}
          ],
          roseType:'angle',//南丁格尔图
          itemStyle: { //通用样式设置
            color:'#c23531',//饼形颜色
            shadowBlur: 200,// 阴影的大小
            shadowOffsetX: 0,// 阴影水平方向上的偏移
            shadowOffsetY: 0,// 阴影垂直方向上的偏移
            shadowColor: 'rgba(0, 0, 0, 0.5)',// 阴影颜色
            emphasis: { //鼠标 hover 时候的高亮样式
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              label: {
                color:'rgba(255, 255, 255, 0.7)',
                show: true,
                formatter: '我高亮了!!!!!!!!'// 高亮时标签的文字。
              },
              labelLine:{
                color:'rgba(255, 255, 255, 0.7)'
              }
            }
          },
          label: {//文字颜色
            normal: {
              textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            }
          },
          labelLine: {//文字指示线颜色
            normal: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            },
            emphasis: { //鼠标 hover 时候的高亮样式   
              lineStyle:{
                color:'rgba(255, 255, 255, 0.7)'
              }
            }
          }
        }]
      });
    })
  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
#main{width: 600px;height: 600px;}
</style>
