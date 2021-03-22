import styled from 'styled-components';
import { shade } from 'polished'

export const Container = styled.div`
  padding:10px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

}

`; 
  
export const ButtonProxima = styled.button`  
  background: white;
  color:#FFFFFF;
  text-transform: uppercase;
  font-weight: bold;  
  text-decoration:none;
  padding: 0.25em 1em; 
  margin: 10px;
  font-size: 16px;
  background: #AF1F24 0% 0% no-repeat padding-box;
  border-radius: 0px 3px 3px 0px;
  text-align: center;
  letter-spacing: 0px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#AF1F24')};
  }

`; 

export const ButtonAnterior = styled.button`  
  background: white;
  color:#FFFFFF;
  text-transform: uppercase;
  font-weight: bold;  
  text-decoration:none;
  padding: 0.25em 1em; 

  font-size: 16px;
  background: #AF1F24 0% 0% no-repeat padding-box;
  border-radius: 0px 3px 3px 0px;
  text-align: center;
  letter-spacing: 0px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#AF1F24')};
  }

`;