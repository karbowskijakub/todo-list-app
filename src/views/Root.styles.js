import styled, { keyframes } from 'styled-components';

const gradient = keyframes` 
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}

`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #8822c3, #e73c7e, #c400f5, #f2027a);
  background-size: 400% 400%;
  animation: ${gradient} 45s ease infinite;
  height: 100vh;
`;

export const ContainerBox = styled.div`
  width: 500px;
  height: 700px;
  border-radius: 15px;
`;
