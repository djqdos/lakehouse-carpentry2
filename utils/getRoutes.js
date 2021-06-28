export default async () => {
    const { $content } = require("@nuxt/content");
    const files = await $content({ deep: true })
          .only(["path"])
          .where({ showonsite : { $eq : true } })
          .fetch();
  
    return files.map((file) => (file.path === "/index" ? "/" : file.path));
  };