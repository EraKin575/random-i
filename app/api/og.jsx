import { ImageResponse } from "@vercel/og";
import Image from "next/image";

export const config={
    runtime:'experimental-edge'
}

export default function handler(req){
    const {searchParams}=new URL(req.url);
    const title=searchParams.get('title');
    const description=searchParams.get('description');
    const image=searchParams.get('image');
    return new ImageResponse(
        <div>
            <Image src={image} width={1200} height={630} alt={title} />

        </div>
    )

}