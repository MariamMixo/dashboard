import React from 'react'
import styled from 'styled-components'

export const ContentComponent: React.FC = () => {
  const data = [
    { id: 1, item: 'Machine 1', status: 'Active' },
    { id: 2, item: 'Machine 2', status: 'Active' },
    { id: 3, item: 'Machine 3', status: 'Active' },
    { id: 4, item: 'Machine 4', status: 'Active' },
  ]
  return (
    <SectionContent>
      <SectionListItems>
        {data.map((item, index) => {
          return (
            <ListItem key={index}>
              <h5>{item.item}</h5>
              <p>{item.status}</p>
            </ListItem>
          )
        })}

      </SectionListItems>
      <SectionHomeInfo>
        <TitleHomeInfo>General Information</TitleHomeInfo>
        <DivHomeInfo></DivHomeInfo>
      </SectionHomeInfo>
    </SectionContent>
  )
}

const SectionContent = styled.section`
  width: 100%;
  background-color: #ebebeb;
  height: 2000px;
  padding: 3% 3% 0 23.3%;
  overflow: hidden;
`

const SectionListItems = styled.section`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 2000px;
  overflow-x: auto;
  white-space: nowrap;
`

const ListItem = styled.div`
  width: 300px;
  height: 300px;
  background-color: #fff;
  border-radius: 15px;
  color: #000;
`

const SectionHomeInfo = styled.section`
  margin-top: 70px;
`

const TitleHomeInfo = styled.h3`
  background-color: #ffffff;
  padding: 7px;
  width: fit-content;
  color: #000;
  border-radius: 5px;
`

const DivHomeInfo = styled.div`
  background-color: #fff;
  width: 100%;
  height: 800px;
  border-radius: 15px;
`