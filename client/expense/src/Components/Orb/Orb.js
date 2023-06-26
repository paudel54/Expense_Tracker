import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowSize } from '../../utils/useWindowSize'
const Orb = () => {
    // created a custom hook useWindowSize()
    const { width, height } = useWindowSize()

    console.log(width, height)
    const moveOrb = keyframes`
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(${width}px, ${height / 2}px);
        }
        100%{
            transform: translate(0, 0);
        }
    `

    const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -37vh;
    margin-top: -37vh;
    background: linear-gradient(180deg, #8EC5FC 0%, #E0C3FC 100%);
    filter: blur(400px);
    animation: ${moveOrb} 10s alternate linear infinite;
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    

`;

    return (
        <OrbStyled></OrbStyled>
    )
}

export default Orb
