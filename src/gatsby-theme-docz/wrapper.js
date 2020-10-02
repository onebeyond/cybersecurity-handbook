import * as React from 'react'
import { Helmet } from 'react-helmet-async'

// The props.doc prop contains some metadata about the page being rendered that you can use.
const Wrapper = ({ children }) => {
  return <React.Fragment>
    <Helmet>
      <meta charSet="utf-8"/>
      <title>{children.props.doc.value.name}</title>
      <link rel="icon"
            type="image/png"
            href="./public/guidesmiths_logo.png"
      />
    </Helmet>
    {children}
  </React.Fragment>;
}
export default Wrapper
