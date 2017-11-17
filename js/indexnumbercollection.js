import React, {Component} from 'react'
import {render} from 'react-dom'

class Page extends Component {
	constructor(){
		super()
		this.listItem=["时间/类型","浏览量PV","独立访客量UV","独立IP数","新增车架号","总查询量","错误返回量","第三方接口请求次数","同时在线最大人数","平均响应时间"]
		this.obj={"data":[
			["time":"3-10","totalPV":"533","totalUV":"333","independentIP":"666","newVin":"32","searchTotal":"1023","errorTotal":"2","otherRequest":"123","maxCount":"10000","aveRTime":"56"],
			["time":"3-10","totalPV":"533","totalUV":"333","independentIP":"666","newVin":"32","searchTotal":"1023","errorTotal":"2","otherRequest":"123","maxCount":"10000","aveRTime":"56"],
			["time":"3-10","totalPV":"533","totalUV":"333","independentIP":"666","newVin":"32","searchTotal":"1023","errorTotal":"2","otherRequest":"123","maxCount":"10000","aveRTime":"56"],
			["time":"3-10","totalPV":"533","totalUV":"333","independentIP":"666","newVin":"32","searchTotal":"1023","errorTotal":"2","otherRequest":"123","maxCount":"10000","aveRTime":"56"],
			["time":"3-10","totalPV":"533","totalUV":"333","independentIP":"666","newVin":"32","searchTotal":"1023","errorTotal":"2","otherRequest":"123","maxCount":"10000","aveRTime":"56"],
			["time":"3-10","totalPV":"533","totalUV":"333","independentIP":"666","newVin":"32","searchTotal":"1023","errorTotal":"2","otherRequest":"123","maxCount":"10000","aveRTime":"56"],
			["time":"3-10","totalPV":"533","totalUV":"333","independentIP":"666","newVin":"32","searchTotal":"1023","errorTotal":"2","otherRequest":"123","maxCount":"10000","aveRTime":"56"]
		]}
	}
	
	preWeekData(){
		
	}
	
	nextWeekData(){
		
	}
	render() {
		let title = <div className="ItemListHeaderItem" style={{"width":"16%"}}> 
		{
			this.listItem.map((item,index)=>{
				return(
					<div key={index} className="itemsList">{item}</div>
				)
			})
		}
		</div>
		let dataListContainer = <div className="dataListContainer">
			{
				this.obj.data.map((item,index)=>{
					let _item = item
					return(
						<div key={index} className="itemsListBodyItem" style={{"width":"12%"}}>
							{
								_item.map((item,index)=>{
									<div key={index} className="itemsList">{item}</div>
								})
							}
						</div>
					)
				})
			}
		</div>
		return (
			<div className='DataDateContainer'>
				<div className="DataDateHeader">
					<div className="HeaderTitle">
						数据统计
					</div>
					<div>
						<span>日期统计</span>
						<img src="#" onClick={this.preWeekData.bind(this)}/>
						<img src="#" onClick={this.nextWeekData.bind(this)}/>
					</div>
				</div>
				<div className="DataDateBody">
					{title}
					{dataListContainer}
				</div>
			</div>
		)
	}
}

render(<Page />, document.getElementById('main-content'))
