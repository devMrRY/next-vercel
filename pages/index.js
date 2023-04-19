import Image from 'next/image';

function HomePage() {
  return (
    <div>
      This is updated home page
      <br />
      <Image width={300} height={300} src="/car_black.jpeg" />
    </div>
  );
}

export default HomePage;
