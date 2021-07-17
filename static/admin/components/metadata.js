export const metadata = {
    label: "Metadata",
    name: "metadata",
    widget: "object",
    collapsed: true,
    fields: [
       { 
        label: "SEO",
        name: "seo",
        widget: "object",
        collapsed: true,
        fields: [
          { label: "Title", name: "title", widget: "string", required: false },
          { label: "Description", name: "description", widget: "string", required: false },
          { label: "Image", name: "image", widget: "image", required: false },
          { label: "Image Alt Text", name: "imagealt", widget: "string", required: false }    
        ]
      }
    ]
}