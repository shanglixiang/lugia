import * as React from 'react';
import styled from 'styled-components';

const Title = styled.p`
  font-size: 24px;
  color: #0f1333;
  font-weight: 600;
  margin-bottom: 12px;
`;
const SubTitle = styled.p`
  font-size: 18px;
  color: #a1a3b2;
  margin-left: 10px;
  display: inline-block;
`;
const Desc = styled.p`
  font-size: 14px;
  color: #525466;
  margin-bottom: 40px;
`;

export default class TitleCom extends React.Component {
  render() {
    const { title, subTitle, desc } = this.props;
    return (
      <div>
        <Title>
          {title}
          <SubTitle>{subTitle}</SubTitle>
        </Title>
        <Desc>{desc}</Desc>
      </div>
    );
  }
}
