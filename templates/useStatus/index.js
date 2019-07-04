(function(){

  /*******************模拟数据******************************* */
  var base = +new Date(2018, 1, 1);
  var oneMonth = 30 * 24 * 3600 * 1000;
  var oneDay = 24 * 3600 * 1000;
  var date = []
  var date2 = []
  var date3 = []

  var data = [];
  var data2 = [] 
  var data3 = [] 
  var now = new Date(base);
  var now2 = new Date(base);

  
  function addZero(num){
    if(num<10){
      return '0'+num
    }
    return num
  }
  function addData(shift) {
      month = [now.getMonth()];
      day = [addZero(now2.getMonth()),addZero(now2.getDate())].join('/');
      date.push(month);
      date2.push(month);
      date3.push(day);
      data.push(Math.round(Math.random()*100))
      data2.push(Math.round(Math.random()*100))
      data3.push(Math.round(Math.random()*80) + 20)
      if (shift) {
          date.shift();
          data.shift();
          date2.shift();
          data2.shift();
          date3.shift();
          data3.shift();
      }
      now = new Date(+new Date(now) + oneMonth);
      now2 = new Date(+new Date(now2) + oneDay);
  }

  for (var i = 0; i < 12; i++) {
      addData();
  }

  /*******************模拟数据******************************* */

  let part_one_sqsl = document.getElementById("part_one_sqsl")
  let myChart = echarts.init(part_one_sqsl)

  let part_one_sqsl_option = {
    graphic:[{
      type:'text',
      top:12,
      left:'18',
      silent: true,
      style:{
        text:'申请数量变化图',
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
      showContent:true,
      axisPointer: {
          type: 'shadow',
          shadowStyle:{
            color:'#93a4d8',
            opacity:.7
          }
      },
      formatter: '{b}月<br/>平均申请{c}张',
      backgroundColor:'#98aadc',
      textStyle:{
        fontSize:12
      }
  },
  grid:{
    left: '30',
    right:'15',
    top:'50'
  },
  xAxis: {
      data: date,
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
          return value + '月'
        }
      },
      
  },
  yAxis: {
    axisTick:{
      show:false
    },
    axisLine:{
      lineStyle:{
        color:'#999'
      }
    }
  },
  series: [{
      name: '申请数量',
      type: 'line',
      data: data,
      smooth:true,
      z:10,
      areaStyle:{
        color: '#71debf',
        opacity:.8
        },
      symbolSize:0,
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
      symbolSize:function(value,params){
        if(params.name == '2'||params.name == '6'||params.name == '10'){
          return '10'
        }
        return '0'
      }
      }]
  }

  myChart.setOption(part_one_sqsl_option, true)
  setInterval(function () {
    addData(true);
     part_one_sqsl_option.series[0].data = data
    part_one_sqsl_option.xAxis.data = date
    myChart.setOption({
        xAxis: {
            data: date
        },
        series: [{
            name:'申请数量',
            data: data
        }]
    });
  }, 3000);

/****************************************************** */

  let part_one_spsj = document.getElementById("part_one_spsj")
  let myChart2 = echarts.init(part_one_spsj)

  let part_one_spsj_option = {
    graphic:[{
      type:'text',
      top:12,
      left:'18',
      silent: true,
      style:{
        text:'审批事件情况表',
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
      axisPointer: {
          type: 'shadow',
          shadowStyle:{
            color:'#93a4d8',
            opacity:.7
          },
          label:{
            show:true,
          }
      },
  },
  legend: {
      data: [{
          name: '通过',
          icon: 'circle'
        }, {
          name: '拒绝',
          icon: 'circle',
        }],
      right: '15',
      top:10,
      textStyle:{
        padding: [0, 0,0,5],
        color:'#777'
      },
      itemWidth:10
  },
  grid:{
    left: '50',
    right:'15',
    top:'50'
  },
  xAxis: {
      data: date,//["1","2","3","4","5","6","7","8","9","10","11","12"]
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
          return value + '月'
        }
      },
      
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
      data: data,//[400, 500, 631, 846, 521, 421, 431, 613, 321, 798, 421, 212]
      smooth:true,
      areaStyle:{
        color: '#ff3e6b',
        opacity:.7
        },
      symbolSize:1,
      lineStyle:{
        color:'transparent'
        },
        itemStyle:{
          color:'#ff3e6b'
        }
      },
      {
        name: '拒绝',
        type: 'line',
        data: data2, //[200, 400, 342, 242, 563, 456, 205, 321, 457, 500, 670, 800]
        smooth:true,
        z:10,
        areaStyle:{
          color: '#588af4',
          opacity:.7
        },
        symbolSize:1,
        lineStyle:{
          color:'transparent'
        },
        itemStyle:{
          color:'#588af4'
        }
      }]
    }

  myChart2.setOption(part_one_spsj_option, true)
  setInterval(function () {
    
    //part_one_spsj_option.series[0].data = data
    //part_one_spsj_option.xAxis.data = date
    myChart2.setOption({
        xAxis: {
            data: date
        },
        series: [{
            name:'通过',
            data: data
        },{
            name:'拒绝',
            data: data2
        }]
    });
  }, 3000);

/***********************************************************/

  let part_two_yyk = document.getElementById("part_two_yyk")
  let myChart3 = echarts.init(part_two_yyk)

  let yyk_data = []
  function yyk_update(){
    yyk_data = []
    for(let i=0;i<12;i++) {
      yyk_data.push({value: yyk_ramdom()})
    }
  }
  function  yyk_ramdom(){
    return Math.round(Math.random()*80 + 20)
  }

  let part_two_yyk_option = {
    graphic:[{
      type:'text',
      top:12,
      left:'18',
      silent: true,
      style:{
        text:'应用库每月变化',
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
    dataZoom:[{
      type: 'inside',
      throttle: 50
      }],
    grid:{
      left:'50',
      top:'50',
      right:'15'
    },
    tooltip:{
      trigger:'item',
      formatter:function(params){
        return params.marker + params.name + '月<br/>' + '月变化量：' +params.value;
      }
    },
    xAxis:{
      gridIndex:0,
      data:["1","2","3","4","5","6","7","8","9","10","11","12"],
      axisTick:{
        show: false
      },
      axisLine:{
        show:false
      },
      axisLabel:{
        color: '#666',
        padding: [12,0,0,0],
        formatter: function(value, index){
          return value + '月'
        }
      }
    },
    yAxis:[{
      axisLine:{
        show:false
      },
      axisTick:{
        show: false
      },
      axisLabel:{
        color: '#777',
        padding:[0,8,0,0]
      },
      splitLine:{
        lineStyle:{
          color: ['rgb(240,240,240)']
        }
      }
    }],
    series:[
      {
        type:'bar',
        barWidth: 28,
        data:[{
          name:'1',
          value: 82,
          itemStyle:{
            color: '#588af4'
          }
        },
        {
          name:'2',
          value: 60,
          itemStyle:{
            color: '#ffde4b'
          }
        },
        {
          name:'3',
          value: 42,
          itemStyle:{
            color: '#71debf'
          }
        },
        {
          name:'4',
          value: 82,
          itemStyle:{
            color: '#588af4'
          }
        },
        {
          name:'5',
          value: 60,
          itemStyle:{
            color: '#ffde4b'
          }
        },
        {
          name:'6',
          value: 42,
          itemStyle:{
            color: '#71debf'
          }
        },
        {
          name:'7',
          value: 82,
          itemStyle:{
            color: '#588af4'
          }
        },
        {
          name:'8',
          value: 60,
          itemStyle:{
            color: '#ffde4b'
          }
        },
        {
          name:'9',
          value: 42,
          itemStyle:{
            color: '#71debf'
          }
        },{
          name:'10',
          value: 82,
          itemStyle:{
            color: '#588af4'
          }
        },
        {
          name:'11',
          value: 60,
          itemStyle:{
            color: '#ffde4b'
          }
        },
        {
          name:'12',
          value: 42,
          itemStyle:{
            color: '#71debf'
          }
        }],
      }
    ]
  }

  myChart3.setOption(part_two_yyk_option, true)
  setInterval(function(){
    yyk_update()
    let data = part_two_yyk_option.series[0].data
    data.forEach(function(item, index){
      item.value = yyk_data[index]["value"]
    })
    myChart3.setOption(part_two_yyk_option);
  },3000)

  /****************************************************** */
  let part_tree_yyk = document.getElementById("part_tree_yyk")
  let myChart4 = echarts.init(part_tree_yyk)

 

  let part_tree_yyk_option = {
    graphic:[{
      type:'text',
      top:12,
      left:'18',
      silent: true,
      style:{
        text:'应用表数据变化',
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
    dataZoom:[{
      type: 'inside',
      throttle: 50
      }],
    grid:{
      left:'50',
      top:'50',
      right:'15'
    },
    tooltip:{
      trigger:'item',
      formatter:function(params){
        return params.marker + params.name + '日<br/>' + '日变化量：' +params.value;
      }
    },
    xAxis:{
      gridIndex:0,
      data:["01/01","01/02","01/03","01/04","01/05","01/06","01/07","01/08","01/09","01/10","01/11","01/12"],
      axisTick:{
        show: false
      },
      axisLine:{
        show:false
      },
      axisLabel:{
        color: '#666',
        padding: [12,0,0,0],
        // formatter: function(value, index){
        //   return value + '月'
        // }
      }
    },
    yAxis:[{
      axisLine:{
        show:false
      },
      axisTick:{
        show: false
      },
      axisLabel:{
        color: '#777',
        padding:[0,8,0,0]
      },
      splitLine:{
        lineStyle:{
          color: ['rgb(240,240,240)']
        }
      }
    }],
    series:[
      {
        type:'bar',
        barWidth: 30,
        data:[100,85,59,49,154,79,34,64,98,184,35,48],
        itemStyle:{
          color: '#588af4'
        }
      }
    ]
  }
  myChart4.setOption(part_tree_yyk_option, true)

  setInterval(function(){
    part_tree_yyk_option.xAxis.data = date3
    part_tree_yyk_option.series[0].data = data3
    myChart4.setOption(part_tree_yyk_option);
    },3000)
  window.addEventListener('resize',function(){
    myChart.resize();    
    myChart2.resize();    
    myChart3.resize(); 
    myChart4.resize();  
  })
  
})()
/******************************************************假数据 */



/**************************************************************/
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
  $(".header .icon a").click(function(){
    $(this).addClass('on').siblings().removeClass('on')
    let info =  $(this).data('info')
    if(info === 'picture'){
      $(this).parents('.header').siblings('.echarts-picture').slideDown().siblings('.echarts-table').slideUp()
    }else{
      $(this).parents('.header').siblings('.echarts-table').slideDown().siblings('.echarts-picture').slideUp()
    }
  })
})

layui.use(['laypage', 'layer'], function(){
  var laypage = layui.laypage
  ,layer = layui.layer;
  //总页数大于页码总数
  var data = [
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":1,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":52,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":5,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张是',"time":'2016-11-29',"amount":53,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":2,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":5,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张稍等',"time":'2016-11-29',"amount":5,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":2,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张个',"time":'2016-11-29',"amount":5,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":5,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":0,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":9,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":5,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张谷歌',"time":'2016-11-29',"amount":5,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":5,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":45,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":5,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":5,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张好',"time":'2016-11-29',"amount":5,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":45,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":5,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":55,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":5,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张的',"time":'2016-11-29',"amount":59,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":5,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":5,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":5,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":5,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":55,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张说的',"time":'2016-11-29',"amount":5,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":5,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'},
    {'ID':'SJ3114684',"name":'张三',"time":'2016-11-29',"amount":5,"tablename":'STEER_TFA_9527',"info":'否',"state":'通过'}
    
  ];
  laypage.render({
    elem: 'Page1'
    ,count: data.length //数据总数
    ,jump: function(obj){
      document.getElementById('event').innerHTML = function(){
        var arr = []
        var thisData = data.concat().splice(obj.curr*obj.limit - obj.limit, obj.limit)
        var tr = ''
        layui.each(thisData, function(index, item){
          var td = ''
          for(var value in item){
            td += '<td>' + item[value] +'</td>'
          }
          tr = '<tr>' + td + '</tr>'
          arr.push(tr)
        });
        return arr.join('')
      }();
    }
    ,limit: 5
    ,prev: '<em class="layui-icon layui-icon-left"></em>'
    ,next: '<em class="layui-icon layui-icon-right"></em>'
  });
  laypage.render({
    elem: 'Page2'
    ,count: 25 //数据总数
    ,jump: function(obj){
     // console.log(obj)
    }
    ,limit: 5
    ,prev: '<em class="layui-icon layui-icon-left"></em>'
    ,next: '<em class="layui-icon layui-icon-right"></em>'
  });
  laypage.render({
    elem: 'Page3'
    ,count: 25 //数据总数
    ,jump: function(obj){
      //console.log(obj)
    }
    ,limit: 5
    ,prev: '<em class="layui-icon layui-icon-left"></em>'
    ,next: '<em class="layui-icon layui-icon-right"></em>'
  });
})