//getAjax('http://10.48.108.148:8000/apivisit', {}, function(response) {
//	if(response.code == 1) renderEchats(response.data)
//	else alert('网络请求错误')
//})

var response = {
	"msg": "获取数据成功",
	"code": 1,
	"data": [{
			"api_searching_volumn": 3000,
			"api_usage_percentage": "55%",
			"brand_name": "benz"
		},
		{
			"api_searching_volumn": 1000,
			"api_usage_percentage": "45%",
			"brand_name": "lexus"
		}
	],
	"time": 1489040826
}

if(response.code == 1) renderEchats(response.data)
else alert('网络请求错误')

function analysisNumber(data) {
	var obj = {
		brand_name: [],
		api_usage_percentage: [],
		api_searching_volumn: []
	}
	for(var i = 0; i < data.length; i ++) {
		var dataSub = data[i]
		obj.brand_name.push(dataSub.brand_name)
		obj.api_usage_percentage.push(dataSub.api_usage_percentage)
		obj.api_searching_volumn.push(dataSub.api_searching_volumn)
	}
	
	return obj
}

function analysisPercent(data) {
	var arr = []
	for(var i = 0; i < data.length; i ++) {
		var dataSub = data[i]
		var obj = {
			value: dataSub.api_searching_volumn,
			name: dataSub.brand_name + ' ' + dataSub.api_usage_percentage
		}
		arr.push(obj)
	}
	
	return arr
}

function renderEchats(data) {
	// 基于准备好的dom，初始化echarts实例
	var portTimes = echarts.init(document.getElementById('porttimes'));
	var objNumber = analysisNumber(data)
	// 指定图表的配置项和数据
	var optionPortTimes = {
		title: {
			text: ''
		},
		tooltip: {},
		legend: {
			data: ['次']
		},
		xAxis: {
			data: objNumber.brand_name
//			data: ["宝马", "保时捷", "奔驰", "宾利", "法拉利", "捷豹", "劳斯莱斯", "路虎", "玛莎拉蒂", "MINI", "沃尔沃"]
		},
		yAxis: {},
		series: [{
			name: '',
			type: 'bar',
			data: objNumber.api_searching_volumn
//			data: [1730, 1580, 1490, 1200, 970, 980, 498, 490, 290, 280, 90]
		}]
	};

	// 使用刚指定的配置项和数据显示图表。
	portTimes.setOption(optionPortTimes);

	var portTimesPercent = echarts.init(document.getElementById('porttimespercent'));
	var objPercent = analysisPercent(data)
	var optionPortTimesPercent = {
		baseOption: {
			backgroundColor: '#2c343c',
			visualMap: {
				show: false,
				min: 80,
				max: 600,
				inRange: {
					colorLightness: [0, 1]
				}
			},
			series: [{
				name: '访问来源',
				type: 'pie',
				radius: '55%',
				data: objPercent,
				roseType: 'angle',
				label: {
					normal: {
						textStyle: {
							color: 'rgba(255, 255, 255, 0.3)'
						}
					}
				},
				labelLine: {
					normal: {
						lineStyle: {
							color: 'rgba(255, 255, 255, 0.3)'
						}
					}
				},
				itemStyle: {
					normal: {
						color: '#c23531',
						shadowBlur: 200,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}]
		},
		media: [{
			option: {
				legend: {
					left: 0,
					top: 0,
					right: 0,
					bottom: 0
				},
				series: [{
					radius: [0, '50%'],
					center: ['50%', '50%']
				}]
			}
		}]
	};

	portTimesPercent.setOption(optionPortTimesPercent);

	//用于使chart自适应高度和宽度
	window.onload = function() {
		portTimes.resize();
		portTimesPercent.resize();
	};
}