export const testimonials = {
    label: "Testimonials",
    name: "testimonials",
    widget: "list",
    fields: [
        { label: "Author", name: "author", widget: "string", required: false },
        { label: "Image", name: "image", widget: "image", required: false },
        { label: "Text", name: "text", widget: "markdown", required: false }
    ]
}