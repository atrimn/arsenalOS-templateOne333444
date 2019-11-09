import React from "react"

export default ({ children, spaceBetween, padderX, padderY }) => {
  let spacing = spaceBetween ? "justify-between" : ""
  let paddingX = padderX ? "px-2" : ""
  let paddingY = padderY ? "py-2" : ""
  return (
    <div className={`flex ${spacing} ${paddingX} ${paddingY}`}>{children}</div>
  )
}

export const BarItem = ({ children, row, col, flexEnd }) => {
  const display = row || col ? "flex flex-1" : "block"
  const flexDir = row ? null : "flex-col"
  const justify = flexEnd ? "justify-end" : ""
  return (
    <div className={`relative ${display} ${flexDir} ${justify}`}>
      {children}
    </div>
  )
}
