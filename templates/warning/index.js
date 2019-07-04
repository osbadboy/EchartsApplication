let dom = document.getElementById("opera_pie")
let myChart = echarts.init(dom)

var base = +new Date('2019-8-7 18:00');
var eightHours = 6 * 3600 * 1000;
var date = [[base,0]];
var test_data2 = [[base,0]]

let addZero = function(num){
  if(num<10){
    return '0'+num
  }
  return num
}

for (var i = 1; i < 11; i++) {
    var now = new Date(base += eightHours);
    date.push([Date.parse(now),Math.round(Math.random() * 100 )]);
    test_data2.push([Date.parse(now),Math.round(Math.random() * 100 )]);
}

let option = {
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  grid:{
    left:'0',
    top:'20',
  },
  legend: [{
      left:'center',
      bottom:'42',
      data:[{name:'警告',icon:'rect',},{name:'严重',icon:'rect',}],
      itemHeight: 4,
      itemWidth: 15,
      itemGap:30,
      textStyle:{
        padding: [0, 0, 0, 10]
      },
    },
    {
      left:'center',
      bottom:'20',
      data:[{name:'一般',icon:'rect'},{name:'建议',icon:'rect'}],
      itemHeight: 4,
      itemWidth: 15,
      itemGap:30,
      textStyle:{
        padding: [0, 0, 0, 10]
      },   
   }],
  graphic:[{
    type:'text',
    top:10,
    left:18,
    silent: true,
    style:{
      text:'数据库实例数',
      fill:"#666", // 字体颜色
      font:'300 12px "Microsoft YaHei", sans-serif',
      }
    },
    {      
      type:"rect",
      left:0,
      top:10,
      silent: true,
      shape: {
          width: 5,
          height: 10
      },
      style: {
          fill: '#5874C8'
      }
  }],
  series: [
    {
        name:'数据资源情况',
        type:'pie',
        radius: ['30%', '60%'],
        avoidLabelOverlap: false,
        hoverOffset:5,
        label: {
          show:false,
          formatter:function(params){
              if(params.dataIndex>=1){
                  return ''
              }
              return '35'
          },
          position:'center',
          fontSize:'25',
          color:'#3d3d3d'
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data:[
            {value:20, name:'一般',itemStyle:{color:'#71debf'}},
            {value:30, name:'警告', itemStyle:{color:'#ffdf4b'}},
            {value:25, name:'严重', itemStyle:{color:'#ff4b7b'}},
            {value:25, name:'建议', itemStyle:{color:'#4c89fc'}},
        ],
        center:['50%','40%'],
        hoverOffset:8,
        clockwise:false
    }
  ]
}

myChart.setOption(option, true);

let dom2 = document.getElementById("opera_line")
let myChart2 = echarts.init(dom2)
let opera_line_option = {
  tooltip: {
    trigger:'axis',
  },
  // legend: {  
  //   data: [{
  //       name: '新增',
  //       icon: 'circle'
  //     }, {
  //       name: '修改',
  //       icon: 'circle',
  //     }],
  //   right: '0%',
  //   top:0
  // },
  xAxis: {
      type:'time',
      axisPointer:{
        type:'line',
        snap:true
      },
      splitLine:{ 
        show:false
      },
      axisLine:{
        show:false
      },
      axisTick:{
        show:false
      },
      axisLabel:{
        color:'#999',
        formatter(value, index){
          let date = new Date(value)
          let month = date.getMonth() + 1
          let day = date.getDate()
          let hours = date.getHours()
          if( +hours!==0){
            return ''
          }
          return `${addZero(month)}/${addZero(day)}`
        },
        padding:[8,0,0,0]
      },
     
  },
  yAxis: {
    axisLine:{
      show:false,
    },
    axisTick:{
      show:false
    },
    splitLine:{
      lineStyle:{
        color:['rgba(0,0,0,.1)','rgba(0,0,0,.1)'],
      }
    },
    axisLabel:{
      formatter: function(value, index){
        if(value == 0){
          return value + ''
        }
        return value + '%'
      },
      padding:[0,10,0,0]
    }
  },
  grid:{
    left: '70',
    right:'0',
    //bottom:'50',
    top:'50'
  },
  dataZoom: [{
    type: 'inside',
    throttle: 50
    }],
  graphic:[{
    type:'text',
    top:10,
    left:18,
    silent: true,
    style:{
      text:'磁盘占用趋势图',
      fill:"#666", // 字体颜色
      font:'300 12px "Microsoft YaHei", sans-serif',
      }
    },
    {      
      type:"rect",
      left:0,
      top:10,
      silent: true,
      shape: {
          width: 5,
          height: 10
      },
      style: {
          fill: '#5874C8'
      }
  }],
  series: [{
      name: '修改',
      type: 'line',
      data: date,
      smooth: true,
      z:11,
      lineStyle:{color: 'transparent'},
      symbol:'none',
      areaStyle:{
        color: '#71debf',
        opacity:.8
      },
      itemStyle:{
        color:'#a1e9d5'
      },
      animation:true
  },
  {
    name: '新增',
    type: 'line',
    data: test_data2,
    smooth: true,
    lineStyle:{color: 'transparent'},
    symbol:'none',
    areaStyle:{
      color: '#78a2fa',
      opacity:.8
    },
    itemStyle:{
      color:'#91b2f8'
    },
    animation:true
  }]
}

myChart2.setOption(opera_line_option, true);

window.addEventListener('resize',function(){
  myChart.resize();    
  myChart2.resize();    
})