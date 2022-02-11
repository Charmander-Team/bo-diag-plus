import '../styles/globals.css'
import Navigation from '../src/components/Navigation'

function MyApp({ Component, pageProps }) {
  return (
  <div className='bg-gray-700 h-screen grid grid-cols-12 py-10'>
    <div className='col-start-2 col-span-10 bg-lime-600 rounded-3xl grid grid-cols-8'>
        <div className='pl-5'>
            <Navigation/>
        </div>
        <div className='col-span-7 bg-white rounded-3xl'>
          <Component {...pageProps} />
        </div>
    </div>
  </div>)
}

export default MyApp
