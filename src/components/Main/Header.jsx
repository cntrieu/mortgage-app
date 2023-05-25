import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
    const [bar, setBar] = useState(false);
    return (
        <Container bar={bar}>
            <Logo>
                <h1><Link to="/">LOGO</Link></h1>
            </Logo>
            <Nav bar={bar}>
                <span><Link to="/mortgages">Mortgages</Link></span>
                <span><Link to="/calculators">Calculators</Link></span>
                <span><Link to="/rates">Rates</Link></span>
                <span><Link to="/about">About</Link></span>
                <span><Link to="/apply">Apply Now</Link></span>
            </Nav>
            <div onClick={() => setBar(!bar)} className="bars">
                <div className="bar"></div>
            </div>
        </Container>
    )
}

export default Header;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 1.5rem 0;
    position: relative;
    animation: header 500ms ease-in-out;
    @media(max-width: 840px){
        width: 90%;
    }
    .bars{
        display: none;
    }
        @media (max-width: 640px) {
            .bars{
                width: 40px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                z-index: 100;
                padding: 0.5rem;
                .bar {
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    background-color: ${props => props.bar ? "transparent" : "var(--white)"};
                    transition: background-color 400ms ease-in-out;
                    :before, :after {
                        content: "";
                        height: 2px;
                        width: 100%;
                        background-color: var(--white);
                        position: absolute;

                    }
                
                    :before{
                        transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
                        transition: all 400ms ease-in-out;
                    }
    
                    :after{
                        transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
                        transition: all 400ms ease-in-out;
                    }
                }
            }
        }
    `
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span {
        font-size: 2rem;
        }
        h1 {
            font-size: 1.5rem;
            font-weight: 200;
            text-transform: uppercase;`

const Nav = styled.div`
@media (max-width: 640px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: var(--background);
    inset: 0;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    font-weight: 700;
    height: ${props => props.bar ? "100vh" : 0};
    z-index: 100;
    overflow: hidden;
    transition: height 400ms ease-in-out;
}
span {
    margin-left: 1rem;
    a {
        color: var(--text);
        text-decoration: none;
        font-size: 1.4rem;
        position: relative;
        font-weight: 300;
        :before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -2px;
            height: 2px;
            background-color: var(--text);
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 400ms ease-in-out;
            }
            :hover:before {
                transform: scaleX(1);
                transform-origin: left;
                }
                :hover {
                    opacity: 0.8;
                    }
                    }
                    };`