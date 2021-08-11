import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Country = () => {
  const router = useRouter();
  console.log(router.query);

  const [detail, setDetail] = useState(null);
  const [borderList, setBorderList] = useState(null);
  console.log(borderList);

  const getCountryDetail = async () => {
    const res = await fetch(
      "https://restcountries.eu/rest/v2/alpha/" + router.query.codes,
      {
        method: "GET",
      }
    );
    return res.json();
  };

  useEffect(async () => {
    if (router.query.codes) {
      const res = await getCountryDetail();
      setDetail(res);
    }
  }, [router.query.codes]);

  useEffect(async () => {
    if (detail && detail.borders.length > 0) {
      let list = [];
      for (const item of detail.borders) {
        const res = await fetch(
          "https://restcountries.eu/rest/v2/alpha/" +
            item +
            "?fields=name;alpha3Code",
          {
            method: "GET",
          }
        );
        const result = await res.json();
        list.push(result);
      }
      setBorderList(list);
    }
  }, [detail]);

  return (
    <div className='flex-1 flex flex-col w-full px-5 lg:px-20 my-16 space-y-20 '>
      <Head>
        <title>Rest Country Api App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <button
          onClick={() => router.back()}
          className='flex space-x-2 items-center px-10 py-2 rounded-md shadow-lg bg-element-responsive'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 fill-current text-very-dark-blue-txt dark:text-white-app'
            viewBox='0 0 20 20'
          >
            <path
              fillRule='evenodd'
              d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
              clipRule='evenodd'
            />
          </svg>
          <p>Back</p>
        </button>
      </div>
      <div className='flex flex-col md:flex-row space-x-0 md:space-x-10 space-y-10 md:space-y-0'>
        <div className='w-full md:w-1/2'>
          <div className='relative h-64 md:h-96 w-full md:w-10/12'>
            {detail ? (
              <Image
                alt='country'
                src={detail && detail.flag}
                layout='fill'
                objectFit='cover'
                quality={75}
              />
            ) : null}
          </div>
        </div>
        <div className='flex flex-col justify-evenly space-y-6 md:space-y-0 w-full md:w-1/2'>
          <h1>{detail && detail.name}</h1>
          <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 space-x-0 md:space-x-6'>
            <div>
              <p className='mb-2'>
                <span className='font-semibold'>Native Name:</span>{" "}
                {detail && detail.nativeName}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Population:</span>{" "}
                {detail && detail.population.toLocaleString("en-US")}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Region:</span>{" "}
                {detail && detail.region}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Sub Region:</span>{" "}
                {detail && detail.subregion}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Capital:</span>{" "}
                {detail && detail.capital}
              </p>
            </div>
            <div>
              <p className='mb-2'>
                <span className='font-semibold'>Top Level Domain:</span>{" "}
                {detail && detail.topLevelDomain}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Currencies:</span>{" "}
                {detail &&
                  detail.currencies.map((el, index) => {
                    return (
                      el.name +
                      (detail.currencies.length == index + 1 ? "" : ", ")
                    );
                  })}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Languages:</span>{" "}
                {detail &&
                  detail.languages.map((el, index) => {
                    return (
                      el.name +
                      (detail.languages.length == index + 1 ? "" : ", ")
                    );
                  })}
              </p>
            </div>
          </div>
          <div className='flex flex-wrap'>
            <p className='font-semibold self-center mr-3'>Border Countries:</p>
            {borderList && borderList.length > 0
              ? borderList.map((el, index) => {
                  return (
                    <Link
                      href={{
                        pathname: "/country/[codes]",
                        query: { codes: el.alpha3Code },
                      }}
                      key={el.alpha3Code}
                    >
                      <div className='bg-element-responsive p-2 shadow-md rounded-sm my-1 mr-2 cursor-pointer'>
                        <p className='text-sm'>{el.name}</p>
                      </div>
                    </Link>
                  );
                })
              : "-"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
