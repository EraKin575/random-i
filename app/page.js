import Image from 'next/image';


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
      <div>
        <h1
          className="text-4xl text-white font-bold text-center mb-10"
        >Random Image Generator</h1>
       
        
        { <Image src={imageUrl} width={500} height={300} alt="random image" />} 
        <h1 className='text-center'>Share</h1>
        <div className="flex justify-center items-center">
          <a href={`https://twitter.com/intent/tweet?text=${imageUrl}`} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
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


