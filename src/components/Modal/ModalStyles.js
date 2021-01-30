import styled from 'styled-components'

const ModalHolder = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`

const Modal = styled.div`
  width: 300px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 0 0;
  background-color: #fff;
  border-radius: 7px;
`

const ButtonsHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid #ddd;
  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 18px;
    flex: 1;
    height: 50px;
    text-decoration: none;
  }
  & > a:not(:first-child) {
    color: #df5d00;
    border-left: 1px solid #ddd;
  }
`

const Heading = styled.h2`
  margin: 10px 20px 20px 20px;
`

const Paragraph = styled.p`
  margin: 10px 20px 20px 20px;
`

export { ModalHolder, Modal, ButtonsHolder, Heading, Paragraph }
