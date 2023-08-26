

import { signIn, useSession, getProviders } from 'next-auth/react'
import { useRouter } from 'next/router'
function LoginpPage() {

    const { data: session, status } = useSession()
    const router = useRouter()

    if (status !== 'loading' && status === 'authenticated') {
        router.push('/')
    }
    return (
        <div>
            <button onClick={() => signIn('github')}>
                signin with github
            </button>
        </div>
    )
}
export default LoginpPage