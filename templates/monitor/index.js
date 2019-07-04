(function(){


var dom = document.getElementById("pie1");
var myChart1 = echarts.init(dom);
var pie1_option = null;

//pie1 传入json数据



var pie1Data = [121,111,212,131,121];
var   pie1_json= [
  {value:121, name:'资源中心',itemStyle:{color:'#71DEBF'}},
  {value:66, name:'公安局',itemStyle:{color:'#3AEAFF'}},
  {value:144, name:'交通局',itemStyle:{color:'#4F6BBF'}},
  {value:133, name:'药监局',itemStyle:{color:'#FF4B7B'}},
  {value:123, name:'人社局',itemStyle:{color:'#4C89FC'}}
];
function shift1Data(shit) {
    pie1Data.push(randomDate());
    if(shit){
      pie1Data.shift();
    }
    pie1_json = [
      {value:pie1Data[0], name:'资源中心',itemStyle:{color:'#71DEBF'}},
      {value:pie1Data[1], name:'公安局',itemStyle:{color:'#3AEAFF'}},
      {value:pie1Data[2], name:'交通局',itemStyle:{color:'#4F6BBF'}},
      {value:pie1Data[3], name:'药监局',itemStyle:{color:'#FF4B7B'}},
      {value:pie1Data[4], name:'人社局',itemStyle:{color:'#4C89FC'}}
    ];

}



function randomDate() {
  return Math.round(Math.random()*100 + 50);
}
pie1_option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%) "
    },
    graphic:[{       //图形中间文字
        type:"text",
        left:33,
        top:10,
        silent: true,
        style:{
            text:"数据表信息",
            textAlign:"center",
            fill:"#000",
            fontSize:12
        }
    },{      
        type:"rect",
        left:20,
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
        legend: [
            {
            orient: 'vertical',
            top:'30%',
            left:'50%',
            data:['资源中心','公安局','交通局','药监局','人社局'],
            itemWidth: 10,
            itemHeight: 5,
            selectedMode:false,
            formatter: function (params) {
                //console.log(params); //params为data数据
                let count = 0,len=pie1_option.series[0].data.length,series=pie1_option.series[0];
                for(let i = 0;i < len; i++) {
                    count += series.data[i].value;
                }
                for (let i = 0; i < len; i++) {
                    if (series.data[i].name == params) {
                        return params +"（"+ series.data[i].value+"）"+  Math.floor((series.data[i].value/count)*10000)/100 +"%";
                    }
                    //console.log(count+=option.series[0].data[i].value);
                } 
            },
            padding: [2, 10]
        }],
    series: [
        {
            name: '归属',
            type: 'pie',
            radius: ['40%', '80%'],
            center: ['20%', '60%'],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '16x',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:pie1_json
        },
        {
          silent:true,
          name:'归属',
          type:'pie',
          radius: ['0', '40%'],
          avoidLabelOverlap: false,
          itemStyle:{
            color:'#fff'
          },
          data:[0],
          center:['20%%','60%'],
          hoverOffset:0,
          clockwise:false,
          label:{
            show:true,
            position:'center',
            color: '#333',
            formatter: '{a}',
            fontSize:20,
            fontWeight: 500
          }
        }
    ]
};

//************************************************************* */

var dom2 = document.getElementById("pie2");
var myChart2 = echarts.init(dom2);
var pie2_option = null;

var pie2Data = [200,145,234];
var pie2_json = [
  {value:200, name:'资源表',itemStyle:{color:'#71DEBF'}},
  {value:145, name:'业务表',itemStyle:{color:'#FF4B7B'}},
  {value:234, name:'应用表',itemStyle:{color:'#4C89FC'}}
];
function shift2Data(shit) {
  pie2Data.push(randomDate());
  if(shit){
    pie2Data.shift();
  }
  pie2_json = [
    {value:pie2Data[0], name:'资源表',itemStyle:{color:'#71DEBF'}},
    {value:pie2Data[1], name:'业务表',itemStyle:{color:'#FF4B7B'}},
    {value:pie2Data[2], name:'应用表',itemStyle:{color:'#4C89FC'}}
  ];

}

pie2_option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%) "
    },
    color:['#D06052','#E29F39','#4C9BC7'],   //环形颜色
    legend: [
        {
        orient: 'vertical',
        right:20,
        top:'middle',
        left:'50%',
        data:['资源表','业务表','应用表'],
        selectedMode:false,
        itemWidth: 10,
        itemHeight: 5,
        formatter: function (params) {
            //console.log(params); //params为data数据
            let count = 0,len=pie2_option.series[0].data.length,series=pie2_option.series[0];
            for(let i = 0;i < len; i++) {
                count += series.data[i].value;
            }
            for (let i = 0; i < len; i++) {
                if (series.data[i].name == params) {
                    return params +"（"+ series.data[i].value+"）"+  Math.floor((series.data[i].value/count)*10000)/100 +"%";
                }
                //console.log(count+=option.series[0].data[i].value);
            } 
        },
        padding: [2, 10]
    }],
    series: [
        {
            name: '归属',
            type: 'pie',
            radius: ['40%', '80%'],
            center: ['20%', '50%'],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '16x',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:pie2_json
        },
        {
          silent:true,
          name:'类型',
          type:'pie',
          radius: ['0', '40%'],
          avoidLabelOverlap: false,
          itemStyle:{
            color:'#fff'
          },
          data:[0],
          center:['20%%','50%'],
          hoverOffset:0,
          clockwise:false,
          label:{
            show:true,
            position:'center',
            color: '#333',
            formatter: '{a}',
            fontSize:20,
            fontWeight: 500
          }
        }
    ]
};



//*********************************************************
var dom3 = document.getElementById('line1'); 
var myChart3 = echarts.init(dom3);

//line  数据
var line1_data1 = [820, 732, 501, 1234, 790, 330, 820,820, 732, 501, 1234, 790];
var line1_data2 = [520, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290];

function shift_line1(state){
  line1_data1.push(Math.round(Math.random()*1000 + 50));
  line1_data2.push(Math.round(Math.random()*1000 + 50));
  if(state) {
    line1_data1.shift();
    line1_data2.shift();
  }
}


//图表配置
var line1_option = {
  tooltip: {
      show: true,
      trigger: 'axis',
      // showContent:true,
      // alwaysShowContent:true,
      // position: [270,60],
      // extraCssText: 'height:160px;width:50px;font-size:2px;background-color:#93a4d8;opacity:0.7;',
      // axisPointer: {
      //     type: 'shadow',
      //     shadowStyle:{
      //       color:'#93a4d8',
      //       opacity:0
      //     },
        formatter: function (param) {
          var res = '';
          var month = '';
  
          //console.log(param)
          param.forEach(function(item){
              month = item.axisValue;
              res +=  item.marker + "" + item.seriesName+':'+ item.value+'<br>';
          })
          return month +'月<br/>'+ res;
        }
  },
  graphic: [{    
      type:"text",
      left:43,
      top:10,
      silent: true,
      style:{
          text:"数据更新信息",
          textAlign:"center",
          fill:"#000",
          fontSize:12
      }
  },{      
      type:"rect",
      left:32,
      top:10,
      silent: true,
      shape: {
          width: 5,
          height: 10
      },
      style: {
          fill: '#5874C8'
      }
  }  
],
  xAxis: [
      {
      gridIndex: 0,
      type: 'category',
      boundaryGap: false, //       x轴左右移动        
      nameTextStyle: {
          color: ['#aeaeae']
      },
      axisTick: {
          show:false
      },
      axisLine:{
          lineStyle:{
              color:'#b0bebf',
              width:1
          }
      },
      data: [0 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      axisLabel: {
          show: true,
          formatter: function(params) {
              if(params == 0) {
                  return '';
              }
              return params + '月';
          }
      }
  }
],
  yAxis: [
      {   
          gridIndex: 0,
          name: '数据量（万）',
          type: 'value',
          max:1600,
          min: 0,
          minInterval: 400,
          axisTick: {
              show: false //去掉坐标轴线
          },
          axisLine:{
              lineStyle:{
                  color:'#b0bebf',
                  width:1
              }
          },
          axisLabel:{
              interval:0,
              margin: 41,
              textStyle: {
                  align:'left',
                  baseline:'middle'
              }
          } 
      }
  ],
  grid:{
    bottom: '20',
    right: '15'
  },
  series : [
      {   
          xAxisIndex: 0,
          yAxisIndex: 0,
          name:'新增',
          type:'line',
          symbol: "none",//去掉折线上的点
          smooth: true,   //线性平滑
          z: 10,
          //stack: '总量',
          areaStyle: {
              normal: {
              color: '#a1e9d5'
          }
      },
      itemStyle: {  
          color:'#a1e9d5' 
      },
      
      data: [0].concat(line1_data1)
      },
      {   
          xAxisIndex: 0,
          yAxisIndex: 0,
          name:'修改',
          type:'line',
          symbol: "none", //去掉折线上的点
          smooth: true,
          //stack: '总量',
          areaStyle: {
              normal: {
              color: '#8b9dd5'
          }
          },
          itemStyle : {  
            color:'#8b9dd5' 
          },
          data:[0].concat(line1_data2)
      }



  ]
};

//矩形块数据
var rect_data = [1799,1999,2300];
var res = $(".list_info>ul>li>span:first");
//console.log(res);

setInterval(function(){
  
  
  shift1Data(true);
  pie1_option.series[0].data = pie1_json;

  shift2Data(true);
  pie2_option.series[0].data = pie2_json;

  shift_line1(true);
  line1_option.series[0].data = [0].concat(line1_data1);
  line1_option.series[1].data = [0].concat(line1_data2);
  //给矩形插入数据

  
  myChart1.setOption(pie1_option, true);
  myChart2.setOption(pie2_option, true);
  myChart3.setOption(line1_option, true);

},3000)
myChart1.setOption(pie1_option, true);
myChart2.setOption(pie2_option, true);
myChart3.setOption(line1_option, true);
window.addEventListener('resize',function(){
  myChart1.resize();  
  myChart2.resize();     
  myChart3.resize();
})
})()


!function(){

let dom = document.getElementById("line2")
let myChart = echarts.init(dom)

var base = +new Date('2019-8-7 18:00');
var eightHours = 6 * 3600 * 1000;
var date = [[base,0]];

let hotDate = [28, 26, 24, 22, 23, 20, 18,15, 7.5].reverse()

let addZero = function(num){
  if(num<10){
    return '0'+num
  }
  return num
}

for (var i = 1; i < 11; i++) {
  addData()
}
function addData(shift) {
  var now = new Date(base += eightHours);
  date.push([Date.parse(now),Math.round(Math.random() * 1600 )]);
  if (shift) {
      date.shift();
  }
}
let option = {
  
  tooltip: {
    trigger:'axis',
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
    }
  },
  grid:{
    left: '50',
    right:'20',
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
      text:'注册用户数',
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
      name: '注册用户数',
      type: 'line',
      data: date,
      smooth: true,
      lineStyle:{
        color:{
          type: 'linear',
          colorStops: [{
              offset: 0, color: '#71debf' // 0% 处的颜色
          }, {
              offset: 1, color: '#4c8afb' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        },
        width:4,
        shadowBlur:10,
        shadowColor:'rgba(0,0,0,.3)',
        shadowOffsetY:4,
        
      },
      itemStyle:{
        borderWidth:2,
        borderColor:'#71debf'
      },
      areaStyle:{
        color: '#edf3ff'
      },
      symbolSize:function(value){
        //console.log(JSON.stringify(value))
        let a = new Date(value[0])
        if(+a.getHours()!==0){
          return 0
        }
          return 9
      },
      animation:true
  }]
};

  myChart.setOption(option, true);
  setInterval(function(){
    addData(true)
    option.series[0].data = date
    myChart.setOption(option, true);
  },3000)

//......................................................................


let dom2 = document.getElementById("line3")
let myChart2 = echarts.init(dom2)
let option2 = {
  graphic:[{
    type:'text',
    top:12,
    left:'36',
    silent: true,
    style:{
      text:'资源审批情况',
      fill:"#666", // 字体颜色
      font:'300 12px "Microsoft YaHei", sans-serif',
      }
    },
    {      
      type:"rect",
      left:'25',
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
    axisPointer: {
        type: 'line'
    },

},
legend: {
    data: [{
        name: '拒绝',
        icon: 'circle'
      }, {
        name: '通过',
        icon: 'circle',
      }],
    right: '5%',
    top:10,
    textStyle:{},
    itemWidth:15
},
grid:{
  left: '50',
  right:'5%'
},
xAxis: {
    data: ["1","2","3","4","5","6","7","8","9","10","11","12"],
    boundaryGap:false,
    axisTick:{
      show:false
    },
    axisLine:{
      lineStyle:{
        color:'rgb(158,158,158)'
      }
    },
    axisLabel:{
      padding:[10,0,0,0]
    }
},
yAxis: {
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
    name: '通过',
    type: 'line',
    data: [20, 19, 26, 30, 26, 23, 28, 25, 16, 10, 7, 0],
    smooth:true,
    z:10,
    areaStyle:{
      color: '#f45a83',
      opacity:1
      },
    symbolSize:1,
    lineStyle:{
      color:'transparent'
      },
      itemStyle:{
        color:'#f45a83'
      }
    },
    {
      name: '拒绝',
      type: 'line',
      data: [20, 40, 30, 58, 56, 66, 50, 42, 36, 30, 45, 46],
      smooth:true,
      areaStyle:{
        color: '#8de5cc',
        opacity:1
      },
      symbolSize:1,
      lineStyle:{
        color:'transparent'
      },
      itemStyle:{
        color:'#8de5cc'
      }
    }]
}

myChart2.setOption(option2, true);

//...............................................

let dom3 = document.getElementById("line4")
let myChart3 = echarts.init(dom3)
let option3 = {
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'cross'
      }
  },
  grid:{
    left: '55',
    right:'15'
  },
  graphic:[{
    type:'text',
    top:12,
    left:'20',
    silent: true,
    style:{
      text:'热门资源',
      fill:"#666", // 字体颜色
      font:'300 12px "Microsoft YaHei", sans-serif',
      }
    },
    {      
      type:"rect",
      left:'10',
      top:12,
      silent: true,
      shape: {
          width: 5,
          height: 10
      },
      style: {
          fill: '#5874C8'
      },  
    }
    ],
  yAxis: {
      data: ["aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa","aaaa"], 
      
      axisTick:{
        show:false
      },
      axisLine:{
        show:false
      },
      axisLabel:{
        color:'#999',
        padding:[0,12,0,0]
      },
  },
  xAxis: {
    axisTick:{
      show:false
    },
    splitLine:{
      show:false
    },
    axisLine:{
      show:false
    },
    axisLabel:{
      padding:[10,0,0,0],
      color:'#999'
    }
  },
  series: [{
      name: '热门资源',
      type: 'bar',
      id:'hotResouse',
      data: hotDate,
      areaStyle:{
        color: '#edf3ff'
      },
      symbolSize:8,
      itemStyle:{
          color: '#4c89fc'
      },
      barWidth:'5px'
  }]
};

myChart3.setOption(option3, true);

// 图表重绘
window.addEventListener('resize',function(){
  myChart.resize();    
  myChart2.resize();    
  myChart3.resize();   
})

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
    let btn_value = $(this).parent().prev().prop ('firstChild').nodeValue
    $(this).parent().prev().prop ('firstChild').nodeValue = value
    if(btn_value === value){
      return 0
    }else if(value.indexOf('多')){
      hotDate.reverse()
      myChart3.setOption(option3, true)
    }else{
      hotDate.reverse()
      myChart3.setOption(option3, true)
    }
  })
})

}()

//********************************************************************二
