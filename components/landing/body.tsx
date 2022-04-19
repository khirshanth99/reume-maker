import styled from "styled-components";
import Link from 'next/link';
import Image from 'next/image';
const BodyHolder  = styled.div`
display: flex;
flex-direction: column;
align-items: center;
row-gap: 20px;
margin-top: 10%;

& > * {
  flex-basis: 50%;
}

h3 {
  margin-bottom: -10px;
  font-weight: normal;
  text-align: center;
  font-size:1rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.cta-holder {
  display: flex;
  justify-content: center;
}

@media (min-width: 768px) {
  flex-direction: row;

  h3 {
    text-align: start;
  }

  h1 {
    font-size: 2.5rem;
    text-align: start;
  }

  .cta-holder {
    justify-content: flex-start;
  }
}
   
`
const CTA = styled.span`
  padding: 0.8rem 2rem;
  background: #6c63ff;
  color: white;
  border-radius: 4px;
  text-align: center;
  font-size: 1rem;
`;

const Body = () => (
   <BodyHolder>
       <div>
           <h3>Free & Open source</h3>
        <h1>
          Single Page <br />
          Resume Builder
        </h1>
        <div className="cta-holder">
          <Link href="/editor">
            <a>
              <CTA>Get Started</CTA>
            </a>
          </Link>
        </div>
      </div>
 
        <Image src="/hiring.svg" alt="hiring" width={100} height="300px" priority />
  
    
    
   </BodyHolder>
)

export default Body