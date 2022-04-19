import React from 'react';
import styled from 'styled-components';
import {IntroEdit} from './introEditor';
import {INTRO_METADATA,SOCIAL_METADATA} from '../../meta-data/meta-data';
import { useIntro,useSkills } from '../../stores/data.store';
import {SocialEdit} from './socialEdit';
import {SkillsEdit} from './skillsEdit';
import shallow from 'zustand/shallow';
const Divider = styled.div`
  height: 2px;
  background: white;
  margin: 20px 0;
`;

const Container = styled.div`
  display: grid;
  gap: 1rem;
  background: #222;
`;

const Heading = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin-bottom: 0;
`;
export const IntroEditor = () => {
    const introState = useIntro((state: any) => state.intro);
    const update = useIntro((state: any) => state.update);
    return (
      <Container>
        <Heading>Intro</Heading>
        <IntroEdit  METADATA={INTRO_METADATA} state={introState}  update={update}/>
        <Divider />
      </Container>
    );
  };

  export const SocialEditor = () => {
    const profiles = useIntro((state: any) => state.intro.profiles);
    const updateProfiles = useIntro((state: any) => state.updateProfiles);
  
    return (
      <Container>
        <Heading>Social</Heading>
        <SocialEdit state={profiles} METADATA={SOCIAL_METADATA} update={updateProfiles} />
      </Container>
    );
  };
  export const SkillEditor = ({ type, hasRating = false }: { type: string; hasRating: boolean }) => {
    const [skillList, add, update, purge, changeOrder] = useSkills(
      (state: any) => [state[type], state.add, state.update, state.purge, state.changeOrder],
      shallow
    );
  
    return (
      <Container>
        <Heading>{type.toUpperCase()}</Heading>
        <SkillsEdit
          type={type}
          hasRating={hasRating}
          skills={skillList}
          addSkill={add}
          updateSkill={update}
          deleteSkill={purge}
          changeOrder={changeOrder}
        />
        <Divider />
      </Container>
    );
  };
  
  export const SkillsEditor = () => (
    <>
      <SkillEditor type="languages" hasRating />
      <SkillEditor type="frameworks" hasRating />
      <SkillEditor type="technologies" hasRating={false} />
      <SkillEditor type="libraries" hasRating={false} />
      <SkillEditor type="databases" hasRating={false} />
      <SkillEditor type="practices" hasRating={false} />
      <SkillEditor type="tools" hasRating={false} />
    </>
  );
  