import Link from 'next/link'
import Image from 'next/image'

const MyLogo = () => {
    return (
        <Link href="/dashboard" className='flex items-center'>
            <Image src="/logo-black.png" width={82} height={20} alt="logo" className="h-5 object-cover" />
        </Link>
    )
}

export default MyLogo
