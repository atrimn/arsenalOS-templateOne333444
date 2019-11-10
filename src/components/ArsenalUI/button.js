import React from "react"
import Typography from "./typography"
import { FaChevronRight } from "react-icons/fa"
import googleIcon from "../../images/googleauth.svg"

export default ({
  title,
  titleColor,
  gradient,
  googleAuth,
  lg,
  icon,
  paddingY,
  fullWidth,
  titleStyle,
}) => {
  let color

  if (!title) {
    console.warn("Title Prop is required")
  }

  if (gradient) {
    color = {
      background:
        "linear-gradient(0deg, rgba(210, 48, 120, 0.75) 15.55%, rgba(254, 97, 97, 0.75) 76.83%, rgba(255, 121, 85, 0.75) 100%), #E9486D",
    }
  }

  return (
    <button
      style={{ ...color, color: titleColor }}
      className={`bg-gray-200 ${
        googleAuth ? "mt-20" : ""
      } py-${paddingY} flex items-center outline-none  ${
        fullWidth ? "w-full  justify-center relative" : ""
      } rounded-full px-4 py-2`}
    >
      {googleAuth ? (
        <img
          style={{ left: 20 }}
          className=" absolute left-0 h-6 mr-8"
          src={googleIcon}
          alt="google"
        />
      ) : null}
      <Typography
        textStyles={titleStyle}
        titleColor={titleColor}
        lg={lg}
        button
      >
        {" "}
        {title || "title"}
      </Typography>
      {icon === "chevron" ? (
        <FaChevronRight className="ml-2 opacity-25" />
      ) : null}
    </button>
  )
}
