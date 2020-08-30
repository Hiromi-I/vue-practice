import { mount } from "@vue/test-utils";
import TabHolder from "@/components/TabHolder";

describe("TabHolder", () => {
  it("クリックでコンテンツが切り替わる", done => {
    const wrapper = mount(TabHolder);
    const tab2 = wrapper.find("button[content='コンテンツ2']");
    expect(wrapper.find(".item").text()).toBe("コンテンツ1");

    tab2.trigger("click");

    wrapper.vm.$nextTick(() => {
      expect(wrapper.find(".item").text()).toBe("コンテンツ2");
      expect(wrapper.vm.$data.currentId).toEqual(2);
      done();
    });
  });
});
