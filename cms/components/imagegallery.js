const imagegallery = {
    label: "Image Gallery",
    name: "imagegallery",
    widget: "list",
    fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Image", name: "image", widget: "image" },
        { label: "Text", name: "text", widget: "markdown" }
    ]
}

export default imagegallery;