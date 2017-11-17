/*
* @Author: steven
* @Date:   2017-03-08 10:51:45
* @Last Modified by:   steven
* @Last Modified time: 2017-03-08 11:04:38
*/

'use strict';
import React, {Component} from 'react'
import Contentbodylist from './contentbodylist'
export default class Contentbody extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render(){
		return (
				<div className="contendbody">
					<div className="contendbodyhead">
						<div className="contendbodyheadlist">序号</div>
						<div className="contendbodyheadlist">手机号</div>
						<div className="contendbodyheadlist">用户类型
							<img src="img/usermanager/icon_ spread.png"/>
						</div>
						<div className="contendbodyheadlist">用户密码</div>
						<div className="contendbodyheadlist">开通日期
							<img src="img/usermanager/icon_ spread.png"/>
						</div>
						<div className="contendbodyheadlist">到期日期
							<img src="img/usermanager/icon_ spread.png"/>
						</div>
						<div className="contendbodyheadlist">用户状态</div>
						<div className="contendbodyheadlist">操作</div>
					</div>
					<Contentbodylist />
				</div>
			)
	}
}

