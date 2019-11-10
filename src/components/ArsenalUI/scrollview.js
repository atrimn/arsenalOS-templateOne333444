import React from "react"

export default ({
  children,
  horizontal,
  vertical,
  marginY,
  contentContainerStyle,
}) => {
  // optimize to render 1000s of things
  const direction = horizontal ? "flex" : null
  const marginVertical = marginY ? "my-6" : ""
  const scrollDirection = vertical
    ? " overflow-y-auto overflow-x-hidden"
    : " overflow-x-auto overflow-y-hidden"
  return (
    <div
      style={{
        scrollSnapType: vertical ? "y mandatory" : "x mandatory",
        ...contentContainerStyle,
      }}
      className={`scrollview ${marginVertical} ${direction} bg-transparent w-auto h-64 ${scrollDirection}  py-2  scrolling-touch`}
    >
      {children}
    </div>
  )
}
