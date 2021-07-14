import Image from "next/image";

function GotMovie({ results, query }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const keys = Object.keys(query);
  let retrieveMovie = null;

  const fetchingMovie = () => {
    results.map(result => {
      if (result.id == keys[0]) {
        retrieveMovie = result;
      }
    })
  }

  return (
    <div>
      {fetchingMovie()}
      <div>
        <Image layout="responsive" className="filter md:blur-md"
          src={`${BASE_URL}${retrieveMovie.backdrop_path}` || retrieveMovie.poster_path || `${BASE_URL}${retrieveMovie.poster_path}`}
          height={1000}
          width={1920}
        />
      </div>


      <div className="p-2 mt-1 text-sm sm:text-lg md:text-2xl lg:text-5xl text-white font-bold md:absolute md:top-48 md:left-0 md:right-0 md:bottom-0 text-center">
        <h2 className="">
          {retrieveMovie.title || retrieveMovie.original_name}
        </h2>
        <h3 className="mt-2 md:mt-6 lg:mt-5">Released - {retrieveMovie.release_date || retrieveMovie.first_air_date}</h3>
      </div>
      <div className="ml-4 flex text-sm sm:text-lg lg:text-2xl font-bold md:absolute md:text-white md:top-64 md:p-16 md:bottom-0 md:left-0 md:right-0 lg:top-80">
        <p>{retrieveMovie.overview}</p>
      </div>
    </div>
  )
}

export default GotMovie
