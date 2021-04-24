import Head from 'next/head';
import Header from "../components/Header";
import Nav from '../components/Nav';
import Results from '../components/Results';
import requests from '../utils/requests';

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/**Header */}
      <Header />

      {/**Nav */}
      <Nav />

      {/**Results */}
      {/**we're going to pass our results as a props component bc we 
       * dont need the entire props, to the results component
      */}
      <Results results={results}/>
    </div>
  )
}

/**this will get executed before function home gets rendered,
 * this server gets rendered then home will be next.
 */
export async function getServerSideProps(context) {
  /**pull the genre from the tmdb database api */
  const genre = context.query.genre;

  /**make a request to tmdb */
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
    .then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };

}