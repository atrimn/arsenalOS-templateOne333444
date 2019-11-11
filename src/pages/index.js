import React from "react"
import { Link } from "gatsby"
// import { animations } from "react-animation"
import { AnimateOnChange } from "react-animation"
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
import heroBg from "../images/heroBg.svg"
import heroTitle from "../images/heroTitle.svg"
//  flexbar at the bottom because border-sizing seems to not be working

// const styleSlideIn = {
//   animation: animations.slideIn,
// }

const IndexPage = () => {
  const [timer, setTimer] = React.useState()
  const [wordIndex, setIndex] = React.useState(0)

  let index = 0
  let word = ["SEXY", "FAST", "RELIABLE"]

  const startTimer = () => {
    let index = 0
    return setInterval(() => {
      if (index === word.length - 1) {
        index = 0
        setIndex(0)
      } else {
        console.log("here" + index)
        index++
        setIndex(index)
      }
    }, 2000)
  }

  React.useEffect(() => {
    const timerId = startTimer()
    setTimer(timerId)
    return () => timer()
  }, [])

  return (
    <Layout>
      <SEO title="Explore" />
      <section id="hero">
        <div className="relative h-64 bg-gray-200">
          <img
            className="absolute z-1 h-full w-full object-cover"
            src={heroBg}
            alt=""
          />
          <div
            style={{ background: "rgba(34, 34, 34, 0.75)" }}
            className="absolute z-10 h-full w-full"
          />
          <div className="relative w-full flex items-center flex-col pt-8 h-full z-50">
            <img className="w-24 h-10" src={heroTitle} alt="Stealthist" />
            <Typography heroBody>Starter Kits That Help You Ship</Typography>
            <AnimateOnChange
              animationIn="bounceIn"
              animationOut="bounceOut"
              durationOut={500}
            >
              <Typography textStyles={{ color: "#7289DA" }} heroTitle>
                {word[wordIndex]}
              </Typography>
            </AnimateOnChange>
            <Typography heroBody>Web Apps In Record Time</Typography>
            <Button
              paddingY="4"
              paddingX="8"
              buttonStyles={{ marginTop: 30, background: "#7289DA" }}
              title="Sign Up For Beta"
            ></Button>
          </div>
        </div>
      </section>
      <section id="featured" className="pl-4">
        <Flexbar classes="pr-4" marginTop padderX padderY spaceBetween>
          <Typography heading>Featured</Typography>
          <Button
            // icon="chevron"
            paddingX="6"
            buttonStyles={{ background: "#7289DA" }}
            title="see all"
          ></Button>
        </Flexbar>
        <ScrollView marginY horizontal>
          <Card gutter color="#353535" cardImage>
            <Flexbar padderY padderX>
              <BarItem col>
                <Typography cardTitle>Hologram</Typography>
                <Typography cardSubHeading>
                  $68
                  <span className="rounded h-2 w-2 ml-2 mr-2 bg-gray-200 inline-block"></span>
                  by Hologram
                </Typography>
              </BarItem>
            </Flexbar>
          </Card>
          <Card gutter color="#353535" cardImage>
            <Flexbar padderY padderX>
              <BarItem col>
                <Typography cardTitle>Hologram</Typography>
                <Typography cardSubHeading>
                  $68
                  <span className="rounded h-2 w-2 ml-2 mr-2 bg-gray-200 inline-block"></span>
                  by Hologram
                </Typography>
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
            color="#353535"
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
                  <MdModeComment
                    color="#AAAAAA"
                    className="mx-1"
                  ></MdModeComment>
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
}

export default IndexPage
