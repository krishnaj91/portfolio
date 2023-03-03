import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Mylogo from '../../assets/logo.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Tooltip from '@mui/material/Tooltip';

const Container = styled.div`
background-color: #01091c;
background-image: url('https://www.designrush.com/topbest/images/svg/footer-logo.svg');
background-repeat: no-repeat;
display:flex;
justify-content: space-around;
line-height: 35px;
padding:50px;
color:white;
`

const Social = styled.div`
display:flex;
align-self:center;
flex-direction:column;
justify-content:center;
align-items:center;
color: #2af4ff;

h3{
    margin:15px 0;
}
`

const Img = styled.img`
height:100px;
width:150px;

:hover{
    transform: scale(1.2);
}
`

const Icons =styled.div`
    display:flex;
    
    span{
        margin-right:20px;
    }
    span:hover{
        cursor:pointer;
        transform: scale(1.5);
    }
`

const About = styled.div`
h2{
    color: #2af4ff;
}
ul{
    list-style:none;
}
li{
    color:aliceblue;
}
li:hover{
    color: #00abf3;
    cursor:pointer;
}
`

const Info = styled.div`
h2{
    color: #2af4ff;
}
span{
    color: #6665a8;
}
ul{
    list-style:none;
}
li{
    color:aliceblue;
}
li:hover{
    color: #00abf3;
    cursor:pointer;
}
`

const Footer = () => {
    let navigate=useNavigate()
  return (
    <>
    <Container>
        <Social>
            <Img src={Mylogo} alt='krishna'/>
            <h3>Join On Social Community</h3>
            <Icons>
                <span><Tooltip title="LinkedIn"><LinkedInIcon/></Tooltip></span>
                <span><Tooltip title="Git Hub"><GitHubIcon/></Tooltip></span>
                <span><Tooltip title="Gmail"><EmailIcon/></Tooltip></span>
            </Icons>
        </Social>
        <About>
        <h2>ABOUT</h2>
            <ul>
                <li onClick={()=>{navigate('/')}}>Home</li>
                <li onClick={()=>{navigate('/skills')}}>Skills</li>
                <li>Projects</li>
                <li>Resume</li>
                <li onClick={()=>{navigate('/contact')}}>Contact</li>
            </ul>
        </About>
        <Info>
        <h2>PERSONAL INFO</h2>
        <ul>
            <li><span>Name  : </span>Krishna Goutham</li>
            <li><span>Mail  : </span>krishnagouth****@gmail.com</li>
            <li><span>Phone : </span>+91 798903476X</li>
            <li><span>Place : </span>Hyderabad</li>
        </ul>
        </Info>
    </Container>
    </>
  )
}

export default Footer