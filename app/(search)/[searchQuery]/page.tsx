import TitlesList from "@/app/(titles)/components/TitlesList/TitlesList";
import Pagination from "@/components/Pagination";
import getSearchResults from "@/lib/getSearchResults";

const keywordUrlToString = (searchUrl: string) => {
  return searchUrl.slice(10).replace("%20", " ");
};

export async function generateMetadata({
  params: { searchQuery },
}: {
  params: { [key: string]: string };
}) {
  return {
    title: `جستجو برای ${keywordUrlToString(searchQuery.toString())}`,
    description: `This is the page of ${searchQuery} `,
  };
}

export default async function SearchPage({
  searchParams,
  params: { searchQuery },
}: {
  searchParams: any;
  params: any;
}) {
  const data:
    | {
        results: any;
        hasNext: any;
      }
    | undefined = await getSearchResults(
    keywordUrlToString(searchQuery.toString()),
    18
  );
  const results = data?.results;

  let currentPageNumber = 1;
  const totalPages = 2;

  if (Number(searchParams.page) >= 1) {
    currentPageNumber = Number(searchParams.page);
  }

  return (
    <main className="pt-28">
      <section className="custom-container flex flex-col gap-10">
        <h2 className="text-center text-3xl font-bold">{`نتایج جستجو برای ${keywordUrlToString(
          searchQuery.toString()
        )}`}</h2>

        <TitlesList titles={results} />
        <Pagination totalPages={totalPages} currentPage={currentPageNumber} />
      </section>
    </main>
  );
}
