import * as React from 'react';
import { HelloText, HomeContainer, MediaItem, MyName, ResumeBtn, SelfIntroduction, SelfText, SocialMedia} from "./Home.styles";
import {Image} from "../Image";
import {FaBlog, FaGithubSquare, FaLinkedin, FaTwitterSquare} from "react-icons/fa";

const Home = () => {
  return (
    <HomeContainer id='home'>
      <div className='photo'>
        <Image imageName={`photo`}/>
      </div>
      <SelfIntroduction>
        <HelloText>Hello everyone👋, I'm</HelloText>
        <MyName>Grace Yu</MyName>
        <SelfText>I'm a self-taught, persistent and forever learning front end developer</SelfText>
        <ResumeBtn href={process.env.PUBLIC_URL + "Grace_Yu_Resume.pdf"} target='_blank'>Resume</ResumeBtn>
        <SocialMedia>
          <MediaItem><a href="https://twitter.com/librayuyueran"><FaTwitterSquare/></a></MediaItem>
          <MediaItem><a href="https://github.com/Yueran-Yu"><FaGithubSquare/></a></MediaItem>
          <MediaItem><a href="https://www.linkedin.com/in/grace-yyu/"><FaLinkedin/></a></MediaItem>
          <MediaItem><a href="https://yueran-yu.github.io/"><FaBlog/></a></MediaItem>
        </SocialMedia>
      </SelfIntroduction>
    </HomeContainer>
  )
}

export default Home;