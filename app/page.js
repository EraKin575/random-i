import Image from 'next/image';
import Head from 'next/head';
import animate from 'animate.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// dynamically import the share buttons
;

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
        <div className="flex gap-3 justify-center items-center">
          <a 
          href={`https://twitter.com/intent/tweet?text=Random Image Generator&url=${`https://regal-syrniki-fd670c.netlify.app/`}`}
          target="_blank"
          rel="noopener noreferrer"
          
          >
            <Image src='/twitter.png' width={40} height={40} alt="twitter" />

          </a>

          <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${`https://regal-syrniki-fd670c.netlify.app/`}`}
          target="_blank"
          rel="noopener noreferrer"
          
          >
            <Image src='/facebook.png' width={40} height={40} alt="facebook" />
          </a>

          <a
          href={`https://www.whatsapp.com/send?text=Random Image Generator ${`https://regal-syrniki-fd670c.netlify.app/`}`}
          target="_blank"
          >
            <Image src='/whatsapp.png' width={40} height={40} alt="whatsapp" />
          </a>

        
        </div>
      </div>
    </div>
  );
}
