import React from 'react';
import { Rate, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';
const TextBox = styled.span`
  font-size: 14px;
  color: #333;
  margin: 0 6px;
`;
export default class RateDemo extends React.Component<any, any> {
  constructor(props: Object) {
    super(props);
    this.state = {
      defaultProps:3,
      defaultProps7:0
    };
  }
  render() {
    const config = {
      [Widget.Rate]: { fontSize: '18px' }
    };
    const defaultProps = {
      count: 10,
      max: 10,
      value: 3,
      disabled: false,
      allowHalf: false,
      classify: false,
      onClick: (e: Object, x: any) => {
        this.setStateValue('defaultProps', x.newValue);
      },
      onChange: (e: Object, x: any) => {
        this.setStateValue('defaultProps', x.newValue);
      }
    };
    const defaultProps7 = {
      count: 5,
      allowHalf: true,
      onClick: (e: Object, x: any) => {
        this.setStateValue('defaultProps7', x.newValue);
      },
      onChange: (e: Object, x: any) => {
        this.setStateValue('defaultProps7', x.newValue);
      }
    };
    return (
      <div>
        <div>
          <div>
            <Rate />
          </div>
          <Rate {...defaultProps7} />
          <TextBox>{this.state.defaultProps7} 颗星</TextBox>
        </div>
        <Theme config={config}>
          <Rate {...defaultProps} />
          <TextBox>{this.state.defaultProps} 颗星</TextBox>
        </Theme>
      </div>
    );
  }
  setStateValue = (target: string, val: number) => {
    this.setState({
      [target]: val
    });
  };
}
