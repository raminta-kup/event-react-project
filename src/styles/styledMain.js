import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  box-sizing: border-box;
  width: 52vw;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`
export const StyledLeftDiv = styled.div`
  background-color: #F3F3F3;
  width: 26%;
`
export const StyledRightDiv = styled.div`
  background-color: #FFFFFF;
  width: 74%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border-radius: 0 8px 8px 0;
  overflow-y: auto;
  max-height: 642px;
`