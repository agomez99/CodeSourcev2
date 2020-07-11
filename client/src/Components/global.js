
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle
`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  
  .post-snippet{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  

  .post{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  .article-container{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
    a{
        color: ${({ theme }) => theme.text};
 
    }
    .register{
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
    }

  }
  `