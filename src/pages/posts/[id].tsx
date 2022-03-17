import {useRouter} from 'next/router'

export default function Post(){
  //hooks - funções do react que permite várias funcionalidades
  const router = useRouter()
  return(
    <>
      <h1>Post {router.query.id}</h1> {/* mesmo id nome do arquivo - ligação */}
      <h2>Caminho da rota{router.asPath}</h2>
    </>
  )
}
//singular pois vai procurar uma unidade