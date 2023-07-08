import { ImageResponse } from '@vercel/og';

export async function GET(req, res) {
  const { image } = req


  return new ImageResponse(
    (
      <div className="flex flex-col justify-center items-center">
        <img src={image} width={500} height={300} alt="random image" />
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
