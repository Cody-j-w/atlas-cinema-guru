import FilmDisplay from "@/components/filmDisplay";
import FilmImage from "@/components/filmImage";

export default async function Page({ params }: { params: Promise<{ page: string }> }) {
    const { page } = await params;
    return (
        <div className="flex flex-wrap items-center justify-center min-h-screen h-full w-full">
            <FilmDisplay page={page} />
        </div>
    );
}
