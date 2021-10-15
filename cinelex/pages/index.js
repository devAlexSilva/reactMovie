import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';


export default function Home({lista}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lista Filmes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         DESTAQUES DA SEMANA
        </h1>

    <Link href='/busca'>Página de busca</Link>

      <ul>
        {lista.map(item=>(
          <Link href={`/movie/${item.id}`}>
          <li>
            <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`}  width='150' /><br/>
            {item.title}
             
            <span className={styles.span}> nota: {item.vote_average}</span>  
            
          </li>
          </Link>
        ))}
      </ul>

      </main>
    </div>
  )
}

export async function getServerSideProps(){
  
  const res = await fetch('http://localhost:3000/api/trending');
  const json = await res.json();

  return {
    props: {
      //pegando dados da rota da api
      lista: json.list
    }
  };
}