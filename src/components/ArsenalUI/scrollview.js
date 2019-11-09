import React from "react"

export default ({ children, horizontal }) => {
  // optimize to render 1000s of things
  const direction = horizontal ? "flex" : null
  return (
    <div
      style={{ scrollSnapType: "x mandatory" }}
      className={`scrollview ${direction} bg-transparent w-auto h-64  py-2 overflow-y-hidden overflow-x-auto scrolling-touch`}
    >
      {children}
    </div>
  )
}
