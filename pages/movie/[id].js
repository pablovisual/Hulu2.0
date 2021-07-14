import Header from "../../components/Header";
import { useRouter ,withRouter } from "next/router";
import GotMovie from "../../components/GotMovie";
import queryString from "query-string";
import requests from "../../utils/requests";

function Movie({ results } ) {
  const { query } = useRouter();
  
  return (
    <div>
      <Header />
      <GotMovie results={results} key={results.id}query={query} />
    </div>
  )
}

export default withRouter(Movie);

export async function getServerSideProps(context ) {
  /**pull the genre from the tmdb database api */
  const genre = context.query.id;

  /**make a request to tmdb */
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
    .then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}