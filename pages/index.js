import Head from 'next/head'
import Navigation from '../src/components/Navigation'
import WrappedComponent from '../src/components/withPrivateRoute'


const Home = () => {
  return (
    <div>
      <Head>
        <title>Diag+ Accueil</title>
        <meta name="description" content="Diagnostique en ligne" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-gray-700 h-screen grid grid-cols-12 py-10'>
        <div className='col-start-2 col-span-10 bg-lime-600 rounded-3xl grid grid-cols-8'>
            <div className='pl-5'>
                <Navigation/>
            </div>
            <div className='col-span-7 bg-white rounded-3xl'>
            </div>
        </div>
      </div>
    </div>
  )
}

Home.getInitialProps = async props => {
  console.info('##### Congratulations! You are authorized! ######', props);
  return {};
};

export default WrappedComponent(Home)