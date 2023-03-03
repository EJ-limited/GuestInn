
import Head from 'next/head';
import Banner from '../component/Banner';
import { Header } from '../component/Header';
import Homepage from '../component/Homepage';
import Roompage from '../component/Roompage';
import Servicepage from '../component/Servicepage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="bg-[url(/img/bg.jpg)] bg-cover h-screen" >
     
   <Homepage/>
      </div>
      
  

      <main className="mx-auto max-w-screen-2xl">
      <Roompage/>

      <Servicepage/>
      
  </main>

    </div>
  );
}
