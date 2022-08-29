import styled from 'styled-components';
import { AiOutlineCloseSquare } from 'react-icons/ai';

export const TodosWrapper = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 2px solid ${({ theme }) => theme.colors.white};
  border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  background-color: transparent;
  &:first-child {
    display: none;
  }
`;

export const DeleteButton = styled(AiOutlineCloseSquare)`
  position: absolute;
  top: 17px;
  right: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
`;
