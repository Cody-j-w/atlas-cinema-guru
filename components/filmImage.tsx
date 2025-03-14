import Image from "next/image";
import { Title } from "@/lib/definitions";
import GenreTag from "./genreTag";

export default function FilmImage(title: Title) {
    return (
        <div className="group relative rounded-4xl bg-gradient border-2 border-[#54F4D0] mx-6 my-2">
            <Image className="static rounded-4xl" src={`/images/${title.id}.webp`} width={390} height={390} alt="Film Image" />
            <div className="hidden group-hover:flex flex-col absolute w-full h-40 bottom-0 bg-[#000061] rounded-b-4xl p-3">
                <h1 className="text-2xl">{title.title} ({title.released})</h1>
                <p className="my-2">{title.synopsis}</p>
                <GenreTag genre={title.genre} />
            </div>
        </div>
    )
}