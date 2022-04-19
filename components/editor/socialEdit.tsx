import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Input as AntInput } from 'antd';


const Wrapper = styled.div`
  margin: 8px 0;
`;

const Topic = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 7px;
`;

const Input = styled(AntInput)`
  border: 1px solid #222;
  height: 2.625rem;
  padding: 0.625rem;
  width: 94%;
  background: #424242;
  color: #fff;
  border-radius: 2px;
  margin-bottom: 5px;
`;

export function SocialEdit({ METADATA, state, update }: any) {
  return METADATA.map((metadata:any) => (
    <Wrapper key={metadata.label}>
      <Topic>{metadata.label}</Topic>
      <Input
        value={state.find((value:any) => value.network === metadata.value)?.username}
        placeholder="username"
        onChange={(event) => update(metadata.value, 'username', event.target.value)}
      />
      <Input
        value={state.find((value:any) => value.network === metadata.value)?.url}
        placeholder="url"
        onChange={(event) => update(metadata.value, 'url', event.target.value)}
      />
    </Wrapper>
  ));
}
