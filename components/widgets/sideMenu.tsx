import { Tooltip } from 'antd';
import styled from 'styled-components';
import { getIcon } from '../../styles/icons';
const Sider = styled.nav`
height: 100%;
font-size: 1.4rem;
padding: 8px;
background: #222;
`;
const IconWrapper = styled.div`
  outline-color: transparent;
  margin-bottom: 1rem;
`;
const IconButton = styled.div`
position: relative;
display: flex;
flex-direction: row;
cursor: pointer;
justify-content: center;
align-items: center;
height: 36px;
width: 40px;
background: transparent;
border: 0;
border-radius: 2px;
padding: 0;
color: rgb(230, 230, 230);
`    

const SideMenu = ({menuList,onClick,children}:any) => (
    <Sider>
       {menuList.map((item:any) => {
           return (
               <IconWrapper key={item.id} data-id={item.key} onClick={onClick}>
                    <Tooltip placement="left" title={item.title}>
                          <IconButton>{getIcon(`${item.icon}`)}</IconButton>
                    </Tooltip>
               </IconWrapper>
           )
       })}
       {children}
    </Sider>
)
export default SideMenu;