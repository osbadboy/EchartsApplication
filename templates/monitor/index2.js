(function () { 
    var dom1 = document.getElementById("operation1");
    myChart1 = echarts.init(dom1);
    var option1 = null;
    var data = 35;

    var max = 100;
    var titledata = 35;
    function changedata(){
        return    titledata = Math.round(Math.random()*100);
    }

    option1 = {
        backgroundColor: '#fff',
        tooltip: {
            trigger: 'item',
            show: true,
            formatter: "{b} : <br/>{d}%",
            backgroundColor: 'rgba(0,0,0,0.7)', // 背景
            padding: [8, 10], //内边距
            extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
        },
        graphic: [
            {   //数据更新信息 
                type:"text",
                left:'9%',
                top:20,
                silent: true,
                style:{
                    text:"集群主机数量",
                    textAlign:"center",
                    fill:"#000",
                    fontSize:12
                }
            },{      
                type:"rect",
                left:'6%',
                top:20,
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
        series: [
            {
                type: 'liquidFill',
                name: '- Number -',
                radius: '55%', //调整大小
                silent: true,
                shape: 'circle', //修改形状，目前支持	'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                center: ['50%','55%'],
                outline: {
                    show: false
                },
                backgroundStyle: {//内图
                    borderWidth: 0,
                    borderColor: 'rgb(255,0,255)',
                    color: 'rgb(76,137,252,0.8)'
                },
                data: [{name:titledata,value:0.35,direction: 'left'},0.25], //其中第一个数值由键值对表示
                color: ['#71debf', '#3aeaff'],
                label: {
                    formatter: function(params) { //'{m|{a}}\n{n|{c}}'
                        return '{m|'+params.seriesName+'}\n{n|'+params.data.name+'.0}';
                    },
                    rich:{
                        m:{
                            color: '#fff',
                            fontSize:10
                        },
                        n:{
                            color: '#fff',
                            fontSize:26,
                            lineHeight: 80,
                            padding: [0, 0, -30, 0]
                        }
                    }
                }
            },{
                id:'first',
                name: '饼图二',
                type: 'pie',   
                radius: ['60%', '63%'],
                center: ['50%','55%'],
                label: {
                    show: false
                },
                data: [{
                    value: titledata,
                    name: '占用率',
                    hoverAnimation: false,
                    itemStyle: {
                        normal: {
                            color: '#4c89fc'
                        }
                    }
                }, {
                    value: max-titledata,
                    name: '占位',
                    label: {
                        normal: {
                            formatter: '\n完成率',
                            textStyle: {
                                color: '#4c89fc',
                                fontSize: 20
                            }
                        }
                    },
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#ebeff8'
                        },
                        emphasis: {
                            color: '#ebeff8'
                        }
                    },
                    hoverAnimation: false
                }]
            }
        ]
    };


    setInterval(function(){
  
  
        
        titledata = Math.round(Math.random()*100);
        option1.series[0].data[0]["name"] = titledata;
        option1.series[1].data[0]["value"] = titledata;
        option1.series[1].data[1]["value"] = max - titledata;

        myChart1.setOption(option1)
      
      },6000)
    if (option1 && typeof option1 === "object") {
        myChart1.setOption(option1,true);
        window.addEventListener('resize',function(){
            myChart1.resize();
        });
    }
    

 })();


//第二个图
 (function () { 
    var dom2 = document.getElementById("operation2");
    myChart2 = echarts.init(dom2);
    var option2 = null;

    let mock_data = [
        {name: 'CPU占用',value: 80,total:125},
        {name: '磁盘已用',value: 20,total:155},
        {name: '内存占用',value: 68,total:225}
      ]
      function data_update(){
        mock_data = [
          {name: 'CPU占用',value: Math.round(Math.random()*100),total:100},
          {name: '磁盘已用',value:Math.round(Math.random()*100),total:100},
          {name: '内存占用',value: Math.round(Math.random()*100),total:100}
        ]
      }

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

    option2 = {
        backgroundColor: '#fff',
        tooltip: {
            trigger: 'item',
            show: true,
            formatter: "{b} : <br/>{d}%",
            backgroundColor: 'rgba(0,0,0,0.7)', // 背景
            padding: [8, 10], //内边距
            extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
        },
        legend: {//图例组件
            orient: 'vertical',
            //icon: 'circle',//默认rect
            top: '35%',
            left:'72%',
            itemWidth:12,
            itemHeight:4,
            itemGap:20,
            data: ['内存占用', '磁盘占用', 'cpu占用'],
            textStyle: {
                color: '#444c67'
            }
        },
        graphic: [
            {    //集群平均负载
                type:"text",
                left:'9%',
                top:20,
                silent: true,
                style:{
                    text:"集群平均负载",
                    textAlign:"center",
                    fill:"#000",
                    fontSize:12
                }
            },{      
                type:"rect",
                left:'6%',
                top:20,
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
        series: [
            {
                name: 'Line 1',
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
                        }
                    },
                    {
                        value: 45.4,
                        name: 'cpu剩余',
                        itemStyle: placeHolderStyle
                    },
                ]
            },
            {
                name: 'Line 2',
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
                        value: 13.3,
                        name: '磁盘剩余',
                        itemStyle: placeHolderStyle
                    },
                ]
            },
            {
                name: 'Line 3',
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
                itemStyle: {
                    color:'#fff'
                },
                hoverAnimation: false,
                startAngle: 270,
                data: [86.7],
                label:{
                    show:true,
                    position:'center',
                    color: '#333',
                    formatter: [
                        '{mun|{c}%}','{name|磁盘占用}'
                    ].join('\n'),
                    rich:{
                    "mun": {
                        color: '#333',
                        fontSize: 30
                    },
                    "name": {
                        color: '#333',
                        fontSize: 12
                    }
                    },
                    fontSize:24,
                    fontWeight: 500
                  }
            }
        ]
    };


    if (option2 && typeof option2 === "object") {
        myChart2.setOption(option2, true);
        window.addEventListener('resize',function(){
            myChart2.resize();
        });
        setInterval(function(){
            data_update()
            option2.series.forEach(function(item, index){
              if(item.name === 'line-inner-circle'){
                item.data[0] = mock_data[0].value
                
              }
              else{
                item.data[0].value = mock_data[index].value
                item.data[1].value = mock_data[index].total - item.data[0].value
              }
              
            })
            myChart2.setOption(option2);
          },3000)
    }

 })();





 //第三个图
 (function () { 
    var dom3 = document.getElementById("operation3");
    myChart3 = echarts.init(dom3);
    var option3 = null;
    var responseData = 20;

    option3 = {
        backgroundColor: '#fff',
        tooltip: {
            trigger: 'item',
            show: true,
            formatter: "{b} : <br/>{d}%",
            backgroundColor: 'rgba(0,0,0,0.7)', // 背景
            padding: [8, 10], //内边距
            extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
        },
        graphic: [
            {    //平均响应时间
                type:"text",
                left:'9%',
                top:20,
                silent: true,
                style:{
                    text:"平均响应时间",
                    textAlign:"center",
                    fill:"#000",
                    fontSize:12
                }
            },{      
                type:"rect",
                left:'6%',
                top:20,
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
        series: [
            {
                name: 'g1',
                type: 'gauge',
                z: 2,
                min: 0,
                max: 100,
                startAngle: 180,
                endAngle: 0,
                splitNumber: 4,
                radius: '92%',
                center: ['50%', '75%'],
                axisLine: {            // 坐标轴线
                    show:false,
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 0,
                        color: [
                           [1, '#ebeff8']
                        ],
                    }
                },
                axisLabel:{
                    show:true,
                    distance: 0,
                    textStyle: {
                        color: '#ebeff8',
                        fontSize: 12,
                        fontWeight: 500
                    }
                },
                title:{
                    show:false
                },
                detail:{
                    show:false
                },
                axisTick: {
                    show:true,
                    length: 7,
                    lineStyle:{
                        width:1,
                        color:'#979797'
                    },
                    splitNumber: 10
                },
                splitLine: { // 分隔线
                    show:false
                }
            },{
                name: 'g2',
                type: 'gauge',
                z: 5,
                min: 0,
                max: 100,
                startAngle: 180,
                endAngle: 0,
                splitNumber: 4,
                radius: '91.5%',
                center: ['50%', '75%'],
                axisLine: {            // 坐标轴线
                    show:false,
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 6,
                        color: [
                           [responseData/100, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#fff'
                                },
                                {
                                    offset: 0.4,
                                    color: '#92e6ce'
                                },
                                {
                                    offset: 1,
                                    color: '#71debf'
                                }
                            ])]
                        ],
                    }
                },
                splitLine: {
                    show: false,
                  },
                  axisLabel: {
                    show: false
                  },
                  axisTick: {
                    show: false
                  },
                  pointer: {
                    show: false
                  },
                  detail: {
                      show: false
                  }
            },
            {
            
            
                type: 'gauge',
                radius: '80%',
                center: ['50%', '75%'],
                splitNumber: 0, //刻度数量
                startAngle: 180,
                endAngle: 0,
                axisLine: {
                  show: true,
                  lineStyle: {
                    width: 6,
                    color: [
                        [1, '#ebeff8']
                    ]
                  }
                },
                //分隔线样式。
                splitLine: {
                  show: false,
                },
                axisLabel: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                pointer: {
                  show: false
                },
                title: {
                  show: true,
                  offsetCenter: [0, 0], // x, y，单位px
                  textStyle: {
                    color: '#4c5471',
                    fontSize: 16
                  }
                },
                //仪表盘详情，用于显示数据。
                detail: {
                  show: true,
                  offsetCenter: [0, -30],
                  color: '#ddd',
                  fontSize: 15,
                  formatter: function(params) {
                    return params+'MS';
                  },
                  textStyle: {
                    fontSize: 30,
                    color: '#71DEBF'
                  }
                },
              data: [{
                name: "当前响应时间",
                value: responseData
                }]
              }
        ]
    };

    setInterval(function(){
        
        responseData = Math.round(Math.random()*100);
        option3.series[1].axisLine.lineStyle.color[0][0] = responseData/100;
        option3.series[2].data[0]["value"] = responseData;
        myChart3.setOption(option3);
      },3000)


    if (option3 && typeof option3 === "object") {
        myChart3.setOption(option3, true);
        window.addEventListener('resize',function(){
            myChart3.resize();
        });
    }

 })();



  //第四个图
  (function () { 
    var dom4 = document.getElementById("operation4");
    myChart4 = echarts.init(dom4);
    var option4 = null;

    option4 = {
        backgroundColor: '#fff',
        graphic: [
            {    //查看更多
                type:"text",
                left:'9%',
                top:20,
                silent: true,
                style:{
                    text:"查看更多",
                    textAlign:"center",
                    fill:"#000",
                    fontSize:12
                }
            },{      
                type:"rect",
                left:'6%',
                top:20,
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
                id: 'textGroup1',
                left:'center',
                top:80,
                children: [
                    {
                        type: 'rect',
                        left: 'center',
                        top: 'center',
                        shape: {
                            width: 300,
                            height: 55,
                            r: [5]
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
                        left: -135,
                        style: {
                            text:"提示 : 从前置机数据监控，预计人口信息数\n据表将会迎来大量数据",
                            font: '12px "宋体", sans-serif',
                            textLineHeight: 14,
                            fill: '#fff',
                        }
                    },{
                        type: 'image',
                        style: {
                            image: '../operation/img/cancel.png',
                            top: 'middle',
                            x:115,
                            y:-10,
                            width: 20,
                            height: 20,
                            color: '#fff'
                        }
                    }
                ]
            },{
                type: 'group',
                id: 'textGroup2',
                left:'center',
                top:160,
                children: [
                    {
                        type: 'rect',
                        left: 'center',
                        top: 'center',
                        shape: {
                            width: 300,
                            height: 55,
                            r: [5]
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
                        left: -135,
                        style: {
                            text:"警告! 192.168.51.31 磁盘即将写满",
                            font: '12px "宋体", sans-serif',
                            textLineHeight: 14,
                            fill: '#ebeff8',
                            
                        }
                    },{
                        type: 'image',
                        style: {
                            image: '../operation/img/cancel.png',
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
        ]
    };


    if (option4 && typeof option4 === "object") {
        myChart4.setOption(option4, true);
        window.addEventListener('resize',function(){
            myChart4.resize();
        });
    }

 })();