import styled from "styled-components";
import * as config from "~/ui/config";

export const Button = styled.button`
  background: palevioletred;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 90px;

  @media ${config.device.pc} {
    width: 100px;
  }
`;

export const Items = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  list-style: none;
`;

export const Items2 = styled.ul`
  display: flex;

  > li {
    list-style: none;
  }
`;
