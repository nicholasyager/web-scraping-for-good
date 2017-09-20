/* eslint import/no-webpack-loader-syntax: off */

// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  S,
  Notes,
  Appear,
  Image,
  Code,
  CodePane,
  Link
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import robotTxt from "./assets/robots.txt";
import headerExample from "./assets/headers-example.txt";
import nflgame from "./assets/nflgame.jpg";

// Require CSS
require("./css/prism-monokai.css");
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  secondary: "white",
  primary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={200} theme={theme} progress="bar">
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Web Scraping for Good <S type="strikethrough">and Evil</S>
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            How to be a good citizen in the world of web scraping.
          </Text>
        </Slide>

        {/* Legality? */}
       <Slide bgColor="primary">
          <Heading size={4} textColor="secondary" fit>
            What's the legality of web scraping?
          </Heading>
        </Slide>

        <Slide bgColor="primary" textFont="secondary">
          <Heading size={1} textColor="secondary" >
            ¯\_(ツ)_/¯
          </Heading>
          <Text margin="15px 0 0" textColor="secondary">
            It depends!
          </Text>
        </Slide>

        <Slide bgImage="https://c1.staticflickr.com/4/3860/14931652922_d93d9c4977_b.jpg" bgDarken="0.75">
          <Heading size={5}  fit textColor="secondary">
            Historically, U.S. courts have ruled that
          </Heading>
          <List ordered textFont="secondary" textColor="secondary">
            <Appear>
              <ListItem>You cannot copyright facts</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="15px 0 0" >Bots are typically not held liable for breaching a website's terms of service</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="15px 0 0" >Copyright may only apply to the creative aspects of a collection</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide bgColor="primary">
          <Image src="http://33.media.tumblr.com/8bc2351584653e697d150a2647f24869/tumblr_nk4myierOs1u10srao1_500.gif"/>
          <BlockQuote >
            <Quote textColor="secondary">No one can stop me!</Quote>
            <Cite>You, right now.</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgImage="https://c1.staticflickr.com/4/3860/14931652922_d93d9c4977_b.jpg" bgDarken="0.75">
          <Heading size={5}  fit textColor="secondary">
            U.S. courts have also ruled that
          </Heading>
          <List ordered textFont="secondary" textColor="secondary">
            <Appear>
              <ListItem>You cannot access data without authorization or in a manner that will exceed your authorization.</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="15px 0 0" >You cannot degrade service or inflict harm on a business.</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="15px 0 0" >You cannot circumvent security mechanism to obtain data.</ListItem>
            </Appear>
          </List>
          <Notes>
            1. Comnputer Fraud and Abuse Act (CFAA).
            2. Tresspass to Chattels.
            3. Digital Millennium Copyright Act (DMCA)
          </Notes>
        </Slide>

        {/* Ethics */}
       <Slide bgColor="primary">
        <Heading size={4} textColor="secondary" fit>
          How do I scrape public data <S type="italic" textColor="tertiary">ethically</S>?
        </Heading>
      </Slide>

        {/* Guidelines to consider */}

        <Slide bgColor="primary">
          <Heading size={5} textColor="secondary" caps>Rule 1</Heading>
          <Text size={6} textColor="secondary">Scraping should be a last resort.</Text>
          <Notes>
            Test
          </Notes>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={5} textColor="secondary" caps>Rule 2</Heading>
          <Text size={6} textColor="secondary">Identify yourself.</Text>
          <Notes>
            Test
          </Notes>
        </Slide>

        <Slide bgColor="#272822">
          <CodePane source={headerExample} lang="python"/>
          <Notes>
            Test
          </Notes>
        </Slide>

{/*        <CodeSlide 
          lang="pythony"
          bgColor="#002b36"
          color="#eee8d5"
          code={headerExample}
          border="0px"
          ranges={[
            {loc: [0, 9], title: "Requests Example"},
            {loc: [2, 5], note: 'Set "User-Agent" in a python dict.'},
            {loc: [8, 9], note: "Pass the headers dict to requests.get through the headers argument."}
          ]}
        />*/}

        <Slide bgColor="primary">
          <Heading size={5} textColor="secondary" caps>Rule 3</Heading>
          <Text size={6} textColor="secondary">Respect <Code textColor="secondary" bgColor="primary">robots.txt</Code> if possible.</Text>
          <Notes>
            Test
          </Notes>
        </Slide>

{/*        <CodeSlide 
          bgColor="#002b36"
          color="#eee8d5"
          code={robotTxt}
          border="0px"
          lang="HTTP"
          ranges={[
            {loc: [0, 3], title: "robots.txt"},
            {loc: [0, 2], note: "Disallow access to /secret-data for all user agents."},
            {loc: [3, 5], note: "Disallow all access for John's Evil Bot."},
            {loc: [6, 8], note: "Allow access to all paths for Nick's Super Awesome Nearly-Sentient Bot."}
          ]}
        />*/}

         <Slide bgColor="#272822" >
          <CodePane source={robotTxt} lang="properties" fill/>
          <Notes>
            Test
          </Notes>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={4} textColor="secondary" fit>Use your best judgement.</Heading>
          <Notes>
            Test
          </Notes>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={5} textColor="secondary" caps>Rule 4</Heading>
          <Text size={6} textColor="secondary">Request data at a reasonable rate.</Text>
          <Notes>
            Test
          </Notes>
        </Slide>

        <Slide bgColor="primary">
          <Image src="https://i.makeagif.com/media/9-13-2015/WWhtKL.gif"/>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={5} textColor="secondary" caps>Rule 5</Heading>
          <Text size={6} textColor="secondary">Create <S type="italic" textColor="tertiary">new</S> value from the data collected.</Text>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={5} textColor="secondary" caps>Rule 6</Heading>
          <Text size={6} textColor="secondary">Give back to the community.</Text>
        </Slide>

        <Slide bgImage={nflgame}>
        </Slide>

         <Slide bgColor="primary">
          <Heading size={4} textColor="secondary" caps fit>Even you can be a Data Hero!</Heading>
          <Text textSize={15} textColor="secondary">Slides available at <Link href="https://nicholasyager.com">nicholasyager.com</Link>.</Text>
          <Notes>
            Test
          </Notes>
        </Slide>

{/*
        <Slide bgColor="primary">
          <Heading size={3} textColor="secondary" caps >Fair Use</Heading>
          <Notes>
            Test
          </Notes>
        </Slide>

         <Slide bgColor="primary">
          <BlockQuote>
            <Quote textSize={50} textFont="secondary"  textColor="secondary">
              The fair use of a copyrighted work ... for purposes such as criticism, 
              comment, news reporting, teaching ... , scholarship, or research, 
              is not an infringement of copyright. 
            </Quote>
            <Cite>
              <Link href="https://www.law.cornell.edu/uscode/text/17/107">17 U.S.C. § 107</Link>
            </Cite>
          </BlockQuote>
          <Notes>
            Test
          </Notes>
        </Slide>

        <Slide bgImage="https://c1.staticflickr.com/4/3860/14931652922_d93d9c4977_b.jpg" bgDarken="0.75">
          <Heading size={5}  fit textColor="secondary">
            Factors for determining fair use
          </Heading>
          <List ordered textFont="secondary" textColor="secondary">
            <Appear>
              <ListItem>The purpose and character of the use</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="15px 0 0" >The nature of the copyrighted work</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="15px 0 0" >The amount and substantiality of the portion taken</ListItem>
            </Appear>
             <Appear>
              <ListItem margin="15px 0 0" >The effect of the use upon the potential market</ListItem>
            </Appear>
          </List>
           <Notes>  
            <ul>
             <li>The purpose and character of the use</li>
            <li>The nature of the copyrighted work</li>
            <li>The amount and substantiality of the portion taken</li>
            <li>The effect of the use upon the potential market</li>
            </ul>
          </Notes>
        </Slide>*/}

      </Deck>
    );
  }
}