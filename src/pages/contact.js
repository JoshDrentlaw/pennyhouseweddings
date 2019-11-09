import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from 'styled-components'

import Calendar from '../assets/svg/calendar.inline.svg'

import { H1 } from './index'

const Group = ({ children }) => (
    <section className="relative w-full flex flex-col justify-between lg:mb-6 lg:flex-row">{children}</section>
)

const InputWrapper = styled.div`
    width: 100%;
    position: relative;

    & > input::placeholder {
        color: #101010;
        opacity: 1;
    }

    & > input[type="date"]::-webkit-calendar-picker-indicator {
        color: rgba(0, 0, 0, 0);
        opacity: 0;
        display: block;
        width: 20px;
        height: 20px;
        border-width: thin;
        z-index: 30;
    }

    @media (min-width: 1024px) {
        max-width: calc(50% - 1rem);
    }
`

const FormInput = (props) => {
    let svg = (props.type === 'date') ?
        <Calendar className="absolute top-1/3 right-1/12 w-5 h-5" /> :
        null
    
    return (
        <InputWrapper>
            {svg}
            <label className="hidden w-0 h-0">{props.name}</label>
            <input name={props.name} type={props.type} placeholder={props.placeholder} className={`${props.class} border border-black p-4 w-full mb-4 lg:mb-0`} required></input>
        </InputWrapper>
    )
}
const textarea = "border border-black mb-6 p-4 w-full"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" />
        <H1 fontSize="25px" marginTop="0.5rem" marginBottom="1rem">Contact</H1>
        <form name="contact" method="post" className="w-full md:w-1/2 lg:w-3/4 xl:w-3/5 mx-auto mb-6" netlify-honeypot="bot-field" data-netlify="true" data-secure="true">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <Group>
                <FormInput
                    name="First Name"
                    type="text"
                    placeholder="First Name"
                    data-secure-field
                />
                <FormInput
                    name="Last Name"
                    type="text"
                    placeholder="Last Name"
                    data-secure-field
                />
            </Group>
            <Group>
                <FormInput
                    name="Email"
                    type="email"
                    placeholder="Email"
                    data-secure-field
                />
                <FormInput
                    name="Phone Number"
                    type="tel"
                    placeholder="Phone"
                    data-secure-field
                />
            </Group>
            <textarea className={textarea} rows="5" name="What are you looking for?" placeholder="Tell us about the big day! What are you looking for in a video service?"></textarea>
            <button type="submit" className="block ml-auto bg-black border border-black text-white px-12 py-4">Submit</button>
        </form>
    </Layout>
)

export default ContactPage
