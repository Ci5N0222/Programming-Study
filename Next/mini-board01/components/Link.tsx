'use client'

import { useParams, usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/router"

export default function Link() {

    // Client Component에서만 사용 가능
    let router = useRouter();

    // Query String( Query Parameter )
    let searchParam = useSearchParams();

    // Path Variable
    let param = useParams();

    return (
        <button onClick={ () => { router.prefetch(`/board/${1}`) } }>btn</button>
    )
}