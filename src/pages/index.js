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
} from "../components/ArsenalUI"
import { MdMoreVert } from "react-icons/md"

const IndexPage = () => (
  <Layout>
    <SEO title="Explore" />
    <section id="hero">
      <div className="h-64 bg-gray-200">
        <h2>Placeholder</h2>
      </div>
    </section>
    <section id="featured" className="px-2">
      <Flexbar padderX padderY spaceBetween>
        <Typography heading>Featured</Typography>
        <Button icon="chevron" gradient title="see all"></Button>
      </Flexbar>
      <ScrollView horizontal>
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
                  right: -20,
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
    <section id="places"></section>
  </Layout>
)

export default IndexPage
