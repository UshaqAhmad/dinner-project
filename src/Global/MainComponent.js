import React from 'react'
import { useParams } from 'react-router-dom'
import MHome from '../men/pages/MHome'
import WHome from '../women/pages/WHome'

const MainComponent = () => {
  const { collection } = useParams()
  return (
    <>
      {collection === 'men' && <MHome />}
      {collection === 'women' && <WHome />}
    </>
  )
}

export default MainComponent
