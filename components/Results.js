import Thumbnail from "./Thumbnail"
import FlipMove from "react-flip-move";
import { useRouter } from "next/router";

function Results({ results }) {

  const router = useRouter();
  const { query } = useRouter();
  return (
  
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 
    3xl:flex flex-wrap justify-center">
      {results.map(result => (
        /**render a thumbnail for every result we get
         * back from mapping every single result of movie titles*/
        //<div onClick={() => router.push({ pathname: "movie/", query: `id=${result.id}`})}>
        <div onClick={() => router.push(`/movie/${query.genre}?${result.id}`)}>
          <Thumbnail key={result.id} result={result} />
        </div>
      ))}
    </FlipMove>
  )
}

export default Results
