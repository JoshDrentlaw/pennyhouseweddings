import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Group = ({ children }) => (
    <section className="w-full flex flex-col justify-between lg:flex-row">{children}</section>
)

const Item = (props) => (
    <div>
        <label className="invisible w-0 h-0">First Name</label>
        <input type={props.type} placeholder={props.placeholder}></input>
    </div>
)

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" />
        <form>
            <Group>
                <Item
                    type="text"
                    placeholder="First Name"
                />
                <Item
                    type="text"
                    placeholder="Last Name"
                />
            </Group>
            <Group>
                <Item
                    type="email"
                    placeholder="Email"
                />
                <Item
                    type="number"
                    placeholder="Phone"
                />
            </Group>
            <Group>
                <Item
                    type="date"
                    placeholder="Date"
                />
            </Group>
            <Group>
                <Item
                    type="text"
                    placeholder="Estimated time frame"
                />
            </Group>
            <textarea rows="5" placeholder="Tell us about the big day! What are you looking for in a video service?"></textarea>
            <Item
                type="text"
                placeholder="How did you hear about us?"
            />
        </form>
    </Layout>
)

export default ContactPage
