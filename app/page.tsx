import FilmDisplay from "@/components/filmDisplay";
import FilmImage from "@/components/filmImage";
import SearchField from "@/components/searchField";

export default async function Page(props: {
  searchParams?: Promise<{
    page?: string;
    minYear?: string;
    maxYear?: string;
    query?: string;
    genres?: string[]
  }>;
}) {
  const searchParams = await props.searchParams;
  const currentPage = searchParams?.page || "1";
  return (
    <div className="flex flex-wrap items-center justify-center min-h-screen h-full w-full">
      <SearchField />
      <FilmDisplay page={currentPage} />
    </div>
  );
}
