import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next/types';

//cria um tipo de dado para comentário
interface Comment {
  id: string;
  body: string;
}
//Cria um vetor de dados de vetor de comentários
interface CommentArray {
  comments: Comment[];
}
export default function Post({ comments }: CommentArray) {
  const router = useRouter();
  if (router.isFallback) {
    //estiver cmo true
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1> Post {router.query.id}</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}> {comment.body} </li>
        ))}
      </ul>
    </>
  );
}
//singular pois vai procurar uma unidade
//gera o conteudo das paginas para cada post
//context contem tds os ids dos posts
export const getStaticProps: GetStaticProps<CommentArray> = async (
  //vai ser executado antes de carregar o componente
  //recupera todos os posts
  context,
) => {
  //recupera id do post
  const { id } = context.params;
  //faz consulta
  const response = await fetch(`http://localhost:3333/comments?postId=${id}`);
  //converte
  const comments = await response.json();

  return {
    props: {
      comments,
    }, // will be passed to the page component as props
    revalidate: 5,
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  //vamos obter
  const response = await fetch(`http://localhost:3333/posts`);
  const posts = await response.json();
  //a variavrl paths vai conter todos os ids de todos os posts

  const paths = posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
  //retorno da função

  return {
    paths,
    //não era aas paginaas, apenas no primeiro acesso
    //paths: paths, gera uma página estática para cd post
    fallback: true, //false - retorna 404 quando não tem a página
    //true - cria página automaticamente
  };
};
