import { auth } from "@/auth";
import { fetchTitles, fetchGenres } from "@/lib/data"
import FilmImage from "./filmImage";

import PageButtons from "./pageButtons";

export default async function FilmDisplay({ page }: { page: string }) {
    const session = await auth();
    const genres = await fetchGenres()
    const films = await fetchTitles(parseInt(page), 0, 2026, "", genres, session?.user?.email!!)
    return (
        <div className="flex flex-wrap items-center justify-center min-h-screen h-full w-full">
            {films.map((film) => (
                <FilmImage key={film.id} id={film.id} title={film.title} released={film.released} genre={film.genre} synopsis={film.synopsis} />
            ))}
            <PageButtons previousPage={parseInt(page) - 1} nextPage={parseInt(page) + 1} />
        </div>
    )
}