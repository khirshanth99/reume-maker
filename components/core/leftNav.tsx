import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import SideMenu from '../widgets/sideMenu';
import {SideDrawer} from '../widgets/sideDrawer';
import {IntroEditor,SocialEditor,SkillsEditor} from '../editor/Editor'
const Wrapper = styled.div`
height: 100vh;
display: flex;
position: fixed;
left: 0;
top: 0;
z-index: 1;

@media print {
  display: none;
}
`;


const sideBarList = [
  {
    key: 0,
    title: 'Intro',
    icon: 'identity',
    component: <IntroEditor/>
  },
    
  {
    key: 1,
    title: 'Social',
    icon: 'social',
    component: <SocialEditor/>
  },
  {
    key: 2,
    title: 'Skills',
    icon: 'tool',
    component: <SkillsEditor/>
  },
  {
    key: 3,
    title: 'Experience',
    icon: 'work',
    component: <IntroEditor/>
  },
  {
    key: 4,
    title: 'Education',
    icon: 'education',
    component: <IntroEditor/>
  },
  {
    key: 5,
    title: 'Awards',
    icon: 'awards',
    component: <IntroEditor/>
  },
  {
    key: 6,
    title: 'Activities',
    icon: 'certificate',
    component: <IntroEditor/>
  },
  {
    key: 7,
    title: 'Label',
    icon: 'label',
    component: <IntroEditor/>
  },
];

const LeftNav = () => {
  const [activeTab, setActiveTab] = useState(-1);

  const clickHandler = useCallback(
    (event: any) => {
     
      if (activeTab === event.currentTarget.dataset.id) setActiveTab(-1);
      else setActiveTab(event.currentTarget.dataset.id);
    },
    [activeTab, setActiveTab]
  );
  return (
   <Wrapper>
       <SideMenu menuList={sideBarList}onClick={clickHandler} />
       <SideDrawer isShown={activeTab !== -1}>{sideBarList[activeTab]?.component}</SideDrawer>
   </Wrapper>
)
  }
export default LeftNav