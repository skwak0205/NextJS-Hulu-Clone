import Image from 'next/image';

const Header = () => {
  return (
    <header className=''>
      <Image
        className='object-contain'
        src='http://links.papareact.com/ua6'
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
