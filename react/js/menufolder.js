import React, {Component} from 'react'

export default class MenuFolder extends Component {
	
	constructor() {
		super()
		this.state = {
			selectedIndex: 0
		}
	}
	
	click(index) {
		this.setState({
			selectedIndex: index
		})
	}
	
	getList() {
		let _listTitles = this.props.listTitles
		let _selectedIndex = this.state.selectedIndex
		let _click = this.click.bind(this)
		let _list = <div></div>
		let _selected = this.props.selected
		if(_selected) _list = _listTitles.map(
			(item, index) => {
				let _markerClass ='MenuFolderListItemMarker'
				if(_selectedIndex == index) _markerClass += ' Show'
				return (
					<div key={index}
						className='MenuFolderListItemContainer'
						onClick={() => _click(index)}>
						<div className={_markerClass}></div>
						<div className='MenuFolderListItemTitle'>
							{item}
						</div>
					</div>
				)
			}
		)
		
		return _list
	}
	
	render() {
		let _title = this.props.title
		let _selected = this.props.selected
		let _click = this.props.click
		let _containerClass = 'MenuFolderContainer'
		if(_selected) _containerClass += ' Selected'
		
		let _list = this.getList()
		
		return (
			<div className={_containerClass} onClick={() => _click()}>
				<div className='MenuFolderTitle'>
					{_title}
				</div>
				<div className='MenuFolderListContainer'>
					{_list}
				</div>
			</div>
		)
	}
}
