import styled from "styled-components";
import Link from 'next/link';
const Nav = styled.nav`
  display:flex;
  justify-content:space-between;
  align-items: center;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  position: absolute;
  width: 90%;
  
  @media (min-width: 768px) {
    position: static;
    width: 100%;
  }

`
const Span = styled.span`
font-family: MV Boli;
font-weight: 900;
text-transform: uppercase;
background:linear-gradient(to right,rgb(249 228 54),rgb(255 23 15));
background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size:35px;
`

const Navbar = () => (
    <Nav>
        <Link href='/'>
           <Span>Resume Builder</Span>  
        </Link>
    </Nav>
)

export default Navbar