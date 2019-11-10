import React from "react"

export default ({
  heading,
  subheading,
  cardHeading,
  cardTitle,
  cardSubHeading,
  cardBody,
  body,
  button,
  children,
  textStyles,
  lg,
}) => {
  if (!children) {
    console.warn("Typography requires inner text")
    return null
  }
  if (heading) {
    return (
      <h2
        style={{ ...textStyles }}
        className="text-white tracking-wide leading-tight text-3xl"
      >
        {children}
      </h2>
    )
  }
  if (subheading) {
    return (
      <h2
        style={{ ...textStyles }}
        className="text-white opacity-25  text-lg leading-none"
      >
        {children}
      </h2>
    )
  }
  if (body) {
    return (
      <p style={{ ...textStyles }} className="text-white  text-base">
        {children}
      </p>
    )
  }
  if (button) {
    return (
      <h2
        style={{ ...textStyles }}
        className={`text-white leading-none font-light ${
          lg ? "text-lg" : "text-base"
        }`}
      >
        {children}
      </h2>
    )
  }
  if (cardTitle) {
    return (
      <h3
        style={{ ...textStyles }}
        className={`text-white leading-tight text-lg font-medium tracking-wider`}
      >
        {children}
      </h3>
    )
  }
  if (cardHeading) {
    return (
      <h2
        style={{ ...textStyles }}
        className="text-white tracking-wider leading-tight text-2xl font-normal"
      >
        {children}
      </h2>
    )
  }
  if (cardSubHeading) {
    return (
      <h3
        style={{ ...textStyles }}
        className={`text-white leading-snug  font-light opacity-50 text-xs`}
      >
        {children}
      </h3>
    )
  }
  if (cardBody) {
    return (
      <h3
        style={{ ...textStyles }}
        className={`text-white leading-relaxed tracking-widest opacity-75  font-light opacity-50 text-xs`}
      >
        {children}
      </h3>
    )
  } else {
    console.warn("invalid prop passed to Typography")
    return <p>{children}</p>
  }
}
