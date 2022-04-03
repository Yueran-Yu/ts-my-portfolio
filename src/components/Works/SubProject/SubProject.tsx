import * as React from 'react';
import {ButtonWrapper, ChildBtn, ChildSection, FirstChild, SecondChild, UlWrapper} from "./SubProject.styles";
import {FC} from "react";

interface SubProjectProps{
	title: string
	content: string
	projectUrl:string
	githubUrl:string
	skills: string[]
	img: string
	alt:string
}
const SubProject:FC<SubProjectProps> = ({title, content, projectUrl, githubUrl, skills, img, alt}) => {
  return (
    <ChildSection>
      <FirstChild className='first'>
        <div className='child-title'>{title}</div>
        <p>{content}</p>
        <UlWrapper>
          {skills.map((skill, index) => <li key={index}>{skill}</li>)}
        </UlWrapper>
        <ButtonWrapper>
          <ChildBtn href={projectUrl} target='_blank'>Project</ChildBtn>
          <ChildBtn href={githubUrl} target='_blank'>Github</ChildBtn>
        </ButtonWrapper>
      </FirstChild>
      <SecondChild>
        <img src={img} alt={alt}/>
      </SecondChild>
    </ChildSection>
  )
}
export default SubProject;
