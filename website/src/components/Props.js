/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import { Tooltip } from '@smooth-ui/core-sc'

const Table = styled.table`
  display: table !important;
  box-shadow: rgb(206, 212, 222) 0px 0px 0px 1px;
  background-color: transparent;
  border-collapse: collapse;
  color: rgb(19, 22, 31);
  overflow-y: hidden;
  overflow-x: initial;
  width: 100%;
  font-size: 14px;
  padding: 0;
  border-spacing: 0;
  border-style: hidden;
  border-radius: 2px;
  table-layout: auto;
`

const Thead = styled.thead`
  color: rgb(125, 137, 156);
  background: rgb(238, 241, 245);
  text-align: left;
`

const Th = styled.th`
  font-weight: 400;
  padding: 20px;
`

const Tbody = styled.tbody`
  > tr {
    border-top: 1px solid rgb(206, 212, 222);
  }
`

const Td = styled.td`
  line-height: 2;
  font-weight: 200;
  padding: 12px 20px;
`

export function Props({ of }) {
  return (
    <Table>
      <Thead>
        <tr>
          <Th>Property</Th>
          <Th>Type</Th>
          <Th>Required</Th>
          <Th>Default</Th>
          <Th>Description</Th>
        </tr>
      </Thead>
      <Tbody>
        {Object.entries(of.propTypes).map(([name, prop]) => {
          const meta = prop.__meta
          const propType = meta.toString()
          const tooltip = propType !== meta.type.name
          return (
            <tr key={name}>
              <Td>{name}</Td>
              <Td>
                {tooltip ? (
                  <a href="#">
                    {tooltip && <Tooltip maxWidth={400}>{propType}</Tooltip>}
                    {meta.type.name}
                  </a>
                ) : (
                  propType
                )}
              </Td>
              <Td>{meta.required ? 'true' : 'false'}</Td>
              <Td>{meta.defaultValue ? meta.defaultValue.value : '-'}</Td>
              <Td dangerouslySetInnerHTML={{ __html: meta.description }} />
            </tr>
          )
        })}
      </Tbody>
    </Table>
  )
}
