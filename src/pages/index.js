
import { Inter } from 'next/font/google'
import CardComponent from '../components/CardComponent'
const inter = Inter({ subsets: ['latin'] })
import { API_KEY,BASE_URL } from '@/library'

export default function Home({movies}) {
    const data=movies?.results || [];
    console.log(data)
  return (
    <>
      <div className='container d-flex justify-content-evenly flex-wrap mt-5'>
        {
           data.length > 0 && data.map((movie)=><CardComponent key={movie.id} imagePath={movie.backdrop_path} title={movie.title} id={movie.id}/>)
        }
      </div>

    </>
  )
}

// getServersideProps
export async function getServerSideProps(context){
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`;
  const res=await fetch(url);
  if(!res){
    console.log("error")
  }
  const movies=await res.json();
  return {
    props:{
      movies
    }
  }
}
