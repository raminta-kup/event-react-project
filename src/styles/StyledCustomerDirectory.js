import styled from "styled-components"

export const Logo = styled.img`
    height: 88px;
`

export const DirectoryTitle = styled.h1`
    margin: 0;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.8px;
`
export const Table = styled.table`
    border-collapse: collapse;
    width: 95%;
`
export const TableHead = styled.th`
    text-align: left;
    height: 30px;
    padding: 0 6px;
`
export const TableRow = styled.tr`
    :hover {
        background-color: #F3F3F3;
    }
`
export const DeleteBtn = styled.button`
    background-color: #D08355;
    border: none;
    color: #ffffff;
    padding: 6px 8px;
    border-radius: 4px;
    cursor: pointer;
`
export const TableData = styled.td`
    padding: 6px;
`
export const DirectoryIntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`
export const DirectoryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    border-radius: 0 8px 8px 0;
    overflow-y: auto;
`