import React, {Component} from 'react'
import {render} from 'react-dom'
import Search from './search'
//import Bodyhead from './bodyhead'
import Contenthead from './contenthead'
import Contentbody from './contentbody'
import Contentfoot from './contentfoot'
class Page extends Component {
	
	render() {
		return (
			<div className="usercontent">
				<div className="userbody">
					<Contenthead />
					<Contentbody />
				</div>
			</div>
		)
	}
}

render(<Page />, document.getElementById("usermanagercontent"))
