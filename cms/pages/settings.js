import opengraph from '@/cms/components/opengraph'

const settings ={
    label: "Global Settings",
    name: "global",
    format: "json",
    file: "content/global.json",
    fields: [
        { label: "Instagram API Key", name: "instagramapitoken", widget: "string", required: false },
        { label: "Facebook Username", name: "facebookusername", widget: "string", required: false },
        { label: "Instagram Username", name: "instagramusername", widget: "string", required: false },
        { label: "LinkedIn Username", name: "linkedinusername", widget: "string", required: false },
        { label: "Phone Number", name: "phonenumbere", widget: "string", required: false },
        { label: "Email Address", name: "emailaddress", widget: "string", required: false },
        opengraph
    ]
}

export default settings;