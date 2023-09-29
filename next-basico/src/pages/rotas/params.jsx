import { useRouter } from "next/router";
import Link from "next/link";

export default function params() {
    //essa abordagem usa parametros nao amigaveis na url: /rotas/params?id=5?nome=Filipe
    const router = useRouter()
    const id = router.query.id
    const nome = router.query.nome
console.log(router.query)
    return (
        <div>
            <h1>Rotas params: {id} e {nome}</h1>
            <Link href="/rotas">
                <button>Voltar</button>
            </Link>
        </div>
    )
}