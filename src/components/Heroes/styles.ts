import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    margin-top: 40px;
    width: 100%;
    overflow: auto;
    height: auto;
    height: calc(100vh -150px);
  }
`;
export const CardArea = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(254px,1fr));
    grid-gap:30px
  }
`;
export const CardAreaColumn = styled.div`
    flex: 1 ;
    border-radius: 3px;
    padding:  20px;
    align-items: center;
    position: relative;
  }
`;
export const HeroCard = styled.div`
    display: center;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    display: flex;
    border: 1px groove rgba(175, 31, 36, 0.4);
    border-radius:10px;
    width: 100%;
    flex-direction: column;
    
  }
`;
export const HeroCardWrapper = styled.section`
    display: block;
    align-items: center;
    
  }
`;
export const HeroNome = styled.div`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
  }
`;
export const HeroImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 168px;
    height: 256px;
    border-radius: 10px;
  }
`;

export const CardFooter = styled.div`
  display:flex;
  height: 100%;
  padding: .75rem 1.25rem;  
    
  }
`;

export const CardButton = styled.button`
  background: white;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  padding: 0.25em 1em;
  font-size: 16px;
  background: #af1f24 0% 0% no-repeat padding-box;
  border-radius: 0px 3px 3px 0px;
  text-align: center;
  letter-spacing: 0px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, "#AF1F24")};
  }
`;
