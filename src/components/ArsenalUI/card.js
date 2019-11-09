import React from "react"

const CardImage = () => {
  return (
    <img
      className="h-32 rounded-lg w-full"
      src={require("../../images/img1.png")}
    />
  )
}
export default ({ children, cardImage, gutter, color }) => {
  const gutterRight = gutter ? "mr-4" : null
  return (
    <div
      style={{ minWidth: 300, scrollSnapAlign: "start", background: color }}
      className={`${gutterRight} bg-white max-w-xs p-2 h-full  w-10/12 rounded-lg`}
    >
      {cardImage ? <CardImage /> : null}
      {children}
    </div>
  )
}
