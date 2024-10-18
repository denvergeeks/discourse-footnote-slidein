import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "init-footnote-panel",
  initialize() {
    withPluginApi("0.8.31", api => {
      api.decorateCooked($elem => {
        $elem.find("sup.footnote").each((i, el) => {
          const $footnote = $(el);
          const content = $footnote.attr("title");
          $footnote.removeAttr("title");
          $footnote.on("click", () => {
            const panel = api.container.lookup("component:footnote-panel");
            panel.setContent(content);
          });
        });
      });
    });
  }
};
