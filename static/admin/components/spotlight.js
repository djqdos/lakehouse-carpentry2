export const spotlight = {
    label: "Spotlight", 
    name: "spotlight",
    widget: "list",
    fields: [
        { label: "Heading", name: "heading", widget: "string", required: false },
        { 
            label: "Spotlight", name: "spotlight", widget: "list",
            fields: [
                { label: "Title", name: "title", widget: "string" },
                { label: "Image", name: "image", widget: "image" },
                { label: "Text", name: "text", widget: "markdown" }
            ]
        }
    ]
}