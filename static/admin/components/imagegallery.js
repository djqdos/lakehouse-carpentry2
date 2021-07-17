export const imagegallery = {
    label: "Image Gallery",
    name: "imagegallery",
    fields: [
        { label: "Heading", name: "heading", widget: "string", required: false },
        { 
            label: "Image Gallery", 
            name: "imagegallery",
            widget: "list",
            fields: [
                { label: "Title", name: "title", widget: "string" },
                { label: "Image", name: "image", widget: "string" },
                { label: "Text", name: "text", widget: "markdown" }
            ]
        }
    ]
}