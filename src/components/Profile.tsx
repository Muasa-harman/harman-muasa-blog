import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string
  dark?: boolean
}

const Profile = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}
      {...props}>
      <img
        src={
          dark
            ? 'https://avatars.githubusercontent.com/u/123101284?s=400&u=a04dfe5638c3e7c0baa461bfe87c5a4c1ef123c2&v=4'
            : 'https://avatars.githubusercontent.com/u/123101284?s=400&u=a04dfe5638c3e7c0baa461bfe87c5a4c1ef123c2&v=4'
        }
        className='pointer-events-none z-50 select-none'
        alt='profile image'
      />

      <div className='absolute -z-10 inset-0'>
        <img
          className='object-cover min-w-full min-h-full'
          src={imgSrc}
          alt='overlaying phone image'
        />
      </div>
    </div>
  )
}

export default Profile
