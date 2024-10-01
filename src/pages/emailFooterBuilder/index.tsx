import React from "react";
import { CiLinkedin } from "react-icons/ci";
import triagil from "../../../src/assets/triagilhorizontal.png";
import autorizai from "../../../src/assets/autorizailogo.png";
import autorizaiCircle from "../../../src/assets/autorizaicircle .png";
import { ChangeEvent, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Component, Contact, Contacts, Data, Form, Linkedin, Logos, Name, Title, UserData, UserImg, Wrapper } from "./styles";

export default function EmailFooterBuilder() {
  const resumeRef = useRef<any>(null);
  const [ProfileData, setProfileData] = useState({
    name: "",
    role: "",
    phone: "",
    site: "www.triagil.com.br",
    email: "",
    linkedin: "",
    picture: "",
  });
  const [File, setFile] = useState<any>();

  function handleImgUpload(e: any) {
    setFile(e.target.files[0]);
  }

  function htmlToImage() {
    toPng(resumeRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleFormChange(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>, setData: React.Dispatch<React.SetStateAction<any>>) {
    const name = e.target.name;
    setData((prevData: Object) => ({ ...prevData, [name]: e.target.value }));
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
    handleFormChange(e, setProfileData);
  }

  return (
    <Component className="App">
      <Form>
        <input onChange={handleOnChange} value={ProfileData.name} type="text" placeholder="Nome" name="name" />
        <input onChange={handleOnChange} value={ProfileData.role} type="text" placeholder="Ocupação" name="role" />
        <input onChange={handleOnChange} value={ProfileData.phone} type="text" placeholder="Telefone" name="phone" />
        <input onChange={handleOnChange} value={ProfileData.email} type="text" placeholder="Email" name="email" />
        <input onChange={handleOnChange} value={ProfileData.linkedin} type="text" placeholder="Linkedin" name="linkedin" />
        <input onChange={handleImgUpload} type="file" />
      </Form>
      <Wrapper ref={resumeRef}>
        <UserData>
          <UserImg>
            <img src={autorizaiCircle} alt={`${autorizaiCircle}`} />
            {File && <img src={URL.createObjectURL(File)} alt={File.name} />}
          </UserImg>
          <Data>
            <div>
              <Name>{ProfileData.name}</Name>
              <Title>{ProfileData.role}</Title>
            </div>
            <Contacts>
              <Contact>{ProfileData.phone}</Contact>
              <Contact>{ProfileData.site}</Contact>
              <Contact>{ProfileData.email}</Contact>
            </Contacts>
            <Linkedin>
              <CiLinkedin />
              <p>{ProfileData.linkedin}</p>
            </Linkedin>
          </Data>
        </UserData>
        <Logos>
          <img src={triagil} alt="triagil" />
          <img src={autorizai} alt="triagil" />
        </Logos>
      </Wrapper>
      <button onClick={htmlToImage}>Gerar</button>
    </Component>
  );
}
