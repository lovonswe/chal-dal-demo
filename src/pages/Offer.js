import React from 'react'
import Navbar from '../components/Navbar'
import Sidebars from '../components/sidebar/sidebar'
import styled from '@emotion/styled'
import './OfferStyle.scss'
import { useSidebarStore } from '../store/FlagStore'
import AutoCarousel from '../components/AutoCarousel'

function Offer() {
 const {open} = useSidebarStore();
  return (
    <div>
        <Navbar />
        <Sidebars />
        <Contents className="contents" open={open}>
            <AutoCarousel />
            hjhkj
            {/* <ProductCarousel /> */}
            kdjfksd dfjkdsljf skldsjfklsd fsd sdkjfkdsjf dsfkdsjf dsfjskd ksdjfkds fkdsjfkfjdskf sdkfjsdkfj sdfdskfjdsk fdskfds fjsdfk dsfjsdfdf sd

        </Contents>
    </div>
  )
}

export default Offer

const Contents =styled.div`
position: fixed;
top: 0;
right: 0;
z-index:90;
background-color: white;
width: ${props => props.open ? 'calc(100% - 250px)' : '100%'};
height: 100vh;
margin-top: 55px;
transition: width 01.5s ease;`;