import Component from "@ember/component";
import { action } from "@ember/object";

export default Component.extend({
  classNames: ["footnote-panel"],
  isVisible: false,
  content: "",

  @action
  togglePanel() {
    this.toggleProperty("isVisible");
  },

  @action
  setContent(content) {
    this.set("content", content);
    this.set("isVisible", true);
  }
});
