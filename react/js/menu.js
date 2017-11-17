import React, {Component} from 'react'
import MenuFolder from './menufolder'

export default class Menu extends Component {
	
	constructor() {
		super()
		this.state = {
			selectedIndex: 0
		}
		
		this.titles = ['监控控制', '数据统计', '用户管理', '设置']
		this.listTitles = [['接口访问', '用户检测'], [], [], []]
	}
	
	getFolders() {
		let _selectedIndex = this.state.selectedIndex
		let _listTitles = this.listTitles
		let _folders = this.titles.map(
			(item, index) => {
				let _selected = false
				if(index == _selectedIndex) _selected = true
				return (
					<MenuFolder key={index}
						selected={_selected}
						title={item}
						listTitles={_listTitles[index]}
						click={() => this.setState({selectedIndex: index})} />
				) 
			}
		)
		
		return _folders
	}
	
	render() {
		let _folders = this.getFolders()
		
		return (
			<div className='MenuContainer'>
				<div className='MenuHeaderContainer'>
					<img className='MenuHeaderImg' src='' />
				</div>
				<div className='MenuListContainer'>
					{_folders}
				</div>
			</div>
		)
	}
}
