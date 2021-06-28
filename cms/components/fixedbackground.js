const fixedbackground = {
    label: "Fixed Background",
    name: "fixedbackground",
    widget: "object",
    fields: [
        { label: 'Title', name: 'title', widget: 'string', required: false },          
        { label: "Sub Title", name: "subtitle", widget: "string", required: false },
        { label: "Text Colour", name: "textcolor", widget: "color", required: true},
        { label: 'Background Image', name: 'backgroundimage', widget: 'image', required: true }
    ]
}

export default fixedbackground;