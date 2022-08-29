import styled from 'styled-components';

export const ContainerBox = styled.div`
  width: 500px;
  height: 700px;
  background-color: rgba(50, 49, 49, 1);
  border: 2px solid ${({ theme }) => theme.colors.white};
  box-shadow: 10px 0px 15px 5px rgba(50, 49, 49, 1);
  border-radius: 15px;
  align-items: start;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  display: flex;
`;

export const FormField = styled.form`
  border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  background: rgb(136, 34, 195);
  background: linear-gradient(0deg, rgba(136, 34, 195, 1) 0%, rgba(50, 49, 49, 1) 100%);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  text-align: center;
  width: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const AddBar = styled.div`
  position: relative;
  width: 250px;
  height: 40px;
`;

export const Button = styled.button`
  position: absolute;
  min-width: 74px;
  padding: 15px;
  right: 0;
  font-size: 11px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(50, 49, 49, 1);
  border: px solid ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const TodoWrapper = styled.div`
  width: 100%;
  max-height: 600px;
  overflow-y: auto;
`;
