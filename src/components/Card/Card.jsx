import React from 'react'
import * as styled from './CardStyles'

function Card(props, ref) {
  const { img, heading, paragraph, width, style } = props
  const order = Object.keys(props)

  return (
    <styled.Holder width={width} ref={ref} style={style}>
      {order[0] === 'img' ? (
        <styled.Image src={img.url} alt={img.alt} />
      ) : order[0] === 'heading' ? (
        <styled.heading>{heading}</styled.heading>
      ) : order[0] === 'paragraph' ? (
        <styled.Paragraph title={paragraph}>{paragraph}</styled.Paragraph>
      ) : (
        ''
      )}
      {order[1] === 'heading' ? (
        <styled.heading>{heading}</styled.heading>
      ) : order[1] === 'img' ? (
        <styled.Image src={img.url} alt={img.alt} />
      ) : order[1] === 'paragraph' ? (
        <styled.Paragraph title={paragraph}>{paragraph}</styled.Paragraph>
      ) : (
        ''
      )}
      {order[2] === 'paragraph' ? (
        <styled.Paragraph title={paragraph}>{paragraph}</styled.Paragraph>
      ) : order[2] === 'img' ? (
        <styled.Image src={img.url} alt={img.alt} />
      ) : order[2] === 'heading' ? (
        <styled.heading>{heading}</styled.heading>
      ) : (
        ''
      )}
    </styled.Holder>
  )
}

export default React.forwardRef(Card)
