import Image from "next/image";
import Link from "next/link";

const CountryCard = ({
  countryName,
  flagImg,
  population,
  capital,
  region,
  callingCodes,
}) => {
  return (
    <Link
      href={{
        pathname: "/country/[codes]/[country]",
        query: { codes: callingCodes, country: countryName },
      }}
    >
      <div className='text-left rounded-lg bg-element-responsive'>
        <div className='relative h-52'>
          <Image
            alt='country'
            src={flagImg}
            layout='fill'
            objectFit='cover'
            quality={75}
            className='rounded-t-lg'
          />
        </div>
        <div className='px-8 pt-8 pb-12'>
          <h3 className='mb-5'>{countryName}</h3>
          <p className='text-sm mb-2'>
            <span className='font-semibold'>Population:</span>{" "}
            {population.toLocaleString("en-US")}
          </p>
          <p className='text-sm mb-2'>
            <span className='font-semibold'>Region:</span> {region}
          </p>
          <p className='text-sm'>
            <span className='font-semibold'>Capital:</span> {capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
