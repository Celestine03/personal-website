import Image from 'next/image'

export default function Portrait() {
  return (
    <div className='flex justify-center'>
      <Image className="rounded-full"
        src="/my-image.jpg"
        alt="My portrait"
        width={200}
        height={200}
        priority
      />
    </div>
  )
}