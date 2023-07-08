import Image from 'next/image';
import Head from 'next/head';
import animate from 'animate.css';





const imageFetcher = async () => {
  
  const response = await fetch('https://random.imagecdn.app/v1/image?width=500&height=300&category=buildings&format=json', {
    cache: "no-cache"
  });
  const data = await response.json();
  return data?.url;
  
  }

export default async function Home() {

  const imageUrl = await imageFetcher();
  const imgUrl='https://localhost:3000/api/og?image='+imageUrl+'title=Random Image Generator&description=Random Image Generator'
 

  return (
    <div className="bg-gradient-to-r from-gray-700 h-screen via-gray-900 to-black flex justify-center items-center">
      <Head>
       <title>Random Image Generator</title>
       <meta property='og:image' content={imgUrl} />
       <meta property='twitter:card' content='summary_large_image' />
       <meta property='twitter:image' content={imgUrl} />
        {/* <meta name="description" content="Random Image Generator" />
        <link rel="icon" href="/favicon.ico" />
        <meta property='og:title' content='Random Image Generator' />
        <meta property='og:description' content='Random Image Generator' />
        <meta property='og:image' content={imageUrl} />

        <meta property='twitter:title' content='Random Image Generator' />
       
         <meta property='twitter:description' content='Random Image Generator' />
        
         <meta name="twitter:url" content="https://regal-syrniki-fd670c.netlify.app/" /> */}


        
      </Head>
      <div>
        <h1
          className="text-4xl text-white font-bold text-center mb-10"
        >Random Image Generator</h1>
       
        
        { <Image className='animate__animated animate__fadeInUp' src={imageUrl} width={500} height={300} alt="random image" />} 
        <h1 className='text-center'>Share</h1>
        <div className="flex justify-center items-center">
        {/* share image generated according to the vercel og backend I just created */}
        <a
            href={`https://twitter.com/intent/tweet?text=Random Image Generator&url=${imgUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Tweet
          </a>

          </div>
        

        
      
       
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   try {
//    
    

//     return {
//       props: {
//         imageUrl: data?.url,
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         imageUrl: null,
//       },
//     };
//   }
// }


