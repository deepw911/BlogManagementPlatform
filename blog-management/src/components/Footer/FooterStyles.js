import styled from 'styled-components';

export const Box = styled.div`
padding: 48px 60px;
background: #22577A;
bottom: 0;
width: 92%;
clear: both;
position: relative;
margin-top:200px;
height:1px;
font-family: "Montserrat",sans-serif;

@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
   
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	margin-right:100px;
	margin-bottom:0px;
`

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,minmax(180px, 1fr));
grid-gap: 8px;
margin-left:30px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 10px;
font-size: 18px;
text-decoration: none;
font-family: "Montserrat",sans-serif;

&:hover {
	color: #0A1931;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
font-weight: bold;
font-family: "Montserrat",sans-serif;
 margin-top:-5px;

`;
