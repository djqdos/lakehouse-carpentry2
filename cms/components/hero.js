const hero = {
    label: "Hero",
    name: "hero",
    widget: "object",
    fields: [
        { label: 'Title', name: 'title', widget: 'string', required: false },  
        { label: "Sub Title", name: "subtitle", widget: "string", required: false },
        { label: 'Background Image', name: 'backgroundimage', widget: 'image', required: false }                  
    ]
}

export default hero;