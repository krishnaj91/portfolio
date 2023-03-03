import { TextareaAutosize, TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div``;

const Form = styled.div`
  display: flex;
  align-items: end;
  padding-top: 50px;
  flex-direction: column;
  width: 50%;

  h1 {
    display: flex;
    align-self: center;
    color: pink;
  }
  p{
    color:red;
    display: flex;
    align-self: center;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  span {
    display: flex;
    align-self: center;
  }
`;

const Button = styled.button`
  border: none;
  background-color: #da4ea2;
  width: 100px;
  height: 30px;
  cursor: pointer;
  border-radius: 20px;
  color: white;
  margin-top:10px;
  
  :hover {
    color: #da4ea2;
    background-color: transparent;
    border: 1px solid #da4ea2;
  }
`;
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (name,value)=>{
    setForm((preValue)=>({...preValue,[name]:value}))
    setFormError((preValue)=>({...preValue,[name]:''}))
  }

  const Validate = ()=>{
    const tempObj = {...formError}
    if(form.name===''){
      tempObj.name="Please enter Name"
    }
    if(form.email===''){
      tempObj.email="Please enter Email"
    }
    if(form.description===''){
      tempObj.description="Please enter Description"
    }
    setFormError(tempObj)
  }

  const handleSubmit = ()=>{
    Validate()
    if(form.name.length>3 && form.email.length>8 && form.description.length>10){
      alert("response recorded")
    }
  }
  return (
    <Container>
      <Form>
        <div>
          <h1>Contact Me</h1>
          <TextField
            style={{ width: 300, backgroundColor: "white", margin: "10px" }}
            value={form.name}
            onChange={(e)=>{handleChange('name',e.target.value)}}
            placeholder="Name"
            label='Name'
            type="text"
          />
          <p>{formError.name}</p>
          <TextField
            style={{ width: 300, backgroundColor: "white", margin: "10px" }}
            value={form.email}
            onChange={(e)=>{handleChange('email',e.target.value)}}
            placeholder="Email"
            label='Email'
            type="email"
          />
          <p>{formError.email}</p>
          <TextareaAutosize
            style={{ width: 300, backgroundColor: "white", margin: "10px" }}
            value={form.description}
            onChange={(e)=>{handleChange('description',e.target.value)}}
            minRows={6}
            placeholder="Write your message"
            label='Message'
            type="text"
          />
          <p>{formError.description}</p>
          <span>
            <Button onClick={handleSubmit}>SUBMIT</Button>
          </span>
        </div>
      </Form>
    </Container>
  );
};

export default Contact;
