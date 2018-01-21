import React from "react"
import Link from "gatsby-link"

export default () => <div style={{color: `dodgerblue`}}>
	<h1>Hello World!</h1>
	<p>Gatsby on a Sunday Afternoon</p>
	<img src="https://source.unsplash.com/random/400x200" alt="" />
	<br />
    <div>
      <Link to="/page-2/">Page 2</Link>
    </div>
    <div>
      <Link to="/Counter/">Counter</Link>
    </div>
</div>
