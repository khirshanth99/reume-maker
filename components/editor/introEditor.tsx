import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Input as AntInput } from 'antd';
import { MarkDownField } from '../widgets/MarkDownEditor';

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
  height: 2rem;
  padding: 0.625rem;
  width: 94%;
  background: #424242;
  color: #fff;
  border-radius: 2px;
  margin-bottom: 5px;
`;

export const IntroEdit = ({ METADATA, state, update }: any) => {

    return (
        <>
            {METADATA.map((metadata: any) => (
                <Wrapper key={metadata.label}>
                    <Topic>{metadata.label}</Topic>
                    {metadata.type === 'Input' ?  <Input value={state[metadata.value]}  data-label={metadata.value}
              onChange={(event) => update(event.target.dataset.label, event.target.value)}/> : <MarkDownField value={state[metadata.value]}  setValue={(text:any) => update(metadata.value, text)}/>}
                </Wrapper>
            ))}

        </>
    )
}


