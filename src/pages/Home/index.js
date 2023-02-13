import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import './styles.css'

const Home = () => {
  let navigate = useNavigate();

  return (
    <div className='container'>
      <div className='central_block'>
        <h2>Toc Toc</h2>
        <Button action={() => navigate('/question')}>Jogar</Button>
      </div>
    </div>
  )
}

export default Home