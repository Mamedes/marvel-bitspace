import styled from 'styled-components';


export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const Section = styled.section`
display: block;
align-items: center;
justify-content: center;
padding-top:20px;
padding-left: 150px;
padding-bottom:50px;
p {
  color: #ff9000;
  display: flex;
  align-items: center;
  width: 400px;

}
h3 { 
  color: #c71830;
  display: flex;
  align-items: center;
  width: 400px;
  padding-top:10px;

}
h6 { 
  color: #ff9000;
  display: flex;
  align-items: center;
  width: 400px;

}
li {      
  position:relative;   
  padding:4px 8px;   
  list-style:none;     
  border-top:2px solid rgba(175, 31, 36, 0.4);      
  background: rgba(255,144,0,0.05);
  font-family:Roboto;
  font-weight:bold;
  color: #4e4a45;
}  
`;

export const HeroImg = styled.div`
margin-bottom: 32px;
position: relative;
width: 186px;
align-self: center;
img { 
  width: 250px;
  height: 250px;
  border-radius: 50%;

}
`;