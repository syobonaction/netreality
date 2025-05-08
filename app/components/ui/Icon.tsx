import Image from "next/image"

interface IconProps {
  imageUrl: string
  name: string
  alt: string
}

export default function Icon(props:IconProps) {
  return (
    <div className="
      font-[Lucida_Console] 
      select-none 
      relative 
      w-[80px] 
      text-center 
      text-sm m-[32px]
      ">
      <div>
        <Image className="m-auto" src={props.imageUrl} alt={props.alt} width={32} height={32} />
      </div>
      <div className="mt-2">{props.name}</div>
    </div>
  )
}