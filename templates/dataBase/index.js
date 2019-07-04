(function(){
  /*************************折线图模拟数据************************************************ */
  var base = +new Date('2019-8-7 18:00');
  var eightHours = 6 * 3600 * 1000;
  var date = [[base,0]];
  var test_data2 = [[base,0]]

 
  var min_base = +new Date('2019-8-7 7:45');
  var min_data_one = [[min_base,0]]
  var min_data_two = [[min_base,0]]
  var min_Minute = 1000*60*15

  function addData(shift) {
    var now = new Date(base += eightHours);
    var minmue = new Date(min_base += min_Minute);
    date.push([Date.parse(now),Math.round(Math.random() * 1800 )]);
    test_data2.push([Date.parse(now),Math.round(Math.random() * 1800 )]);
    min_data_one.push([Date.parse(minmue),Math.round(Math.random() * 30 )]);
    min_data_two.push([Date.parse(minmue),Math.round(Math.random() * 30 )]);
    if (shift) {
        date.shift();
        test_data2.shift();
        min_data_one.shift();
        min_data_two.shift();
    }
  }
  let addZero = function(num){
    if(num<10){
      return '0'+num
    }
    return num
  }

  for (var i = 1; i < 11; i++) {
    addData()
  }
 /*****************************折线图模拟数据****************************************************** */
//********************************饼图模拟数据************************************************ */
  function ramdom(){
    return Math.round(Math.random()*100)
  }
  var data_1 = [
    {value:ramdom(), name:'正常',itemStyle:{color:'#71debf'}},
    {value:ramdom(), name:'预警', itemStyle:{color:'#ffdf4b'}},
    {value:ramdom(), name:'故障', itemStyle:{color:'#ff4b7b'}},
  ]
  
  function upDate_data(){
     data_1 = [
      {value:ramdom(), name:'正常',itemStyle:{color:'#71debf'}},
      {value:ramdom(), name:'预警', itemStyle:{color:'#ffdf4b'}},
      {value:ramdom(), name:'故障', itemStyle:{color:'#ff4b7b'}}
    ]
  }
//********************************饼图模拟数据************************************************ */
  let pie_dom_first = document.getElementById("data-first-pie")
  let myChart = echarts.init(pie_dom_first)
  let option_d_first_pie = {
    tooltip: {
      trigger: 'item',
    },
    grid:{
      left:'0',
      top:'20',
    },
    legend: {
        left:'55%',
        top:'middle',
        orient:'vertical',
        data:[{name:'正常',icon:'rect',},{name:'预警',icon:'rect',},{name:'故障',icon:'rect',}],
        itemHeight: 5,
        itemWidth: 15,
        itemGap:20,
        formatter:function(name){
          var data = option_d_first_pie.series[0].data,totalNum = 0
          for(var i = 0;i < data.length; i++) {
            totalNum += data[i].value;
          }
          for(var j in data){
            let item = data[j]
            if(item.name === name){
              return name + '(' + item.value + '台)      ' + Math.round(item.value/totalNum*100).toFixed(0) + '%'
            }
          }
        },
        textStyle:{
          padding: [0, 0, 0, 10]
        },
        
    },
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
          name:'机台信息',
          type:'pie',
          radius: ['35%', '75%'],
          avoidLabelOverlap: false,
          label: {
            show:false,
            fontSize:'25',
            color:'#3d3d3d'
          },
          labelLine: {
              normal: {
                  show: false
              }
          },
          data:data_1, 
          center:['22%%','58%'],
          hoverOffset:6,
          clockwise:false,
          tooltip:{
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          }
      },
      {
        silent:true,
        name:'占位',
        type:'pie',
        radius: ['0', '35%'],
        avoidLabelOverlap: false,
        itemStyle:{
          color:'#fff'
        },
        data: [300],
        center:['22%%','58%'],
        hoverOffset:0,
        clockwise:false,
        label:{
          show:true,
          position:'center',
          color: '#333',
          formatter: function(){
            var data = option_d_first_pie.series[0].data,totalNum = 0
              for(var i = 0;i < data.length; i++) {
                totalNum += data[i].value;
              }
            return totalNum
          },
          fontSize:24,
          fontWeight: 500
        }
      }
    ]
  }
  
  myChart.setOption(option_d_first_pie, true);
  setInterval(function(){
    upDate_data()
    option_d_first_pie.series[0].data = data_1
    myChart.setOption(option_d_first_pie);
  },3000)
//................................................................................
let pie_dom_second = document.getElementById("data-second-pie")
let myChart2 = echarts.init(pie_dom_second)

let option_d_second_pie = {

tooltip: {
  trigger: 'item',
  formatter: "{a} <br/>{b}: {c} ({d}%)"
},
grid:{
  left:'0',
  top:'0',
},
legend: {
    left:'55%',
    top:'middle',
    orient:'vertical',
    data:[{name:'资源表',icon:'rect',},{name:'业务表',icon:'rect',},{name:'应用表',icon:'rect',}],
    itemHeight: 5,
    itemWidth: 15,
    itemGap:20,
    formatter:function(name){
      var data = option_d_second_pie.series[0].data,totalNum = 0
      for(var i = 0;i < data.length; i++) {
        totalNum += data[i].value;
      }
      for(var j in data){
        let item = data[j]
        if(item.name === name){
          return name + '(' + item.value + '台)      ' + Math.round(item.value/totalNum*100).toFixed(0) + '%'
        }
      }
    },
    textStyle:{
      padding: [0, 0, 0, 10]
    },
    
},
series: [
  {
      name:'表信息',
      type:'pie',
      radius: ['40%', '80%'],
      avoidLabelOverlap: false,
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
          {value:113, name:'资源表',itemStyle:{color:'#71debf'}},
          {value:101, name:'业务表', itemStyle:{color:'#ffdf4b'}},
          {value:89, name:'应用表', itemStyle:{color:'#ff4b7b'}},
      ],
      center:['22%','50%'],
      hoverOffset:8,
      clockwise:false
  },
  {
    silent:true,
    name:'占位',
    type:'pie',
    radius: ['0', '35%'],
    avoidLabelOverlap: false,
    itemStyle:{
      color:'#fff'
    },
    data:[300],
    center:['22%%','50%'],
    hoverOffset:0,
    clockwise:false,
    label:{
      show:true,
      position:'center',
      color: '#333',
      formatter: function(){
        var data = option_d_second_pie.series[0].data,totalNum = 0
          for(var i = 0;i < data.length; i++) {
            totalNum += data[i].value;
          }
        return totalNum
      },
      fontSize:24,
      fontWeight: 500
    }
  }
]
}
myChart2.setOption(option_d_second_pie, true);

//............................................................................

let data_info = document.getElementById("date-info")
let myChart3 = echarts.init(data_info)

let data_info_option = {
  grid:{

  },
  graphic:[{
    type:'text',
    top:10,
    left:32,
    silent: true,
    style:{
      text:'事件',
      fill:"#666", // 字体颜色
      font:'300 12px "Microsoft YaHei", sans-serif',
      }
    },
    {      
      type:"rect",
      left:22,
      top:10,
      silent: true,
      shape: {
          width: 5,
          height: 10
      },
      style: {
          fill: '#5874C8'
      }
    },
    {
      type:'group',
      top:50,
      left:'center',
      width: 110,
      height: 80,
      children:[
        {
          type:'text',
          top:'15',
          left:'center',
          silent: true,
          z:10, 
          style:{
            text:'紧急',
            fill:"#fff", // 字体颜色
            font:'600 16px "STHeiti"',
            }
          },
          {
            type:'text',
            top:'40',
            left:'center',
            silent: true,
            z:10, 
            style:{
              text:'3',
              fill:"#fff", // 字体颜色
              font:'500 32px "Microsoft YaHei", sans-serif',
            }
          },
        {      
          type:"rect",
          silent: true,
          shape: {
              width: 110,
              height: 80,
              r: 4
          },
          style: {
              fill: '#ff4b7b'
          }
        },
        
      ]
    },
    {
      type:'group',
      top:150,
      left:'center',
      width: 110,
      height: 80,
      children:[
        {
          type:'text',
          top:'15',
          left:'center',
          silent: true,
          z:10, 
          style:{
            text:'注意',
            fill:"#fff", // 字体颜色
            font:'600 16px "STHeiti"',
            }
          },
          {
            type:'text',
            top:'40',
            left:'center',
            silent: true,
            z:10, 
            style:{
              text:'3',
              fill:"#fff", // 字体颜色
              font:'500 32px "Microsoft YaHei", sans-serif',
            }
          },
        {      
          type:"rect",
          silent: true,
          shape: {
              width: 110,
              height: 80,
              r: 4
          },
          style: {
              fill: '#ffdf4b'
          }
        },
        
      ]
    },
    {
      type:'group',
      top:250,
      left:'center',
      width: 110,
      height: 80,
      children:[
        {
          type:'text',
          top:'15',
          left:'center',
          silent: true,
          z:10, 
          style:{
            text:'提示',
            fill:"#fff", // 字体颜色
            font:'600 16px "STHeiti"',
            }
          },
          {
            type:'text',
            top:'40',
            left:'center',
            silent: true,
            z:10, 
            style:{
              text:'3',
              fill:"#fff", // 字体颜色
              font:'500 32px "Microsoft YaHei", sans-serif',
            }
          },
        {      
          type:"rect",
          silent: true,
          shape: {
              width: 110,
              height: 80,
              r: 4
          },
          style: {
              fill: '#71debf'
          }
        },
        
      ]
    }],
}

myChart3.setOption(data_info_option, true);

//...........................................................

let date_update = document.getElementById("date-update")
let myChart4 = echarts.init(date_update)

let date_update_data_1 = []
let date_update_data_2 = []

function date_update_update(){
  date_update_data_1 = [0]
  date_update_data_2 = [0]
  for(var i = 0; i< 12; i++){
    date_update_data_1.push(Math.round(Math.random()*1000))
    date_update_data_2.push(Math.round(Math.random()*1000))
  }
}

let date_update_option = {
graphic:[{
  type:'text',
  top:12,
  left:'18',
  silent: true,
  style:{
    text:'资源审批情况',
    fill:"#666", // 字体颜色
    font:'300 12px "Microsoft YaHei", sans-serif',
    }
  },
  {      
    type:"rect",
    left:'0',
    top:12,
    silent: true,
    shape: {
        width: 5,
        height: 10
    },
    style: {
        fill: '#5874C8'
    }
}],
tooltip: {
  trigger: 'axis',
  showContent:false,
  axisPointer: {
      type: 'shadow',
      shadowStyle:{
        color:'#93a4d8',
        opacity:.7
      },
      label:{
        show:true,
        margin:-130,
        backgroundColor:'transparent',
        formatter: function(params){
          if(params.value  === '0'){
            return ''
          }
          return params.value + '月\n\n' + params.seriesData[0].seriesName + ':'+ params.seriesData[0].value + '\n'+
          params.seriesData[1].seriesName + ':' + params.seriesData[1].value
        },

      }
  },
},
legend: {
    data: [{
        name: '新增',
        icon: 'circle'
      }, {
        name: '修改',
        icon: 'circle',
      }],
    right: '5%',
    top:10,
    textStyle:{},
    itemWidth:15
},
grid:{
  left: '50',
  right:'5%',
  top:'100'
},
xAxis: {
    data: ["0","1","2","3","4","5","6","7","8","9","10","11","12"],
    boundaryGap:false,
    axisTick:{
      show:false,
    },
   
    axisLine:{
      lineStyle:{
        color:'rgb(158,158,158)'
      }
    },
    axisLabel:{
      padding:[5,0,0,0],
      formatter: function(value, index){
        if(index===0){
          return ''
        }
        return value + '月'
      }
    },
    
},
yAxis: {
  name:'数据量（万）',
  nameGap:30,
  nameLocation:'end',
  axisTick:{
    show:false
  },
  axisLine:{
    lineStyle:{
      color:'#999'
    }
  },
  splitLine:{
    interval:40
  },
  splitArea:{
    interval:40
  }
},
series: [{
    name: '新增',
    type: 'line',
    data: [0, 400, 500, 631, 846, 521, 421, 431, 613, 321, 798, 421, 212],
    smooth:true,
    z:10,
    areaStyle:{
      color: '#71debf',
      opacity:.8
      },
    symbolSize:1,
    lineStyle:{
      color:'transparent'
      },
      itemStyle:{
        color:'#71debf'
      }
    },
    {
      name: '修改',
      type: 'line',
      data: [0, 200, 400, 342, 242, 563, 456, 205, 321, 457, 500, 670, 800],
      smooth:true,
      areaStyle:{
        color: '#667ec8',
        opacity:.8
      },
      symbolSize:1,
      lineStyle:{
        color:'transparent'
      },
      itemStyle:{
        color:'#667ec8'
      }
    }]
}

myChart4.setOption(date_update_option, true)
setInterval(function(){
  date_update_update()
  date_update_option.series[0].data = date_update_data_1
  date_update_option.series[1].data = date_update_data_2
  myChart4.setOption(date_update_option);
},3000)

//********************************************************************************************* */
let ex_data = document.getElementById("ex_data")
let myChart5 = echarts.init(ex_data)
let ex_data_option = {
  tooltip: {
    trigger:'axis',
  },
  legend: {
    data: [{
        name: '新增',
        icon: 'circle'
      }, {
        name: '修改',
        icon: 'circle',
      }],
    right: '0%',
    top:0
},
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
      lineStyle:{
        color:'#999'
      }
    },
    axisTick:{
      show:false
    },
    name:'数据量（万条）',
    nameGap:20,
    splitLine:{
      lineStyle:{
        color:['rgba(0,0,0,.1)','rgba(0,0,0,.1)'],
        
      }
    }
  },
  grid:{
    left: '50',
    right:'0',
    bottom:'40',
    top:'70'
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
      text:'数据',
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

myChart5.setOption(ex_data_option, true)
setInterval(function(){
  addData(true)
  ex_data_option.series[0].data = date
  ex_data_option.series[1].data = test_data2
  myChart5.setOption(ex_data_option);
},3000)

/******************************************************************************** */

let ex_perf = document.getElementById("ex_perf")
let myChart6 = echarts.init(ex_perf)
let ex_perf_data = [
  {name: '磁盘已用',value: 80,total:125},
  {name: '内存占用',value: 20,total:155},
  {name: 'CPU占用',value: 68,total:225}
]
function ex_perf_update(){
  ex_perf_data = [
    {name: '磁盘已用',value: ex_perf_ramdom(),total:100},
    {name: '内存占用',value: ex_perf_ramdom(),total:100},
    {name: 'CPU占用',value: ex_perf_ramdom(),total:100}
  ]
}
function  ex_perf_ramdom(){
  return Math.round(Math.random()*100)
}

let ex_perf_option = {
  tooltip:{
    formatter: "{a} <br/>{b}: ({d}%) "
  },
  legend:{
    data: [{
      name: '磁盘已用',
      icon: 'circle'
    }, {
      name: '内存占用',
      icon: 'circle',
    },{
      name: 'CPU占用',
      icon: 'circle',
    }],
    right: '10%',
    top:'25%',
    orient:'vertical',
    itemGap: 60,
    itemWidth: 10,
    textStyle:{
      padding: [0,0,0,20],
      color:'#868b9c'
    }
  },
  graphic:[{
    type:'text',
    top:10,
    left:18,
    silent: true,
    style:{
      text:'性能',
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
  series:[{
    name:'磁盘',
    type:'pie',
    radius: [95,100],
    hoverOffset:1,
    label:{
      show:false
    },
    center:['32%','50%'],
    data:[{
      name:'磁盘已用',
      value: 75,
      itemStyle:{
        color: '#588af4'
      },
      labelLine:{
        show:false
      }
    },
    {
      name:'磁盘剩余',
      value: 25,
      itemStyle:{
        color: '#eaeef7'
      }
    }]
  },
  {
    name:'内存',
    type:'pie',
    radius: [85,90],
    hoverOffset:1,
    label:{
      show:false
    },
    center:['32%','50%'],
    data:[{
      name:'内存占用',
      value: 70,
      itemStyle:{
        color: '#ffde4b'
      },
      labelLine:{
        show:false
      }
    },
    {
      name:'内存剩余',
      value: 20,
      itemStyle:{
        color: '#eaeef7'
      }
    }]
  },
  {
    name:'CPU',
    type:'pie',
    radius: [75,80],
    hoverOffset:1,
    label:{
      show:false
    },
    center:['32%','50%'],
    data:[{
      name:'CPU占用',
      value: 62,
      itemStyle:{
        color: '#77dfc2'
      },
      labelLine:{
        show:false
      }
    },
    {
      name:'CPU剩余',
      value: 38,
      itemStyle:{
        color: '#eaeef7'
      }
    }]
  },
  {
    name:'num',
    type:'pie',
    word:'磁盘已占用',
    radius: [0,70],
    hoverOffset:0,
    silent:true,
    label:{
      show:true
    },
    center:['32%','50%'],
    data:[{
      name:'percent',
      value: 75,
      itemStyle:{
        color: '#7ca5fb'
      },
      labelLine:{
        show:false
      },
      label:{
        color:'#fff',
        formatter: [
          '{mun|{c}%}','{name|磁盘已占用}'
        ].join('\n\n'),
        rich:{
          "mun": {
            color: 'white',
            fontSize: 36
          },
          "name": {
            color: 'white',
            fontSize: 12
          }
        },
        position:'center'
      }
    }]
  }]
}

myChart6.setOption(ex_perf_option, true)

setInterval(function(){
  ex_perf_update()
  ex_perf_option.series.forEach(function(item, index){
    if(item.name === 'num'){
      item.data[0].value = ex_perf_data[0].value
    }
    else{
      item.data[0].value = ex_perf_data[index].value
      item.data[1].value = ex_perf_data[index].total - item.data[0].value
    }
    
  })
  myChart6.setOption(ex_perf_option);
},3000)

/************************************************************************ */

let ex_time_data = []

function ex_time_update(){
  ex_time_data = [{value: ex_time_ramdom()},{value: ex_time_ramdom()},{value: ex_time_ramdom()}]
}
function  ex_time_ramdom(){
  return Math.round(Math.random()*80 + 20)
}
let ex_time = document.getElementById("ex_time")
let myChart7 = echarts.init(ex_time)

let ex_time_option = {
  grid:{
    left:'40',
    top:'85'
  },
  tooltip:{
    trigger:'axis'
  },
  xAxis:{
    gridIndex:0,
    data:['响应时间','错误语句','慢查询'],
    axisTick:{
      show: false
    },
    axisLine:{
      lineStyle: {
        color: 'rgb(216, 216, 216)'
      }
    },
    axisLabel:{
      color: '#666',
      padding: [12,0,0,0]
    }
  },
  yAxis:[{
    name:'时间（毫秒）',
    nameGap:'35',
    nameTextStyle:{
      color: '#666'
    },
    id:'time_one',
    axisLine:{
      show:false
    },
    axisTick:{
      show: false
    },
    axisLabel:{
      color: '#777',
      padding:[0,8,0,0]
    }
  },{
    name:'语句（条/s）',
    nameGap:'35',
    nameTextStyle:{
      color: '#666'
    },
    id:'time_one2',
    axisLine:{
      show:false
    },
    axisTick:{
      show: false
    },
    axisLabel:{
      color: '#777',
      padding:[0,8,0,0]
    }
  }],
  series:[
    {
      type:'bar',
      barWidth: 28,
      data:[{
        name:'响应时间',
        value: 82,
        itemStyle:{
          color: '#588af4'
        }
      },
      {
        name:'错误语句',
        value: 60,
        itemStyle:{
          color: '#ffde4b'
        }
      },
      {
        name:'慢查询',
        value: 42,
        itemStyle:{
          color: '#71debf'
        }
      }],
    },
    // {
    //   type:'line',
    //   yAxisIndex: 1,
    //   symbol: 'none',
    //   lineStyle:{
    //     color:'transparent'
    //   },
    //   data:[2,2.5,9] 
    // }
  ]
}

myChart7.setOption(ex_time_option, true)
setInterval(function(){
  ex_time_update()
  let data = ex_time_option.series[0].data
  data.forEach(function(item, index){
    item.value = ex_time_data[index]["value"]
  })
  myChart7.setOption(ex_time_option);
},3000)
/*********************************************************************** */
let ex_thro = document.getElementById("ex_thro")
let myChart8 = echarts.init(ex_thro)

let ex_thro_option = {
  tooltip: {
    trigger:'axis',
  },
  legend: {
    data: [{
        name: 'TPS',
        icon: 'circle'
      }, {
        name: 'QPS',
        icon: 'circle',
      }],
    right: '0%',
    top:5,
    itemWidth:7
},
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
          let minutes = date.getMinutes()
          let hours = date.getHours()
          
          return `${addZero(hours)}:${addZero(minutes)}`
        },
        padding:[8,0,0,0]
      },
     
  },
  yAxis: {
    axisLine:{
      show:false
    },
    axisLabel:{
      color: '#777',
      padding:[0,10,0,0]
    },
    axisTick:{
      show:false
    },
    name:'吞吐量/秒',
    nameTextStyle:{
      color: '#666'
    },
    nameGap:20,
    splitLine:{
      lineStyle:{
        color:['rgba(0,0,0,.1)','rgba(0,0,0,.1)'],
      }
    }
  },
  grid:{
    left: '50',
    right:'20',
    //bottom:'50',
    top:'70'
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
      text:'数据',
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
      name: 'TPS',
      type: 'line',
      data: min_data_one,
      smooth: true,
      z:11,
      lineStyle:{},
      symbol:'none',
      itemStyle:{
        color:'#a1e9d5'
      },
      animation:true
  },
  {
    name: 'QPS',
    type: 'line',
    data: min_data_two,
    smooth: true,
    lineStyle:{},
    symbol:'none',
    itemStyle:{
      color:'#91b2f8'
    },
    animation:true
  }]
}

myChart8.setOption(ex_thro_option, true)
setInterval(function(){
  ex_thro_option.series[0].data = min_data_one
  ex_thro_option.series[1].data = min_data_two
  myChart8.setOption(ex_thro_option);
},3000)
window.addEventListener('resize',function(){
  myChart.resize();    
  myChart2.resize();    
  myChart3.resize();    
  myChart4.resize();
  myChart5.resize();
  myChart6.resize();
  myChart7.resize();
  myChart8.resize();
})
})()

$(function(){
  $(window).click(function(){
    $(".down_menu").next().hide()
  })
  $(".down_menu").click(function(e){
    e.stopPropagation()
    $(this).next().show()
  })
  $(".down_menu").next().on('click','li',function(e){
    let value = e.target.textContent
    $(this).parent().prev().prop ('firstChild').nodeValue = value
  })
  $(".oppose_btn").click(function(){
    $(this).siblings().removeClass('on').end().addClass('on')
  })
  $(".ku_table").click(function(){
    if($(this).hasClass("on")){
      return 0
    }
    $(this).siblings().removeClass('on').end().addClass('on')
    $('.ku_table_box').show().next().hide()
  })
  $(".biao_table").click(function(){
    if($(this).hasClass("on")){
      return 0
    }
    $(this).siblings().removeClass('on').end().addClass('on')
    $('.biao_table_box').show().prev().hide()
  })
  $(".pre_page,.next_page").click(function(){
    console.log( $(this).parent().siblings('.table_list'))
    var tbody = ''
    var table_data = []
    for(let i = 0; i<5;i++){
      table_data.push({'表名':'AAAAAAAAAAA','字段数': Math.round(Math.random()*20),'数据量':Math.round(Math.random()*1000),
      '空间大小':'XXmb','更新频率':'每月','最近更新':'2019-04-25','描述':'没有'})
    }
    for(let i = 0; i<5;i++){
      for(let item in table_data[i]){
        tbody += '<td>'+ table_data[i][item] + '</td>'
      }
      tbody = '<tr>'+tbody+'</tr>'
    }
    tbody = '<tbody>'+tbody+'</tbody>'
    $(this).parent().siblings('.table_list').children('tbody').replaceWith(tbody)
  })
})

