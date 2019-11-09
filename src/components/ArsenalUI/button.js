import React from "react"
import Typography from "./typography"
import { FaChevronRight } from "react-icons/fa"

export default ({ title, titleColor, gradient, lg, icon }) => {
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
      className="bg-gray-200 flex items-center outline-none rounded-full px-4 py-2"
    >
      <Typography lg={lg} button>
        {" "}
        {title || "title"}
      </Typography>
      {icon === "chevron" ? (
        <FaChevronRight className="ml-2 opacity-25" />
      ) : null}
    </button>
  )
}
