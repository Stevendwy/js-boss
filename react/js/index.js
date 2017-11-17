import React, {Component} from 'react'
import {render} from 'react-dom'
import Menu from './menu'
import Content from './content'

class Page extends Component {
	
	render() {
		return (
			<div className='PageContainer'>
				<Menu />
				<Content />
			</div>
		)
	}
}

render(<Page />, document.getElementById('root'))
