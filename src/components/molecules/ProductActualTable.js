import React from 'react'
import TableItem from '../atoms/TableItem'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import btnBin from '../../assets/remove.svg'
import btnReady from '../../assets/check-round.svg'
import btnLock from '../../assets/lock.svg'

const StyledTable = styled.div`
  height: 34vh;
  overflow-y: scroll;
`

const ProductActualTable = () => {
  const stockEntries = useSelector(
    (state) => state.productReducer.productToDisplayOnRightSidebar.stockEntries
  )
  const productId = useSelector(
    (state) => state.productReducer.productToDisplayOnRightSidebar.id
  )

  return stockEntries.length === 0 ? (
    ''
  ) : (
    <StyledTable>
      {stockEntries
        ? stockEntries.map((entry, index) => {
            const timeDiff = entry.timeDelta
            const secs = (timeDiff % 60).toFixed(0)
            const mins =
              timeDiff <= 0
                ? Math.ceil((timeDiff % 3600) / 60).toFixed(0)
                : Math.floor((timeDiff % 3600) / 60).toFixed(0)
            const hrs =
              timeDiff <= 0
                ? Math.ceil((timeDiff % 3600) / 3600).toFixed(0)
                : Math.floor((timeDiff % 3600) / 3600).toFixed(0)
            const timeFormat = (value) => {
              if (value <= -10) {
                return `${-value}`
              } else if (value <= 0 && value > -10) {
                return `0${-value}`
              } else if (value > 0 && value < 10) {
                return `0${value}`
              } else if (value >= 10) {
                return `${value}`
              } else if (value === undefined) {
                return `blee`
              }
            }
            const timeUTC = `${timeFormat(hrs)}:${timeFormat(
              mins
            )}:${timeFormat(secs)}`
            return (
              <TableItem
                index={index + 1}
                productId={productId}
                id={entry.id}
                time={timeDiff < 0 ? `- ${timeUTC}` : `${timeUTC}`}
                qty={entry.addValue}
                btnBin={btnBin}
                btnLock={btnLock}
                btnReady={timeDiff < 0 ? btnReady : ''}
                timeDiff={timeDiff}
              />
            )
          })
        : ''}
    </StyledTable>
  )
}

export default ProductActualTable
