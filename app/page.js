import Image from 'next/image';
import Head from 'next/head';
import animate from 'animate.css';
import Link from 'next/link';

const imageFetcher = async () => {
  const response = await fetch('https://random.imagecdn.app/v1/image?width=500&height=300&category=buildings&format=json', {
    cache: "no-cache"
  });
  const data = await response.json();
  return data?.url;
}

export default async function Home() {
  const imageUrl = await imageFetcher();

  return (
    <div className="bg-gradient-to-r from-gray-700 h-screen via-gray-900 to-black flex justify-center items-center">
      <Head>
        <title>Random Image Generator</title>
        <meta property="og:title" content="Random Image Generator" />
        <meta property="og:description" content="This is a random image generator." />
        <meta property="og:image" content={imageUrl} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={imageUrl} />
      </Head>
      <div>
        <h1 className="text-4xl text-white font-bold text-center mb-10">Random Image Generator</h1>
        <Image className='animate__animated animate__fadeInUp' src={imageUrl} width={500} height={300} alt="random image" />
        <h1 className='text-center'>Share</h1>
        <div className="flex justify-center items-center">
          <Link href={`https://twitter.com/intent/tweet?url=${imageUrl}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Twitter</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
