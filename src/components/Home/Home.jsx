import React from 'react';
import styled from "styled-components";
import Moon from '../../assets/moon.png';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Container = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
gap:50px;
`;

const Left = styled.div`
width:50%;
display:flex;
align-items:end;
flex-direction:column;
h1{
    color:white;
    padding-bottom:10px;
}
h2{
    color:#da4ea2;
    padding-bottom:10px;
}
h3{
    color:white;
    padding-bottom:5px;
}
span{
    color:yellow;
}
`;

const Button = styled.button`
  border: none;
  margin-top:15px;
  background-color: #da4ea2;
  width: 100px;
  height: 30px;
  cursor: pointer;
  border-radius: 20px;
  color: white;

  :hover {
    color: #da4ea2;
    background-color: transparent;
    border:1px solid #da4ea2;
  }
`;

const Right=styled.div`
width:50%;
`

const Img = styled.img`
  height:450px;
  width:450px;
  animation: animate 1.5s infinite ease alternate;

  @keyframes animate{
    to{
        transform: translateY(20px);
    }
  }
`

const Mstart = styled.div`
display:flex;
justify-content:space-between;
padding-bottom:20px;
`

const Mbody = styled.ul`
li{
  padding-bottom:18px;
}
`

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
        <Container>
            <Left>
                <div>
                    <h1>HI THERE,</h1>
                    <h1>I'M <span>KRISHNA GOUTHAM</span></h1>
                    <h2>---I'am a WEB DEVELOPER</h2>
                    <h3>Experienced and self motivated</h3>
                    <h3>Proffisional with 1yr+ of industrty experience</h3>
                    <h3>Have developed several web apps</h3>
                    <Button onClick={handleOpen}>ABOUT ME</Button>
                </div>
            </Left>
            <Right>
                <Img src={Moon}/>
            </Right>

            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Mstart>
                <h2>About me</h2>
                <CloseIcon onClick={handleClose}/>
              </Mstart>
              <Mbody>
                <li>Proffisional with 1yr+ of industrty experience</li>
                <li>Proffisional with 1yr+ of industrty experience</li>
                <li>Proffisional with 1yr+ of industrty experience</li>
                <li>Proffisional with 1yr+ of industrty experience</li>
                <li>Proffisional with 1yr+ of industrty experience</li>
                <li>Proffisional with 1yr+ of industrty experience</li>
              </Mbody>
            </Box>
          </Modal>
        </Container>
  )
}

export default Home