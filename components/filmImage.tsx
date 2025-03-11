import Image from "next/image";
import { Title } from "@/lib/definitions";

export default function FilmImage() {
    return (
        <div className="group relative rounded-4xl bg-gradient border-2 border-[#54F4D0] mx-6 my-2">
            <Image className="static rounded-4xl m-8" src="/images/0c0b6fba-ccba-49d5-8417-6fc945754a91.webp" width={350} height={350} alt="Film Image" />
            <div className="hidden group-hover:flex absolute w-full h-40 bottom-0 bg-black rounded-b-4xl p-3">
                Hi there
            </div>
        </div>
    )
}