import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {
  Button,
  Typography,
  Flexbar,
  BarItem,
  ScrollView,
  Card,
  Separator,
} from "../components/ArsenalUI"
import { MdMoreVert } from "react-icons/md"
import bgImage from "../images/city.svg"
//  flexbar at the bottom because border-sizing seems to not be working

const IndexPage = () => (
  <Layout>
    <SEO title="Explore" />
    <section id="hero">
      <div className="h-64 bg-gray-200">
        <h2>Placeholder</h2>
      </div>
    </section>
    <section id="featured" className="px-4">
      <Flexbar marginTop padderX padderY spaceBetween>
        <Typography heading>Featured</Typography>
        <Button icon="chevron" gradient title="see all"></Button>
      </Flexbar>
      <ScrollView marginY horizontal>
        <Card color="#333" gutter cardImage></Card>
        <Card color="#333" cardImage>
          <Flexbar padderY padderX>
            <BarItem col>
              <Typography cardTitle>It's Lit 🔥</Typography>
              <Typography cardSubHeading>
                Hello world
                <span className="rounded h-2 w-2 ml-2 mr-2 bg-gray-200 inline-block"></span>
                $50000
              </Typography>
            </BarItem>
            <BarItem row>
              <MdMoreVert
                style={{
                  position: "absolute",
                  top: 0,
                  right: -18,
                  color: "white",
                  opacity: 0.25,
                }}
                size={"2em"}
              ></MdMoreVert>
            </BarItem>
          </Flexbar>
        </Card>
      </ScrollView>
    </section>
    <section id="places" className="px-4 h-auto">
      <Separator />
      <Flexbar marginY padderX padderY spaceBetween>
        <Typography heading>Places to visit</Typography>
      </Flexbar>
      <Card
        bgImage={bgImage}
        displayFlex
        gradient
        fullWidth
        height="64"
        paddingX="4"
      >
        <BarItem justify="center" grow>
          <Typography cardHeading>Charco Azul</Typography>
          <Typography cardBody>
            Morbi urna elit, porta vitae convallis non, bibendum nec diam.
          </Typography>
        </BarItem>
      </Card>
      <ScrollView vertical marginY>
        <Card
          color="#333"
          horizontal
          gutter
          cardImage
          paddingX="4"
          paddingY="4"
          displayFlex
          fullWidth
          // align="center"
          height="28"
        >
          <div>
            <h2>hello</h2>
          </div>
        </Card>
        <Card color="#333" horizontal gutter fullWidth height="20"></Card>
        <Card color="#333" horizontal gutter fullWidth height="20"></Card>
        <Card color="#333" horizontal gutter fullWidth height="20"></Card>
        <Card color="#333" horizontal gutter fullWidth height="20"></Card>
        <Card color="#333" horizontal gutter fullWidth height="20"></Card>
        <Card color="#333" horizontal gutter fullWidth height="20"></Card>
      </ScrollView>
      {/* <Flexbar row></Flexbar>  */}
    </section>
  </Layout>
)

export default IndexPage
