(function(){
  var dom3 = document.getElementById("item3");
  myChart3 = echarts.init(dom3);
  var dom3_option = null;
  
  dom3_option = {
    graphic: [{
        type:'text',
        top:10,
        left:'12%',
        silent: true,
        style:{
          text:'事件',
          fill:"#666", // 字体颜色
          font:'300 12px "Microsoft YaHei", sans-serif',
          }
        },
        {      
          type:"rect",
          left:'8%',
          top: 10,
          silent: true,
          shape: {
              width: 5,
              height: 10
          },
          style: {
              fill: '#5874C8'
          }
      },{
        type: 'group',
        right: '0%',
        top:10,
        children: [
            {
                type: 'text',
                z: 100,
                top:2,
                right: -70,
                style: {
                    text:"查看更多",
                    fontWeight: 'bold',
                    fill: '#565d74'
                }
            },{
                type: 'image',
                style: {
                    image: './img/plus.png',
                    //right: -0,

                    width: 15,
                    height: 15,
                    color: '#ebeff8'
                }
            }
        ]
      },{
        type: 'group',
        left:'center',
        top:50,
        children: [
            {
                type: 'rect',
                left: 'center',
                top: 'center',
                shape: {
                    width: 300,
                    height: 60,
                    r: [8,8,8,8]
                },
                style: {
                    fill: '#71debf',
                    textLineHeight: 20
                }
            },
            {
                type: 'text',
                z: 100,
                top: 'middle',
                left: -130,
                style: {
                    text:"提示 : 从前置机数据监控，预计人口信息数\n据表将会迎来大量数据",
                    font: '12px "宋体", sans-serif',
                    fontWeight: 'bold',
                    textLineHeight: 14,
                    fill: 'white'
                }
            },{
                type: 'image',
                style: {
                    image: './img/cancel.png',
                    top: 'middle',
                    x:115,
                    y:-10,
                    width: 20,
                    height: 20,
                    color: '#ebeff8'
                }
            }
        ]
    },{
        type: 'group',
        id: 'textGroup2',
        left:'center' ,
        top:125,
        children: [
            {
                type: 'rect',
                left: 'center',
                top: 'center',
                shape: {
                    width: 300,
                    height: 60,
                    r: [8,8,8,8]
                },
                style: {
                    fill: '#ff4b7b',
                    textLineHeight: 20
                }
            },
            {
                type: 'text',
                z: 100,
                top: 'middle',
                left: -130,
                style: {
                    text:"警告! 192.168.51.31 磁盘即将写满",
                    font: '12px "宋体", sans-serif',
                    textLineHeight: 14,
                    fill: 'white'
                }
            },{
                type: 'image',
                style: {
                    image: './img/cancel.png',
                    top: 'middle',
                    x:115,
                    y:-10,
                    width: 20,
                    height: 20,
                    color: '#ebeff8'
                }
            }
        ]
    }
    ],
    grid:{
      left: '10%',
      right:'5%',
      bottom:'40',
      top:'50'
    }
  }


  var dom2 = document.getElementById("item2")
  myChart2 = echarts.init(dom2)

  var base = +new Date('2019-8-7 18:00')
  var eightHours = 6 * 3600 * 1000
  var date = [[base,0]]
  let addZero = function(num){
  if(num<10){
      return '0'+num
  }
  return num
  }
  for (var i = 1; i < 11; i++) {
      var now = new Date(base += eightHours)
      date.push([Date.parse(now),Math.round(Math.random() * 100 )])
  }


  let dom2_option = {
      tooltip: {
        trigger:'axis',
      },
      legend: {
        data: [{
            name: '负载',
            icon: 'circle'
          }],
        right: '3%',
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
            color:'#666',
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
            color:'rgba(0,0,0,.1)'
          }
        },
        axisTick:{
          show:false
        },
        splitLine:{
          lineStyle:{
            color:['rgba(0,0,0,.1)'],
          }
        },
        axisLabel:{
          color:'#3d3d3d'
        }
      },
      grid:{
        left: '10%',
        right:'5%',
        bottom:'40',
        top:'50'
      },
      dataZoom: [{
        type: 'inside',
        throttle: 50
        }],
      graphic:[{
        type:'text',
        top:10,
        left: '10%',
        silent: true,
        style:{
          text:'负载变化',
          fill:"#666", // 字体颜色
          font:'300 12px "Microsoft YaHei", sans-serif',
          }
        },
        {      
          type:"rect",
          left:'8%',
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
          name: '负载',
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
      }]
    }



    var dom1 = document.getElementById("item1");
    myChart1 = echarts.init(dom1);
    var dom1_option = null;
    

    var dataStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            shadowBlur: 40,
            borderWidth: 10,
            shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
        }
    };
    var placeHolderStyle = {
        normal: {
            color: '#ebeff8',
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: '#ebeff8'
        }
    };

    dom1_option = {
        // title: {//标题组件
        //     text: '35%',
        //     x: '25%',
        //     y: '50%',
        //     textStyle: {
        //         fontWeight: 'normal',
        //         fontSize: 24,
        //         color: "#444c67",
        //     }
        // },
        tooltip:{
            formatter: "-{a}- <br/>{b}: {d}%"
        },
        backgroundColor: '#fff',
        legend: {//图例组件
            orient: 'vertical',
            //icon: 'circle',//默认rect
            top: '35%',
            left:'70%',
            itemWidth:12,
            itemHeight:4,
            itemGap:20,
            data: ['内存占用', '磁盘占用', 'cpu占用'],
            textStyle: {
                color: '#444c67'
            }
        },
        graphic: [{   //机房平面图 
            type:"text",
            left:28,
            top:10,
            silent: true,
            style:{
                text:"主机负载",
                textAlign:"center",
                fill:"#000",
                fontSize:12
            }
        },{      
            type:"rect",
            left:10,
            top:10,
            silent: true,
            shape: {
                width: 5,
                height: 10
            },
            style: {
                fill: '#5874C8'
            }
        },{
            type: 'group',

        }],
        series: [{
            name: 'cpu',
            type: 'pie',
            clockWise: true,
            radius: ['58.58%', '63%'],
            center:['32%','55%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 270,
            label:{
                borderRadius:'10',
            },
            data: [{
                    value: 154.6,
                    name: 'cpu占用',
                    itemStyle: {
                        normal: {
                            color: '#71debf'
                        }
                    },
                    
                },
                {
                    value: 45.4,
                    name: 'cpu剩余',
                    itemStyle: placeHolderStyle
                },
            ]
        },
        {
            name: '磁盘',
            type: 'pie',
            clockWise: true,
            radius: ['46%', '50.4%'],
            center:['32%','55%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 270,
            data: [{
                    value: 86.7,
                    name: '磁盘占用',
                    itemStyle: {
                        normal: {
                            color: '#4c89fc'
                        }
                    }
                },
                {
                    value: 43.3,
                    name: '磁盘剩余',
                    itemStyle: placeHolderStyle
                },
            ]
        },
        {
            name: '内存',
            type: 'pie',
            clockWise: true,
            radius: ['33.38%', '37.79%'],
            center:['32%','55%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 270,
            data: [{
                    value: 20,
                    name: '内存占用',
                    itemStyle: {
                        normal: {
                            color: '#fade66'
                        }
                    }
                },
                {
                    value: 15,
                    name: '内存剩余',
                    itemStyle: placeHolderStyle
                },
            ]
        },{
            name: 'line-inner-circle',
            type: 'pie',
            silent: true,
            clockWise: true,
            radius: ['0%', '33.9%'],
            center:['32%','55%'],
            hoverAnimation: false,
            startAngle: 270,
            data: [{
                    value: 35,
                    name: '进度',
                    
                }
            ],
            label:{
                show:true,
                position: 'center',
                color:'#3d3d3d',
                fontSize:'24',
                formatter: '{c}%',
                fontWeight: '600'
            },
            itemStyle:{
                color: '#fff'
            }
        }]
    }

    
    myChart1.setOption(dom1_option, true);
    myChart2.setOption(dom2_option, true);
    myChart3.setOption(dom3_option, true);
    window.addEventListener('resize',function(){
        myChart1.resize();  
        myChart2.resize();  
        myChart3.resize();    
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
})