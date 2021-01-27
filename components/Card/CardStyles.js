import styled from "styled-components";

const Holder = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 360px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;

const Image = styled.img`
  width: 100%;
  height: 60%;
`;

const Paragraph = styled.p`
  margin: 0 1rem 1rem 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-align: start;
`;

export { Holder, Image, Paragraph };
