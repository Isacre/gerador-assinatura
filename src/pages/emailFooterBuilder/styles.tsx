import styled from "styled-components";

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
export const Wrapper = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  padding: 20px;
`;
export const UserData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 25px;
`;
export const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 165px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding-right: 80px;
`;
export const UserImg = styled.div`
  position: relative;
  border-radius: 50%;
  width: 175px;
  aspect-ratio: 1/1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    position: absolute;
    object-fit: cover;
    border-radius: 50%;
    aspect-ratio: 1/1;
    width: 100%;
    height: 100%;
  }

  img:first-child {
    filter: brightness(120%);
  }

  img:last-child {
    width: calc(100% - 14px);
    height: calc(100% - 14px);
    margin-right: 5px;
  }
`;
export const Logos = styled.div`
  padding-left: 20px;
  width: 300px;
  img {
    width: 230px;
    padding-bottom: 10px;
    padding-top: 10px;
  }

  img:first-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
export const Name = styled.b`
  font-size: 26px;
  line-height: 20px;
`;
export const Title = styled.p`
  line-height: 15px;
  font-size: 20px;
`;
export const Contacts = styled.ul`
  padding-top: 10px;
  li::before {
    content: "\\2022";
    color: #3ddaef;
    margin-right: 8px;
    align-self: center;
  }
`;
export const Contact = styled.li`
  list-style: none;
  margin-bottom: 8px;
`;
export const Linkedin = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 36px;
  }
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;

  width: 500px;

  input {
    padding: 10px;
  }
`;
