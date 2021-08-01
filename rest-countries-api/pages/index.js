import Head from "next/head";
import CountryCard from "../components/CountryCard";

export default function Home() {
  return (
    <div className='flex-1 flex flex-col w-full px-20 mt-16'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 sm:w-full '>
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </div>

      {/* <footer className='flex items-center justify-center w-full h-24 border-t bg-yellow-500'>
      </footer> */}
    </div>
  );
}
