import { useEffect, useState } from "react";
import Head from "next/head";
import CountryCard from "../components/CountryCard";

export async function getStaticProps() {
  const getCountryData = async () => {
    const res = await fetch(
      "https://restcountries.eu/rest/v2/regionalbloc/asean",
      {
        method: "GET",
      }
    );
    return await res.json();
  };
  const countryData = await getCountryData();
  return {
    props: {
      countryList: countryData,
    },
  };
}

export default function Home({ countryList }) {
  const [test, setTest] = useState(false);
  console.log(countryList);

  return (
    <div className='flex-1 flex flex-col w-full px-20 mt-16'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-24 sm:w-full '>
        {countryList.map((el) => (
          <CountryCard
            key={el.alpha3Code}
            callingCodes={el.callingCodes}
            capital={el.capital}
            countryName={el.name}
            flagImg={el.flag}
            population={el.population}
            region={el.region}
          />
        ))}
      </div>

      <p>dsadsa</p>

      {/* <footer className='flex items-center justify-center w-full h-24 border-t bg-yellow-500'>
      </footer> */}
    </div>
  );
}
