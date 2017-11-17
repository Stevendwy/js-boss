import React, {Component} from 'react'

export default class Contenthead extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render(){
		return (
				<nav aria-label="Page navigation">
				  <ul className="pagination">
				    <li className="disabled">
				    		<a href="#" aria-label="Previous">
				    		<span aria-hidden="true">&laquo;</span>
				    		</a>
				    	</li>
				    <li className="active">
				    		<a href="#">1 <span className="sr-only">(current)</span></a>
				    	</li>
				    <li><a href="#">2</a></li>
				    <li><a href="#">3</a></li>
				    <li><a href="#">4</a></li>
				    <li><a href="#">5</a></li>
				    <li>
				      	<a href="#" aria-label="Next">
				        <span aria-hidden="true">&raquo;</span>
				      </a>
				    </li>
				  </ul>
				</nav>
			)
	}
}

