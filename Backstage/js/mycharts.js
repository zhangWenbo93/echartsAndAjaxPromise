var httpUrl = {
    project: 'https://easy-mock.com/mock/59afa9cce0dc6633419eedb5/example/getData1',
    all: 'https://easy-mock.com/mock/59afa9cce0dc6633419eedb5/example/getData2',
    four: 'https://easy-mock.com/mock/59afa9cce0dc6633419eedb5/example/getData3',
    piedata: 'https://easy-mock.com/mock/59afa9cce0dc6633419eedb5/example/getData4'
}
var code = 1;
var YearDHChart = echarts.init(document.getElementById('year-dh')); // 最近一年到户
var JDZJChart = echarts.init(document.getElementById('jd-zj')); // 各区县最近四个季度资

var JZLYChart = echarts.init(document.getElementById('zj-ly')); // 资金来源分布情况
var ZJLXChart = echarts.init(document.getElementById('zj-lx')); // 资金类型分布情况******
var ZJZT1Chart = echarts.init(document.getElementById('zj-zt1')); // 资金状态分布情况
var ZJZT2Chart = echarts.init(document.getElementById('zj-zt2')); // 资金状态分布情况
var XMLXChart = echarts.init(document.getElementById('xm-lx')); // 项目类型分布情况*******

var chart1 = echarts.init(document.getElementById('chart1')); // 扶贫资金地区分布情况
var chart2 = echarts.init(document.getElementById('chart2')); // 扶贫项目地区分布情况
var chart3 = echarts.init(document.getElementById('chart3')); // 到户资金地区分布情况
var chart4 = echarts.init(document.getElementById('chart4')); // 统计上报情况情况
var chartArr = [YearDHChart, JDZJChart, JZLYChart, ZJLXChart, ZJZT1Chart, ZJZT2Chart, XMLXChart, chart1, chart2, chart3, chart4];
var pieColor = ['#FFCE2B', '#FFAB30', '#6BDD8B', '#6EC7FF', '#6BDD8B', '#6EC7FF'];
// 最近一年到户资金
var YearDHOption = {
    title: {
        text: '最近一年到户资金',
        textStyle: {
            color: '#535457',
            fontSize: '14px'
        },
        padding: [20, 0, 28, 18]
    },
    grid: {
        top: '23%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    tooltip: {},
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [],
        axisLine: {
          lineStyle: {
            color: '#E7EBEF'
          }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#777D84'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#E7EBEF'
          }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#777D84'
            }
        },
        name: '个',
        nameTextStyle: {
            color: '#777D84'
        },
        splitLine: {
            show: true,
            //  改变轴线颜色
            lineStyle: {
                // 使用深浅的间隔色
                color: ['#E7EBEF']
            }
        },
    },
    series: [{
        type: 'line',
        data: [],
        areaStyle: {
            normal: {
                color:  new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#FFFFFF'
                }, {
                offset: 1,
                color: '#EFFDF1'
                }])
            }
        },
        itemStyle: {
          normal: {
            color: '#1ECD38',
            width: 2,
            lineStyle:{
                color:'#1ECD38'
            }
          }
        },
        symbolSize: 5
    }]
};
// 各区县最近四个季度资金
var JDZJOption = {
    title: {
        text: '最近四个季度资金收入情况',
        textStyle: {
            color: '#535457',
            fontSize: '14px'
        },
        padding: [20, 0, 28, 18]
    },
    legend: {
        data: ['第一季度', '第二季度', '第三季度', '第四季度'],
        x: 'right',
        padding: [20, 30, 30, 0],
        itemWidth: 14, // 图例标记的图形宽度
        itemHeight: 14
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: '23%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: [],
        axisLine: {
            lineStyle: {
                color: '#E7EBEF'
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#777D84'
            }
        }
    },
    yAxis : {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#E7EBEF'
          }
        },
        name: '万元',
        nameTextStyle: {
            color: '#777D84'
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#777D84'
            }
        },
        splitLine: {
            show: true,
            //  改变轴线颜色
            lineStyle: {
                // 使用深浅的间隔色
                color: ['#E7EBEF']
            }
        },
    },
    series: [
        {
            name:'第一季度',
            type: 'bar',
            barWidth: 15,
            stack: '资金',
            data: [],
            itemStyle:{
                normal:{color:'#3FC16B'}
            }
        },
        {
            name:'第二季度',
            type: 'bar',
            barWidth: 15,
            stack: '资金',
            data:[],
            itemStyle:{
                normal:{color:'#8CDC6A'}
            }
        },
        {
            name:'第三季度',
            type: 'bar',
            barWidth: 15,
            stack: '资金',
            data:[],
            itemStyle:{
                normal:{color:'#20A7FF'}
            }
        },
        {
            name:'第四季度',
            type: 'bar',
            barWidth: 15,
            stack: '资金',
            data:[],
            itemStyle:{
                normal:{color:'#41C5F8'}
            }
        }
    ]
};
// 资金来源分布情况
var JZLYOption = {
    title: {
        text: '资金来源分布情况',
        textStyle: {
            color: '#535457',
            fontSize: '14px'
        },
        padding: [20, 0, 28, 18]
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: [],
        padding: [80, 0, 0, 20],
        itemWidth: 14, // 图例标记的图形宽度
        itemHeight: 14
    },
    series: [
        {
            type:'pie',
            radius: ['35%', '55%'],
            center: ['65%', '55%'], // 环形图位置
            label: {
                normal: {
                    position: 'inner',
                    formatter: '{d}%',
                    fontSize: '12px'
                }
            },
            silent: true,
            data:[]
        }
    ],
    color: pieColor
};
// 资金类型分布情况
var ZJLXOption = {
    title: {
        text: '资金类型分布情况',
        textStyle: {
            color: '#535457',
            fontSize: '14px'
        },
        padding: [20, 0, 28, 18]
    },
    //     trigger: 'item',
    //     formatter: "{a} <br/>{b}: {c} ({d}%)"
    // },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: [],
        padding: [80, 0, 0, 20],
        itemWidth: 14, // 图例标记的图形宽度
        itemHeight: 14
    },
    series: [
        {
            type:'pie',
            radius: '50%',
            center: ['65%', '55%'], // 环形图位置
            label: {
                normal: {
                    position: 'inner',
                    formatter: '{d}%',
                    fontSize: '12px'
                }
            },
            silent: true,
            data:[]
        }
    ],
    color: pieColor
};
//部门级
var BMOption = {
    title: {
        text: '最近四个季度资金收入情况',
        textStyle: {
            color: '#535457',
            fontSize: '14px'
        },
        padding: [20, 0, 28, 18]
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: '23%',
        left: '-4%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: [],
        axisLine: {
            lineStyle: {
                color: '#E7EBEF'
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#777D84'
            }
        }
    },
    yAxis : {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#E7EBEF'
          }
        },
        name: '万元',
        show: false,
        nameTextStyle: {
            color: '#777D84'
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#777D84'
            }
        },
        splitLine: {
            show: true,
            //  改变轴线颜色
            lineStyle: {
                // 使用深浅的间隔色
                color: ['#E7EBEF']
            }
        },
    },
    series: [
        {
            type: 'bar',
            barWidth: 15,
            stack: '资金',
            data: [],
            itemStyle:{
                normal: {
                    color: function (params) {
                    var colorList = [
                        '#3FC16B', '#8CDC6A', '#20A7FF', '#41C5F8'];
                    return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}万元'
                    }
                }
            }
        }
    ]
};

// 资金状态分布情况参数
var labelTop = {
    normal : {
        label : {
            show : true,
            position : 'center',
            formatter : '{b}',
            textStyle: {
                baseline: 'bottom',
                color: '#8E8E8E',
                align: 'center',
                fontSize:12
            }
        },
        labelLine : {
            show : false
        }
    }
};
var labelFromatter = {
    normal : {
        label : {
            formatter : function (params){
                return 100 - params.value + '%'
            },
            textStyle: {
                baseline: 'top',
                color: '#4D4D4D',
                align: 'center',
                fontSize:12
            }
        }
    },
}
var labelBottom = {
    normal : {
        color: '#E3E5Ee',
        label : {
            show : true,
            position : 'center'
        },
        labelLine : {
            show : false
        }
    }
};

// 资金状态分布情况
var ZJZT1Option =  {
    legend: {
        x : 'center',
        y : '240px',
        data:[],
        itemWidth: 14, // 图例标记的图形宽度
        itemHeight: 14,
        selectedMode: false
    },
    title : {
        text: '资金类型分布情况',
        textStyle: {
            color: '#535457',
            fontSize: '14px'
        },
        padding: [20, 0, 28, 18]
    },
    series : [
        {
            type : 'pie',
            center : ['50%', '50%'],
            radius : [40, 55],
            itemStyle: labelFromatter,
            silent: true,
            data : []
        }
    ],
    color: ['#1ECD38']
};
// 资金状态分布情况
var ZJZT2Option =  {
    legend: {
        x : 'center',
        y : '240px',
        data:[],
        itemWidth: 14, // 图例标记的图形宽度
        itemHeight: 14,
        selectedMode: false
    },
    series : [
        {
            type : 'pie',
            center : ['50%', '50%'],
            radius: [40, 55],
            silent: true,
            itemStyle : labelFromatter,
            data : []
        }
    ],
    color: ['#FBC40D']
};

// 项目类型分布情况
var XMLXOption = {
    title: {
        text: '项目类型分布情况',
        textStyle: {
            color: '#535457',
            fontSize: '14px'
        },
        padding: [20, 0, 28, 18]
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: [],
        padding: [80, 0, 0, 20],
        itemWidth: 14, // 图例标记的图形宽度
        itemHeight: 14
    },
    series: [
        {
            type:'pie',
            radius: ['30%', '55%'],
            center: ['65%', '55%'], // 环形图位置
            label: {
                normal: {
                    position: 'inner',
                    formatter: '{d}%',
                    fontSize: '12px'
                }
            },
            silent: true,
            data:[]
        }
    ],
    color: pieColor
};
//部门级
var XMZTOption = {
    title: {
        text: '项目类型分布情况',
        textStyle: {
            color: '#535457',
            fontSize: '14px'
        },
        padding: [20, 0, 28, 18]
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: [],
        padding: [80, 0, 0, 20],
        itemWidth: 14, // 图例标记的图形宽度
        itemHeight: 14
    },
    series: [
        {
            type:'pie',
            radius: ['0%', '50%'],
            center: ['65%', '55%'], // 环形图位置
            label: {
                normal: {
                    position: 'inner',
                    formatter: '{d}%',
                    fontSize: '12px'
                }
            },
            silent: true,
            data:[]
        }
    ],
    color: ['#009BFF', '#6EC7FF']
};
function barChart() {
    //初始化加载图表
    this.initchart();
}
barChart.prototype = {
    initchart:function () {
        var color = ['#FFB37D', '#FFBA41', '#24BCFF', '#219FFF', '#4BEAC8', '#1ECDB4', '#CF95F7', '#AF89FF'];
        var init = 0;
        for (var i = 1; i <= color.length / 2; i++){
            var chart = echarts.init(document.getElementById('chart' + i));
            if (i === 1) {
                var text = '扶贫资金地区分布情况';
                var unit = '万元';
            } else if (i === 2) {
                var text = '扶贫项目地区分布情况';
                var unit = '个';
            } else if (i === 3) {
                var text = '到户资金地区分布情况';
                var unit = '万元';
            } else if (i === 4) {
                var text = '各地区统计上报情况情况';
                var unit = '条';
            }
            var option = this.optionChart(text, new echarts.graphic.LinearGradient(0, 0, 0, 1,
                [{ offset: 0, color: color[init++]},{ offset: 1, color: color[init++]}
                ]), unit);
            chart.setOption(option);
        }
    },
    optionChart: function (title, color, unit) {
        var option = {
            title: {
                text: title,
                textStyle: {
                    color: '#535457',
                    fontSize: '14px'
                },
                padding: [20, 0, 28, 18]
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                top: '23%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: [],
                axisLine: {
                    lineStyle: {
                        color: '#E7EBEF'
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#777D84'
                    }
                }
            },
            yAxis : {
                type: 'value',
                axisLine: {
                lineStyle: {
                    color: '#E7EBEF'
                }
                },
                name: unit,
                nameTextStyle: {
                    color: '#777D84'
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#777D84'
                    }
                },
                splitLine: {
                    show: true,
                    //  改变轴线颜色
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: ['#E7EBEF']
                    }
                },
            },
            series: [
                {
                    type: 'bar',
                    barWidth: 15,
                    data: [],
                    itemStyle:{
                        normal: {
                            color: color
                        }
                    }
                }
            ]
        };
        //将option返回
        return option;
    }
}
// 使用刚指定的配置项和数据显示图表。
YearDHChart.setOption(YearDHOption);
JDZJChart.setOption(JDZJOption);
JZLYChart.setOption(JZLYOption);
if (code === 1) {
    ZJLXChart.setOption(ZJLXOption);
    XMLXChart.setOption(XMLXOption);
} else {
    ZJLXChart.setOption(BMOption);
    XMLXChart.setOption(XMZTOption);
}
ZJZT1Chart.setOption(ZJZT1Option);
ZJZT2Chart.setOption(ZJZT2Option);

chartArr.forEach(element => {
    element.showLoading();
});
postJSON(httpUrl.project)    // => 这里面是就try
    .then(res => {
        // console.log(res);
        // 填入数据
        if (res.mta === 1) {
            YearDHChart.hideLoading();
            YearDHChart.setOption({
                xAxis: {
                    data: res.xData
                },
                series: [{
                    // 根据名字对应到相应的系列
                    data: res.data
                }]
            });
            return postJSON(httpUrl.all);
        }
    }).then(res => {
        chart1.hideLoading();
        chart1.setOption({
            xAxis: {
                data: res.xData
            },
            series: [{
                // 根据名字对应到相应的系列
                data: res.data
            }]
        });
        chart2.hideLoading();
        chart2.setOption({
            xAxis: {
                data: res.xData
            },
            series: [{
                // 根据名字对应到相应的系列
                data: res.data
            }]
        });
        chart3.hideLoading();
        chart3.setOption({
            xAxis: {
                data: res.xData
            },
            series: [{
                // 根据名字对应到相应的系列
                data: res.data
            }]
        });
        chart4.hideLoading();
        chart4.setOption({
            xAxis: {
                data: res.xData
            },
            series: [{
                // 根据名字对应到相应的系列
                data: res.data
            }]
        });
        return postJSON(httpUrl.four);
    }).then(res => {
        console.log('myres', res);
        JDZJChart.hideLoading();
        JDZJChart.setOption({
            xAxis: {
                data: res.dataX
            },
            series: [{
                // 根据名字对应到相应的系列
                data: res.data1
            },{
                // 根据名字对应到相应的系列
                data: res.data2
            },{
                // 根据名字对应到相应的系列
                data: res.data3
            },{
                // 根据名字对应到相应的系列
                data: res.data4
            }]
        });
        return postJSON(httpUrl.piedata);
    }).then(res => {
        console.log('ppres', res);
        dataPie = res.data;
        dataPie2 = res.data2
        objAdd(dataPie);
        objAdd(dataPie2);
        ZJZT1Chart.hideLoading();
        ZJZT1Chart.setOption({
            legend: {
                data: res.dataX
            },
            series: [{
                // 根据名字对应到相应的系列
                data: dataPie
            }]
        });
        ZJZT2Chart.hideLoading();
        ZJZT2Chart.setOption({
            legend: {
                data: res.dataX2
            },
            series: [{
                // 根据名字对应到相应的系列
                data: dataPie2
            }]
        });
        XMLXChart.hideLoading();
        ZJLXChart.hideLoading();
        if (code === 1) {

            ZJLXChart.setOption({
                legend: {
                    data: res.dataX7
                },
                series: [{
                    // 根据名字对应到相应的系列
                    data: res.data7
                }]
            });
            XMLXChart.setOption({
                legend: {
                    data: res.dataX4
                },
                series: [{
                    // 根据名字对应到相应的系列
                    data: res.data4
                }]
            });
        } else {
            XMLXChart.setOption({
                legend: {
                    data: res.dataX3
                },
                series: [{
                    // 根据名字对应到相应的系列
                    data: res.data3
                }]
            });
            ZJLXChart.setOption({
                xAxis: {
                    data: res.dataX5
                },
                series: [{
                    // 根据名字对应到相应的系列
                    data: res.data5
                }]
            });
        }
        JZLYChart.hideLoading();
        JZLYChart.setOption({
            legend: {
                data: res.dataX6
            },
            series: [{
                // 根据名字对应到相应的系列
                data: res.data6
            }]
        });
    });

function objAdd(param) {
    param.forEach((element, index) => {
        if (index === 0) {
            element['itemStyle'] = labelBottom;
        } else if (index === 1) {
            element['itemStyle'] = labelTop;
        }
    });
    return param;
}
setTimeout(function () {
    window.onresize = function () {
        chartArr.forEach(element => {
            element.resize();
        });
    }
}, 100);