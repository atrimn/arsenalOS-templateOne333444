import React from "react"

//clean this up and document it

const CardImage = () => {
  return <img className="h-32  w-full" src={require("../../images/img1.png")} />
}

export default ({
  children,
  cardImage,
  gutter,
  color,
  gradient,
  fullWidth,
  height,
  displayFlex,
  padding,
  justify,
  bgImage,
  horizontal,
}) => {
  const gutterRight = gutter ? (horizontal ? "my-2" : "mr-4") : null
  const width = fullWidth ? "w-full" : "w-10/12"
  const maxWidth = fullWidth ? "" : "max-w-xs"
  const cardHeight = height ? `h-${height}` : "h-full"
  const display = displayFlex ? "flex" : "block"
  const paddingPx = padding ? `p-${padding}` : ""

  let justifyDir
  // let image

  // turn this into helper function
  switch (justify) {
    case "left":
      justifyDir = "justify-start"
      break
    case "right":
      justifyDir = "justify-end"
      break
    case "center":
      justifyDir = "justify-center"
      break
    case "around":
      justifyDir = "justify-around"
      break
    default:
      justifyDir = ""
      break
  }

  // if (bgImage) {
  // }

  let gradientColor
  if (gradient) {
    gradientColor = {
      background:
        "linear-gradient(25.02deg, rgba(210, 48, 120, 0.75) 19.6%, rgba(254, 97, 97, 0.75) 72.68%, rgba(255, 121, 85, 0.75) 92.75%), #F4327F",
      boxShadow: "0px 80px 120px rgba(0, 0, 0, 0.05)",
    }
  }
  return (
    <div
      style={{
        minWidth: 300,
        scrollSnapAlign: "start",
        background: color,
        ...gradientColor,
      }}
      className={`relative ${gutterRight} ${justifyDir} ${paddingPx} ${display} ${cardHeight} overflow-hidden bg-white ${maxWidth} pb-2   ${width} rounded-lg`}
    >
      {cardImage ? <CardImage /> : null}
      {bgImage ? (
        <img
          className=" absolute object-cover object-top h-full w-full top-0 left-0 right-0  z-1"
          src={bgImage}
          alt="background image"
        />
      ) : null}
      {children}
    </div>
  )
}
