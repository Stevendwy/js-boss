/*
* @Author: steven
* @Date:   2017-03-08 11:04:19
* @Last Modified by:   steven
* @Last Modified time: 2017-03-08 11:14:11
*/

'use strict';
import React, {Component} from 'react'
import {bossmes} from './datas'
export default class Contentbodylist extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	message:bossmes
	  };
	}
	render(){
		let _showmessage=this.state.message.data.map((item,index)=>{
			return (
				<div className="contendbodylistbody" key={index}>
					<div className="contendbodyheadlist">
						<img src="img/usermanager/icon_ spread.png"/>
						<span>{index}</span>
					</div>
					<div className="contendbodyheadlist">{item.phone}</div>
					<div className="contendbodyheadlist">{item.type}</div>
					<div className="contendbodyheadlist">{item.pass}</div>
					<div className="contendbodyheadlist">{item.starttime}</div>
					<div className="contendbodyheadlist">{item.endtime}</div>
					<div className="contendbodyheadlist">{item.status}</div>
					<div className="contendbodyheadlist"><img src={item.todo}/></div>
				</div>
				)
		})
		return (
				<div className="contendbodylist">
					{_showmessage}
				</div>
			)
	}
}