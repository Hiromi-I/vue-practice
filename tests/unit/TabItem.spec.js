import { shallowMount } from "@vue/test-utils";
import TabItem from "@/components/TabItem";

describe("TabItem", () => {
  it("id==valueでactive表示される", () => {
    const wrapper = shallowMount(TabItem, {
      propsData: {
        id: 1,
        label: "ラベル1",
        value: 1
      }
    });

    expect(wrapper.classes()).toContain("active");
  });

  it("id!=valueでactive表示されない", () => {
    const wrapper = shallowMount(TabItem, {
      propsData: {
        id: 1,
        label: "ラベル1",
        value: 2
      }
    });

    expect(wrapper.classes()).not.toContain("active");
  });

  it("クリックでidがemitされる", () => {
    const wrapper = shallowMount(TabItem, {
      propsData: {
        id: 32,
        label: "ラベル1",
        value: 1
      }
    });

    wrapper.find("button").trigger("click");

    expect(wrapper.emitted("input")[0]).toEqual([32]);
  });
});
