import React from 'react'
import ReactDOM from 'react-dom'
import * as styled from './ModalStyles'

const Modal = (title, text, buttons) => {
  let closed = false
  if (!title || !text) close()

  const div = document.createElement('div')
  document.body.appendChild(div)

  function close() {
    ReactDOM.unmountComponentAtNode(div)
    if (div && div.parentNode) {
      div.parentNode.removeChild(div)
    }
  }

  const Buttons = buttons.map((button) => {
    const action = button.onPress || function () {}
    button.onPress = () => {
      if (closed) return
      const shut = action()
      if (shut && shut.then) {
        shut
          .then(() => {
            closed = true
            close()
          })
          .catch(() => {})
      } else {
        closed = true
        close()
      }
    }
    return button
  })

  ReactDOM.render(
    <ModalComponent
      title={title}
      text={text}
      buttons={Buttons}
    ></ModalComponent>,
    div
  )

  return {
    close
  }
}

const ModalComponent = (props) => {
  const { title, text, buttons } = props
  const buttonRender = (button, index) => {
    const onClickFn = (e) => {
      e.preventDefault()
      if (button.onPress) {
        button.onPress()
      }
    }
    return (
      <a key={index} onClick={onClickFn}>
        {button.text}
      </a>
    )
  }

  return (
    <styled.ModalHolder>
      <styled.Modal>
        <styled.Heading>{title}</styled.Heading>
        <styled.Paragraph>{text}</styled.Paragraph>
        <styled.ButtonsHolder>
          {buttons.map((button, index) => buttonRender(button, index))}
        </styled.ButtonsHolder>
      </styled.Modal>
    </styled.ModalHolder>
  )
}

export default Modal
