import '@/styles/scss/style.scss'
import MainContainer from '@/components/MainContainer'


export default function App({ Component, pageProps }) {
  return(
    
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>


  ) 
}
