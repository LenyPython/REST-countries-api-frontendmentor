import { createGlobalStyle } from 'styled-components'

interface Props {
  mode: boolean
}

const GlobalStyle = createGlobalStyle<Props>`
:root {
  --main-background-color: ${ ({mode}) =>  mode? 'hsl(207, 26%, 17%)':'hsl(0, 0%, 98%)'};
  --main-text-color:  ${ ({mode}) =>  mode? 'hsl(0, 0%, 100%)':'hsl(200, 15%, 8%)'};
  --main-elements-color:  ${ ({mode}) =>  mode? 'hsl(209, 23%, 22%)':'hsl(0, 0%, 100%)'};
  --main-input-color: ${ ({mode}) =>  mode? 'hsl(0, 0%, 100%)':'hsl(0, 0%, 52%)'};
  font-family: 'Nunito Sans', sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background: var(--main-background-color);
  color: var(--main-text-color);
}

#root {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
}
`
export default GlobalStyle

/* 
- Homepage Items: 14px
- Detail Page: 16px 


- White (Dark Mode Text & Light Mode Elements): 
  */
