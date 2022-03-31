import { GetStaticProps } from 'next';
interface Post {
  // representa 1 post
  id: string;
  title: string;
}

interface Posts {
  // representa vetor de posts
  posts: Post[];
}

export default function Posts() {
  return <h1> Posts </h1>;
}

export const getStaticProps: GetStaticProps<Posts> = async () => {
  const response = await fetch('http://localhost:3333/posts');
  const posts = await response.json();
  return {
    props: {
      posts, // posts vai para o componente
    },
  };
};
//solução para sites que não atualizados frequentementes
//revalidate monta a pagina estática uma vez e de 5 em 5 tempos cria a pág de nvo
//npm run build - construção otimizada
