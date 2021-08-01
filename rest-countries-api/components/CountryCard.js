import Image from "next/image";

const CountryCard = () => {
  return (
    <div className='text-left rounded-lg bg-element-responsive'>
      <div className='relative h-44'>
        <Image
          alt='country'
          src='https://restcountries.eu/data/afg.svg'
          layout='fill'
          objectFit='fill'
          quality={75}
          className='rounded-t-lg'
        />
      </div>
      <div className='px-8 pt-8 pb-14'>
        <h3 className='mb-5'>Germany</h3>
        <p className='text-sm'>
          <span className='font-semibold'>Population:</span> 81,700,000
        </p>
        <p>
          <span className='font-semibold'>Region:</span> Europe
        </p>
        <p>
          <span className='font-semibold'>Capital:</span> Berlin
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
