//a pasta com o nome entre [], significa que ele aceita parametros dinâmicos
// pode passar algum valor na rota que ele é exibido dinamicamente

import { useRouter } from "next/router";
import Link from "next/link";

export default function buscar() {
    const router = useRouter()
    const id = router.query.id

    return (
        <div>
            <h1>Rotas / {id} / Buscar</h1>
            <Link href="/rotas">
                <button>Voltar</button>
            </Link>
        </div>
    )
}