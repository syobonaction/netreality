'use client'

import { memo, useState } from "react";

interface WindowWrapperProps {
  children: React.ReactNode
  pos: {
    x: number
    y: number
  }
  dim: {
    w: number
    h: number
  }
}

const WindowWrapper = memo(function WindowWrapper({
  children,
  pos,
  dim,
}: WindowWrapperProps) {
  const [position, setPosition] = useState({ x: pos.x, y: pos.y })
  const [size, setSize] = useState({ w: dim.w, h: dim.h })

  const dynamicWindowStyles = {
    left: position.x,
    top: position.y,
    width: size.w,
    height: size.h
  }

  return (
    <div id="app_window" style={{...dynamicWindowStyles}} className="
      flex
      flex-col
      relative
      z-10
      w-20
      text-black
      bg-gray-200
      border-3
      border-double
      border-gray-300
    ">
      <div id="window_header" className="
        flex
        flex-rows
        box-border
        h-[22px]
        bg-gray-300
        border-1
        border-double
        border-gray-400
      ">
        <div id="close_container" className="
          box-border
          h-[20px]
          w-[20px]
          p-[3px]
        ">
          <div id="close_button" className="
            relative
            cursor-pointer
            box-border
            h-full
            w-full
            border-1
            border-double
          border-gray-400
            before:absolute
            before:h-full
            before:w-full
            before:text-gray-500
            before:content-['\00d7']
            before:text-center
            before:leading-[12px]
            active:bg-gray-400
            active:before:border-1
            active:before:border-solid
          active:before:border-gray-400
          active:before:border-t-gray-500
          active:before:border-l-gray-500
          "></div>
        </div>
        <div id="bar_container" className="
          grow
          box-border
          py-[5px]
          px-[5px]
        ">
          <div id="bar_grabber_hook" className="
            relative
            w-full
            h-full
            box-border
            border-t-[2px]
            border-t-gray-400
            border-b-[2px]
            border-b-gray-400
            cursor-grab
            active:cursor-grabbing
          "></div>
        </div>
      </div>
      <div id="window_content" className="
        grow
        bg-white
        p-[5px]
      ">
        {children}
      </div>
      <div id="window_resize" className="
        absolute
        bottom-[-6]
        right-[-6]
        w-2
        h-2
        cursor-nwse-resize
      "></div>
    </div>
  )
})

export default WindowWrapper