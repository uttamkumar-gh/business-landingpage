import React from 'react'
import './Home.css'

import Button from '../../Components/Button/Button'
import Heading from '../../Components/Heading/Heading'
import Card from '../../Components/Card/Card'
import StripCard from '../../Components/StripCard/StripCard'
import TeamCard from '../../Components/TeamCard/TeamCard'
import TestimonialSlider from '../../Components/Testimonial/Testimonial'

import ImageTextBlock from '../../Components/ImageTextBlock/ImageTextBlock'
import girlImg from '../../assets/images/girl-img.png'
import groupImg from '../../assets/images/diverse-friends-using-digital-devices 1.jpg'
import developTeam from '../../assets/images/young-creative-people-working-together-with-laptop-group.jpg'
import teamOne from '../../assets/images/img_1.jpg'
import teamTwo from '../../assets/images/img_2.png'
import teamThree from '../../assets/images/img_3.png'
import teamFour from '../../assets/images/img_4.png'

import supportIcon from '../../assets/icons/customer-care-icon.svg'
import researchIcon from '../../assets/icons/research-icon.svg'
import designIcon from '../../assets/icons/design-icon.svg'
import developIcon from '../../assets/icons/develop-icon.svg'
import testIcon from '../../assets/icons/test-icon.svg'
import visionIcon from '../../assets/icons/vision-icon.svg'
import goalIcon from '../../assets/icons/goal-icon.svg'
import webDesignIcon from '../../assets/icons/web-design-icon.svg'
import uiDesignIcon from '../../assets/icons/ui-ux-design-icon.svg'
import webMigrationIcon from '../../assets/icons/website-migration-icon.svg'
import appDevIcon from '../../assets/icons/app-development-icon.svg'
import hubspotIntegrationIcon from '../../assets/icons/hubspot-integration-icon.svg'
import emailMarketingIcon from '../../assets/icons/email-marketing-icon.svg'



function Home() {
  return (
    <>
        <section className='home banner'>
            <div className="container">
                <div className="floating-circle"></div>
                <div className="floating-circle"></div>
                <div className="floating-circle"></div>
                <div className="hero">
                    <div className="hero-text">
                        <Heading className='main-heading'
                            subtitle='\ We Are Here \'
                            title='Better Insights For Business Growth'
                        />
                        <div className="hero-button">
                            <Button to='/'>View More</Button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="circle-main">
                            <div className="circle-outer">
                                <div className="circle-inner">
                                    <img src={girlImg} alt="Girl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="about">
            <div className="container">
                <ImageTextBlock
                    imgSrc={groupImg}
                    headingSubtitle="\\ About Us \\"
                    headingTitle="One of the Fastest Way to Business Growth"
                    paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed." >
                    
                    <StripCard
                        stripIcon={supportIcon}
                        stripTitle="Get Instant Professional Advice"
                        supportPhone="+1 356 678 7897"
                    />
                </ImageTextBlock>
            </div>
        </section>

        <section className="planning">
            <div className="container heading-center">
                <Heading
                    subtitle='\ Planning \'
                    title='Our Process'
                />
                <div className="card-wrapper">
                    <Card
                        cardNum='01'
                        cardIcon={researchIcon}
                        cardTitle='Research'
                        cardText='It is a long established fact that a reader will be distra by the readable content of a page.'
                    />
                    <Card
                        cardNum='02'
                        cardIcon={designIcon}
                        cardTitle='Design'
                        cardText='It is a long established fact that a reader will be distra by the readable content of a page.'
                    />
                    <Card
                        cardNum='03'
                        cardIcon={developIcon}
                        cardTitle='Develop'
                        cardText='It is a long established fact that a reader will be distra by the readable content of a page.'
                    />
                    <Card
                        cardNum='04'
                        cardIcon={testIcon}
                        cardTitle='Test'
                        cardText='It is a long established fact that a reader will be distra by the readable content of a page.'
                    />
                </div>
            </div>
        </section>

        <section className="what-we-do">
            <div className="container">
                <ImageTextBlock
                    imgSrc={developTeam}
                    headingSubtitle='\ What We Do \'
                    headingTitle='We Develope Product That People Love to Use.'
                    paragraph='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed, Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed'
                    stripIcon={visionIcon}
                    stripTitle='Our Vision'
                    stripPara='It is a long esta -blished fact that' >
                    
                    <div className="strips">
                        <StripCard
                            stripIcon={visionIcon}
                            stripTitle='Our Vision'
                            stripPara='It is a long esta -blished fact that'
                        />
                        <StripCard
                            stripIcon={goalIcon}
                            stripTitle='Our Goal'
                            stripPara='It is a long esta -blished fact that'
                        />
                    </div>

                    <Button to='/'>View More</Button>
                </ImageTextBlock>
            </div>
        </section>

        <section className="services">
            <div className="container heading-center">
                <Heading
                    subtitle='\ Services \'
                    title='Our Expertice'
                />

                <div className="card-wrapper">
                    <Card
                        cardIcon={webDesignIcon}
                        cardTitle='Web Design / Development'
                        cardText='It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
                    />
                    <Card
                        cardIcon={uiDesignIcon}
                        cardTitle='UI/UX Design'
                        cardText='It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
                    />
                    <Card
                        cardIcon={webMigrationIcon}
                        cardTitle='Website Migration'
                        cardText='It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
                    />
                    <Card
                        cardIcon={appDevIcon}
                        cardTitle='App Development'
                        cardText='It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
                    />
                    <Card
                        cardIcon={hubspotIntegrationIcon}
                        cardTitle='HubSpot Integration'
                        cardText='It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
                    />
                    <Card
                        cardIcon={emailMarketingIcon}
                        cardTitle='Email Marketing'
                        cardText='It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
                    />
                </div>
            </div>
        </section>

        <section className="our-leaders">
            <div className="container heading-center">
                <Heading
                    subtitle='\ Team \'
                    title='Our Leaders'
                />
                <div className="leaders-list">
                    <TeamCard
                        teamMemberImg={teamOne}
                        teamMemberName='Larry F. Burnett'
                        teamMemberPost='CEO'
                    />
                    <TeamCard
                        teamMemberImg={teamTwo}
                        teamMemberName='Meghan J. Webb'
                        teamMemberPost='CTO'
                    />
                    <TeamCard
                        teamMemberImg={teamThree}
                        teamMemberName='Yvonne J. Cullum'
                        teamMemberPost='CFO'
                    />
                    <TeamCard
                        teamMemberImg={teamFour}
                        teamMemberName='Diana H. Williams'
                        teamMemberPost='COO'
                    />
                </div>
            </div>
        </section>

        <section className="testimonial">
            <div className="container heading-center">
                <Heading
                    subtitle='\ From our Customers \'
                    title='Testimonials'
                />

                <div className="testimonial-main">
                    <TestimonialSlider/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home
