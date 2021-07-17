export const contact = {
    label: "Contact",
    name: "contactblock",
    widget: "object",
    fields: [
      { label: "Heading", name: "heading", widget: "string", required: false },
      { label: "Thankyou Text", name: "thankyoutext", widget: "markdown" },
      { 
        label: "Extra Info",
        name: "extrainfo",
        widget: "list",
        fields: [
          { label: "Title", name: "title", widget: "string" },
          { label: "Image", name: "image", widget: "image", required: false },
          { label: "Text", name: "text", widget: "markdown" }     
        ]
      }
    ]
}