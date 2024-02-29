import React from 'react'
import {Hero, MarqueeComp, Info, OutlineSection, EventForm} from '../../features/designher'
import { MainLayout } from '../../layouts'
const designher = () => {
  return (
    <div>
        <MainLayout>
        <Hero heroName={"Nahbel"} name="nahbel" heroImg="/assets/images/designher/nahbel.png"/>
        <MarqueeComp/>
        <Info/>
        <OutlineSection name="nahbel"/>
        <EventForm sheetUrl="https://script.google.com/macros/s/AKfycbwLuTaD8F0aJ841zvYUgCvp6ELIIQXfHdqGOS4H_i3C8F7tQFLcJaAlsCc7iMYV0dgn1w/exec"/>
        </MainLayout>
    </div>
  )
}

export default designher