import React, { Component } from 'react'

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Hello, Parcel',
			content: 'Parcel 是 Web 应用打包工具，适用于经验不同的开发者。它利用多核处理提供了极快的速度，并且不需要任何配置。'
		}
	}

	render() {
		const { title, content } = this.state
		return (
			<div>
				<h1>{title}</h1>
				<p>{content}</p>
			</div>
		)
	}
}