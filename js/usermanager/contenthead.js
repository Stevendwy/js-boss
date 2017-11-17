import React, {Component} from 'react'

export default class Contenthead extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render(){
		return (
				<div className="contendhead">
					<div className="row">
					  <div className="col-md-2">
					  	<img src="img/usermanager/icon_open.png"/>
					  	<span className="">
					  		批量操作
					  	</span>
					  </div>
					  <div className="col-md-2">
					  	<img src="img/usermanager/icon_open.png"/>
					  	<span className="">
					  		开通账号
					  	</span>
					  </div>
					  <div className="col-md-2">
					  	<img src="img/usermanager/icon_open.png"/>
					  	<span className="">
					  		关闭账号
					  	</span>
					  </div>
					  <div className="col-md-6"></div>
					</div>
				</div>
			)
	}
}

