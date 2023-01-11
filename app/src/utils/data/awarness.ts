

export interface AwarnessItem {
	id: 		string;
	title: 		string;
	gradient:	string[];
	content: 	string;
}

export const genHtml = (content: string) => {
	return `
		<!DOCTYPE html>\n
		<html>
		  <head>
			<title>Hello World</title>
			<meta http-equiv="content-type" content="text/html; charset=utf-8">
			<meta name="viewport" content="width=320, user-scalable=no">
			<style type="text/css">
			  body {
				margin: 0;
				padding: 0;
				font: 62.5% arial, sans-serif;
				background: transparent;
			  	color: 'white'
				}
				* {
					background: 'black'
				}
				p{
					font-size: 13px;
					color: 'white'
				
				}
			</style>
		  </head>
		  <body>
			${content}		  
		  </body>
		</html>
	`
}

export const _data : AwarnessItem[] = [
	{
		id: 'a-1',
		title: "DDDDDDD",
		gradient: ["#FFA7A7", "#FFD0D0"],
		content: `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
			\n
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
			\n
\t simply dummy text simply dummy text simply dummy text simply dummy text simply dummy text simply dummy text\n
\t simply dummy text\n
\t simply dummy text\n
\t simply dummy text\n
		`
	},
	{
		id: `a-2`,
		title: "AAAAAAA",
		gradient: ["#f6d5f7", "#fbe9d7"],
		content: `
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
			\n
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
			\n
			\t simply dummy text\n
			\t simply dummy text\n
			\t simply dummy text\n
			\t simply dummy text\n
		`
	},
	{
		id: `a-3`,
		title: "MSMSMSMS",
		gradient: ["#b5c6e0", "#ebf4f5"],
		content: `
			<h1>Test Content<h1>
			<p style="color: white">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
			</p>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
			</p>
			<ul>
				<li>simply dummy text</li>
				<li>simply dummy text</li>
				<li>simply dummy text</li>
				<li>simply dummy text</li>
			</ul>
		`
	},
	{
		id: `a-4`,
		title: "SSSSSSSS",
		gradient: ["#b2e5f8", "#f2f3e2"],
		content: `
			<h1>Test Content<h1>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
			</p>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
			</p>
			<ul>
				<li>simply dummy text</li>
				<li>simply dummy text</li>
				<li>simply dummy text</li>
				<li>simply dummy text</li>
			</ul>
		`	
	},
]

