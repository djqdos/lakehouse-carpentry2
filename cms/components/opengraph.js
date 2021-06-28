const opengraph = {
    label: "Opengraph",
    name: "opengraph",
    widget: "object",
    collapsed: true,
    fields: [
        { label: "og:title", name: "ogtitle", widget: "string", required: false },
        { label: "og:description", name: "ogdescription", widget: "string", required: false },
        { label: "og:image", name: "ogimage", widget: "image", required: false },
        { label: "og:image:alt", name: "ogimagealt", widget: "string", required: false },
        { label: "twitter:title", name: "twittertitle", widget: "string", required: false },
        { label: "twitter:description", name: "twitterdescription", widget: "string", required: false },
        { label: "twitter:image", name: "twitterimage", widget: "image", required: false },
        { label: "twitter:image:alt", name: "twitterimagealt", widget: "string", required: false },
    ]
}

export default opengraph;