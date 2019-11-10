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
  CardBody,
  Separator,
} from "../components/ArsenalUI"
import { MdMoreVert, MdLocationOn, MdModeComment } from "react-icons/md"
import { FaRegHeart } from "react-icons/fa"
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
        <Card gutter color="#333" cardImage>
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
                  right: -16,
                  color: "white",
                  opacity: 0.25,
                }}
                size={"2em"}
              ></MdMoreVert>
            </BarItem>
          </Flexbar>
        </Card>
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
                  right: -16,
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
          horizontal={true}
          gutter
          cardImage
          paddingX="2"
          paddingY="4"
          displayFlex
          fullWidth
          align="center"
          height="24"
        >
          <CardBody>
            <MdMoreVert
              style={{
                position: "absolute",
                top: 15,
                right: 0,
                color: "white",
                opacity: 0.25,
              }}
              size={"1.5em"}
            ></MdMoreVert>
            <Typography cardTitle>Hotel blue Lagoon</Typography>
            <Flexbar>
              <Typography spacing cardSubHeading>
                $230
              </Typography>
              <Typography
                opacity="opacity-25"
                spacing
                textDecor="line-through"
                cardSubHeading
              >
                $230
              </Typography>
            </Flexbar>
            <Flexbar spaceBetween padderY>
              <BarItem align="center" row>
                <MdLocationOn className="mr-1" color="#AAAAAA"></MdLocationOn>
                <Typography opacity="1" cardBody>
                  Chicago
                </Typography>
              </BarItem>
              <BarItem align="center" spaceBetween row>
                <FaRegHeart className="mr-1" color="#AAAAAA"></FaRegHeart>
                <Typography opacity="1" cardBody>
                  782
                </Typography>
                <MdModeComment color="#AAAAAA" className="mx-1"></MdModeComment>
                <Typography opacity="1" cardBody>
                  244
                </Typography>
              </BarItem>
            </Flexbar>
          </CardBody>
        </Card>
      </ScrollView>
      {/* <Flexbar row></Flexbar>  */}
    </section>
  </Layout>
)

export default IndexPage
