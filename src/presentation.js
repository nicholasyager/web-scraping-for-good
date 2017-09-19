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
  CodePane
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from "spectacle/lib/themes/default";
import robotTxt from "./assets/robots.txt";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

console.log(robotTxt);

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
          <Text margin="15px 0 0" >
            It depends!
          </Text>
        </Slide>

        <Slide bgImage="https://c1.staticflickr.com/4/3860/14931652922_d93d9c4977_b.jpg" bgDarken="0.75">
          <Heading size={5}  fit textColor="primary">
            Historically, U.S. courts have ruled that
          </Heading>
          <List ordered textFont="secondary" textColor="primary">
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
          <Heading size={5}  fit textColor="primary">
            U.S. courts have also ruled that
          </Heading>
          <List ordered textFont="secondary" textColor="primary">
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
            3. Digital Millennium Copyright Act ("DMCA")
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
          <Text size={6} textColor="secondary">Respect <Code>robots.txt</Code> if possible.</Text>
          <Notes>
            Test
          </Notes>
        </Slide>

        <CodeSlide
          code=""
          ranges={[
            {loc: [0, 1], title: "The User-Agent the rule applies to."}
          ]}
        />

        {/*
        <Slide bgColor="primary">
          <CodePane source=/>
          <Notes>
            Test
          </Notes>
        </Slide>
        */}
  
        <Slide bgColor="primary">
          <Heading size={5} textColor="secondary" caps>Rule 1</Heading>
          <Text size={6} textColor="secondary">Scraping should be a last resort.</Text>
          <Notes>
            Test
          </Notes>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={5} textColor="secondary" caps>Rule 1</Heading>
          <Text size={6} textColor="secondary">Scraping should be a last resort.</Text>
          <Notes>
            Test
          </Notes>
        </Slide>

        {/* Test your moral compass */}

        
   
         <Slide bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Header</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
          <Notes>
            Test
          </Notes>
        </Slide>
         <Slide bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Header</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
          <Notes>
            Test
          </Notes>
        </Slide>
         <Slide bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Header</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
          <Notes>
            Test
          </Notes>
        </Slide>
      </Deck>
    );
  }
}