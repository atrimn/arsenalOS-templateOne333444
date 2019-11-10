import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import stealthistAnim from "../images/stealthistAnim.gif"
import { Button } from "../components/ArsenalUI"
const NotFoundPage = () => (
  <Layout location="/login">
    <SEO title="landing" />
    <section
      id="login"
      className="max-h-screen h-screen flex flex-col  px-8 items-center justify-center"
    >
      <img className="h-64  w-full" src={stealthistAnim} alt="test test " />
      <Button
        googleAuth
        fullWidth
        paddingY="4"
        titleColor="#000"
        title="Login with Google"
      ></Button>
    </section>
  </Layout>
)

export default NotFoundPage
