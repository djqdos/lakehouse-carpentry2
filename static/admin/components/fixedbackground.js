export const fixedbackground = {
    name: "fixedbackground",
    label: "Fixed Background",
    widget: "object",
    fields: [
        { label: 'Title', name: 'title', widget: 'string', required: false },          
        { label: "Sub Title", name: "subtitle", widget: "string", required: false },
        { label: "Body Text", name: "bodytext", widget: "markdown", required: false },
        { label: "Text Colour", name: "textcolor", widget: "color", required: true},
        { label: 'Background Image', name: 'backgroundimage', widget: 'image', required: true }
    ]
}