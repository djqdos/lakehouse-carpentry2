export const openmaps = {
    label: "Maps",
    name: "maps",
    widget: "object", 
    fields: [
        { label: "Heading", name: "heading", widget: "string", required: false },
        { label: "Map", name: "map", widget: "map" },
        { label: "text", name: "text", widget: "markdown", required: false }        
    ]
}