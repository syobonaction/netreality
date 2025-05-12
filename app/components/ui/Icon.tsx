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
      text-sm
      m-[32px]
      active:before:absolute
      active:before:content-['']
      active:before:left-[24px]
      active:before:w-[32px]
      active:before:h-[32px]
      active:before:bg-blue-900/65
      ">
      <div>
        <Image 
          className="m-auto" 
          src={props.imageUrl} 
          alt={props.alt} 
          width={32} 
          height={32} 
        />
      </div>
      <div className="
        mt-2
        active:border-[1px]
        active:border-gray-500
        active:border-dashed
        active:before:absolute
        active:before:content-['']
        active:before:left-[1px]
        active:before:w-[calc(100%-2px)]
        active:before:h-[calc(100%-42px)]
        active:before:bg-blue-900/65
      ">
        {props.name}
      </div>
    </div>
  )
}