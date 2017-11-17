import React, { Component } from 'react'
import { render } from 'react-dom'

class Page extends Component {

	constructor() {
		super()
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		this.response = { "msg": "\u6210\u529f\u627e\u5230\u6570\u636e", "code": 1, "data": [{ "username": "fdafa", "api_query_volumn": 2039, "uid": 2, "user_type": "fdaj", "location": "beijing", "expire_at": "2017-03-20", "daily_query_volumn": 2000 }, { "username": "lol123", "api_query_volumn": 2000, "uid": 1, "user_type": "5000", "location": "shanghai", "expire_at": "2017-03-05", "daily_query_volumn": 3000 }, { "username": "lol1234", "api_query_volumn": 4343, "uid": 3, "user_type": "fda", "location": "najing", "expire_at": "2017-03-09", "daily_query_volumn": 20343 }, { "username": "fdafa", "api_query_volumn": 2039, "uid": 2, "user_type": "fdaj", "location": "beijing", "expire_at": "2017-03-20", "daily_query_volumn": 2000 }, { "username": "lol123", "api_query_volumn": 2000, "uid": 1, "user_type": "5000", "location": "shanghai", "expire_at": "2017-03-05", "daily_query_volumn": 3000 }, { "username": "lol1234", "api_query_volumn": 4343, "uid": 3, "user_type": "fda", "location": "najing", "expire_at": "2017-03-09", "daily_query_volumn": 20343 }, { "username": "fdafa", "api_query_volumn": 2039, "uid": 2, "user_type": "fdaj", "location": "beijing", "expire_at": "2017-03-20", "daily_query_volumn": 2000 }, { "username": "lol123", "api_query_volumn": 2000, "uid": 1, "user_type": "5000", "location": "shanghai", "expire_at": "2017-03-05", "daily_query_volumn": 3000 }, { "username": "lol1234", "api_query_volumn": 4343, "uid": 3, "user_type": "fda", "location": "najing", "expire_at": "2017-03-09", "daily_query_volumn": 20343 }, { "username": "fdafa", "api_query_volumn": 2039, "uid": 2, "user_type": "fdaj", "location": "beijing", "expire_at": "2017-03-20", "daily_query_volumn": 2000 }, { "username": "lol123", "api_query_volumn": 2000, "uid": 1, "user_type": "5000", "location": "shanghai", "expire_at": "2017-03-05", "daily_query_volumn": 3000 }, { "username": "lol1234", "api_query_volumn": 4343, "uid": 3, "user_type": "fda", "location": "najing", "expire_at": "2017-03-09", "daily_query_volumn": 20343 }, { "username": "fdafa", "api_query_volumn": 2039, "uid": 2, "user_type": "fdaj", "location": "beijing", "expire_at": "2017-03-20", "daily_query_volumn": 2000 }, { "username": "lol123", "api_query_volumn": 2000, "uid": 1, "user_type": "5000", "location": "shanghai", "expire_at": "2017-03-05", "daily_query_volumn": 3000 }, { "username": "lol1234", "api_query_volumn": 4343, "uid": 3, "user_type": "fda", "location": "najing", "expire_at": "2017-03-09", "daily_query_volumn": 20343 }, { "username": "fdafa", "api_query_volumn": 2039, "uid": 2, "user_type": "fdaj", "location": "beijing", "expire_at": "2017-03-20", "daily_query_volumn": 2000 }, { "username": "lol123", "api_query_volumn": 2000, "uid": 1, "user_type": "5000", "location": "shanghai", "expire_at": "2017-03-05", "daily_query_volumn": 3000 }, { "username": "lol1234", "api_query_volumn": 4343, "uid": 3, "user_type": "fda", "location": "najing", "expire_at": "2017-03-09", "daily_query_volumn": 20343 }, { "username": "fdafa", "api_query_volumn": 2039, "uid": 2, "user_type": "fdaj", "location": "beijing", "expire_at": "2017-03-20", "daily_query_volumn": 2000 }, { "username": "lol123", "api_query_volumn": 2000, "uid": 1, "user_type": "5000", "location": "shanghai", "expire_at": "2017-03-05", "daily_query_volumn": 3000 }, { "username": "lol1234", "api_query_volumn": 4343, "uid": 3, "user_type": "fda", "location": "najing", "expire_at": "2017-03-09", "daily_query_volumn": 20343 }, { "username": "fdafa", "api_query_volumn": 2039, "uid": 2, "user_type": "fdaj", "location": "beijing", "expire_at": "2017-03-20", "daily_query_volumn": 2000 }, { "username": "lol123", "api_query_volumn": 2000, "uid": 1, "user_type": "5000", "location": "shanghai", "expire_at": "2017-03-05", "daily_query_volumn": 3000 }, { "username": "lol1234", "api_query_volumn": 4343, "uid": 3, "user_type": "fda", "location": "najing", "expire_at": "2017-03-09", "daily_query_volumn": 20343 }, { "username": "fdafa", "api_query_volumn": 2039, "uid": 2, "user_type": "fdaj", "location": "beijing", "expire_at": "2017-03-20", "daily_query_volumn": 2000 }, { "username": "lol123", "api_query_volumn": 2000, "uid": 1, "user_type": "5000", "location": "shanghai", "expire_at": "2017-03-05", "daily_query_volumn": 3000 }, { "username": "lol1234", "api_query_volumn": 4343, "uid": 3, "user_type": "fda", "location": "najing", "expire_at": "2017-03-09", "daily_query_volumn": 20343 }, { "username": "fdafa", "api_query_volumn": 2039, "uid": 2, "user_type": "fdaj", "location": "beijing", "expire_at": "2017-03-20", "daily_query_volumn": 2000 }, { "username": "lol123", "api_query_volumn": 2000, "uid": 1, "user_type": "5000", "location": "shanghai", "expire_at": "2017-03-05", "daily_query_volumn": 3000 }, { "username": "lol1234", "api_query_volumn": 4343, "uid": 3, "user_type": "fda", "location": "najing", "expire_at": "2017-03-09", "daily_query_volumn": 20343 }, { "username": "fdafa", "api_query_volumn": 2039, "uid": 2, "user_type": "fdaj", "location": "beijing", "expire_at": "2017-03-20", "daily_query_volumn": 2000 }, { "username": "lol123", "api_query_volumn": 2000, "uid": 1, "user_type": "5000", "location": "shanghai", "expire_at": "2017-03-05", "daily_query_volumn": 3000 }, { "username": "lol1234", "api_query_volumn": 4343, "uid": 3, "user_type": "fda", "location": "najing", "expire_at": "2017-03-09", "daily_query_volumn": 20343 }], "time": 1489042178 }

		this.setState({
			data: this.response.data
		})
	}
	
	reload() {
//		this.setState({
//			data: {}
//		})
	}

	render() {
		let _data = this.state.data
		let _reload = this.reload.bind(this)

		return(
			<div style={{width: '100%', height: '100%'}}>
				<div style={{height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
					<div style={{fontSize: '24px'}}>用户查询排名</div>
					<div style={{display: 'flex'}}>
						<div>{'_lastTime'}</div>
						&emsp;
						<a onClick={_reload}>刷新</a>
						&emsp;
					</div>
				</div>
				<div style={{width: '100%', overflowX: 'scroll'}}>
					<Form data={_data} />
				</div>
			</div>
		)
	}
}

class Form extends Component {
	constructor() {
		super()
		this.titles = ['序号', '当日查询量', '接口查询量', '用户类型', '地区', '用户名', '到期时间']
	}

	getFormTitles() {
		let _formTitles = this.titles.map((item, index) => {
			return(
				<div key={index} style={{width: '14%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
					{item}
				</div>
			)
		})

		return _formTitles
	}

	getList() {
		let _data = this.props.data
		let _list = _data.map((item, index) => {
			return(
				<FormList key={index} data={item} />
			)
		})

		return _list
	}
	
	getPageControl() {
		let times = this.props.data.length / 10 + 1
		let array= []
		for(var i = 0; i < times; i++) {
			array.push(i)
		}
		let pageControl = array.map((item, index) => {
			return (
				<div key={index} style={{margin: '0 10px'}}>{index + 1}</div>
			)
		})
		return pageControl
	}

	render() {
		let _formTitls = this.getFormTitles()
		let _list = this.getList()
		
		let _pageControl = this.getPageControl()

		return(
			<div style={{border: '#D8D8D8 solid 1px', width: '824px', height: '388px'}}>
				<div style={{display: 'flex', width: '100%', height: '30px', justifyContent: 'space-around'}}>
					{_formTitls}
				</div>
				<div style={{height: '300px', width: '100%', overflowY: 'hidden'}}>
					{_list}
				</div>
				<div style={{height: '60px', width: '100%', display: 'flex', alignItems: 'center'}}>
					<a>上一页</a>
					{_pageControl}
					<a>下一页</a>
				</div>
			</div>
		)
	}
}

class FormList extends Component {

	render() {
		let _data = this.props.data
		let _style = {display: 'flex', width: '100%', height: '30px', justifyContent: 'space-around', alignItems: 'center'}

		return(
			<div style={{borderBottom: '#D8D8D8 solid 1px', height: '30px', width: '100%', display: 'flex', justifyContent: 'space-around'}}>
				<div style={_style}>
					{_data.uid}
				</div>
				<div style={_style}>
					{_data.daily_query_volumn}
				</div>
				<div style={_style}>
					{_data.api_query_volumn}
				</div>
				<div style={_style}>
					{_data.user_type}
				</div>
				<div style={_style}>
					{_data.location}
				</div>
				<div style={_style}>
					{_data.username}
				</div>
				<div style={_style}>
					{_data.expire_at}
				</div>
			</div>
		)
	}
}

render(<Page />, document.getElementById('main-content'))