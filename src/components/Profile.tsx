import Image from 'next/image'
import { getUser } from '../lib/auth'

export function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      {/* In <Image />> the width and height it the size of load, not the show. The show is done with CSS */}
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />

      <p className="max-w-[140px] text-sm leading-snug">
        {name}
        <a
          href="/api/auth/logout"
          className="block text-red-400 hover:text-red-300"
        >
          Log out
        </a>
      </p>
    </div>
  )
}
