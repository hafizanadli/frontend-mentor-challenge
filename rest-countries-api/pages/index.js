import { useEffect, useState, useRef, useCallback } from "react";
import Head from "next/head";
import CountryCard from "../components/CountryCard";
import Filter from "../components/Filter";

export async function getStaticProps() {
  const getCountryData = async () => {
    const res = await fetch("https://restcountries.eu/rest/v2/all", {
      method: "GET",
    });
    return await res.json();
  };
  const countryData = await getCountryData();
  return {
    props: {
      countryData: countryData,
    },
  };
}

export default function Home({ countryData }) {
  const allCountryRef = useRef(countryData);
  const [countryList, setCountryList] = useState(countryData);

  console.log(countryList);

  const getCountryByRegion = useCallback(async ({ regionCode }) => {
    const res = await fetch(
      "https://restcountries.eu/rest/v2/region/" + regionCode,
      {
        method: "GET",
      }
    );
    const countryData = await res.json();
    setCountryList(countryData);
  }, []);

  return (
    <div className='flex-1 flex flex-col w-full px-5 lg:px-20 my-16 space-y-16'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Filter
        getCountryByRegion={getCountryByRegion}
        setCountryList={setCountryList}
        allCountryRef={allCountryRef}
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-24 sm:w-full '>
        {countryList.map((el) => (
          <CountryCard
            key={el.alpha3Code}
            callingCodes={el.alpha3Code}
            capital={el.capital}
            countryName={el.name}
            flagImg={el.flag}
            population={el.population}
            region={el.region}
          />
        ))}
      </div>

      {/* <footer className='flex items-center justify-center w-full h-24 border-t bg-yellow-500'>
      </footer> */}
    </div>
  );
}
