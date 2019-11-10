import React from "react"

export default ({
  children,
  spaceBetween,
  padderX,
  padderY,
  marginY,
  marginTop,
}) => {
  let spacing = spaceBetween ? "justify-between" : ""
  let paddingX = padderX ? "px-2" : ""
  let paddingY = padderY ? "py-2" : ""
  let marginVertical = marginY ? "my-4" : ""
  let marginYTop = marginTop ? "mt-6" : ""
  // add rest of styles
  return (
    <div
      className={`flex ${marginYTop}  ${marginVertical} ${spacing} ${paddingX} ${paddingY}`}
    >
      {children}
    </div>
  )
}

// either replace this with CardItem or create different component
export const BarItem = ({ children, row, col, flexEnd, justify, grow }) => {
  const display = row || col ? "flex flex-1" : "block"
  const flexDir = row ? "" : "flex-col"
  // depracate this
  const justifyDepracated = flexEnd ? "justify-end" : ""
  const flexGrow = grow ? "flex-grow" : ""
  let justifyDir

  switch (justify) {
    case "left":
      justifyDir = "flex justify-start"
      break
    case "right":
      justifyDir = "flex justify-end"
      break
    case "center":
      justifyDir = "flex justify-center"
      break
    case "around":
      justifyDir = "flex justify-around"
      break
    default:
      justifyDir = ""
      break
  }
  return (
    <div
      className={`relative ${display} ${flexGrow} ${flexDir} ${justifyDepracated} ${justifyDir}`}
    >
      {children}
    </div>
  )
}
