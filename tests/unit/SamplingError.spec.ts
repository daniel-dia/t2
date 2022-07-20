import { shallowMount } from "@vue/test-utils";
import SamplingError from "@/components/SamplingError.vue";

describe("Sampling Error.vue", () => {
  it("should display value '10%' when the prop value equals 0.1", () => {
    const wrapper = shallowMount(SamplingError, { propsData: { value: 0.1 } });
    expect(wrapper.text()).toMatch("10%");
  });

  it("should display value '100%' when the prop value equals 1", () => {
    const wrapper = shallowMount(SamplingError, { propsData: { value: 1 } });
    expect(wrapper.text()).toMatch("100%");
  });

  it("should display value '0%' when the prop value equals 0", () => {
    const wrapper = shallowMount(SamplingError, { propsData: { value: 0 } });
    expect(wrapper.text()).toMatch("0%");
  });

  it("should display value '55.5%' when the prop value equals 0.555", () => {
    const wrapper = shallowMount(SamplingError, { propsData: { value: 0.555 } });
    expect(wrapper.text()).toMatch("55.5%");
  });

  it("should display value '66.6%' (max 1 decimal pace) when the prop value equals 0.06666666", () => {
    const wrapper = shallowMount(SamplingError, { propsData: { value: 0.66666666666666 } });
    expect(wrapper.text()).toMatch("66.7%");
  });

  it("should display value '0%' when the prop value equals -1", () => {
    const wrapper = shallowMount(SamplingError, { propsData: { value: -1 } });
    expect(wrapper.text()).toMatch("0%");
  });

  it("should display value '100%' when the prop value equals 200", () => {
    const wrapper = shallowMount(SamplingError, { propsData: { value: 200 } });
    expect(wrapper.text()).toMatch("100%");
  });

  it("should display value '-' when the prop value equals null", () => {
    const wrapper = shallowMount(SamplingError, { propsData: { value: null } });
    expect(wrapper.text()).toMatch("-");
  });

  it("should display value '-' when the prop value equals undefined", () => {
    const wrapper = shallowMount(SamplingError, { propsData: { value: undefined } });
    expect(wrapper.text()).toMatch("-");
  });

  it("should display arrow icon when a value is present", () => {
    const wrapper = shallowMount(SamplingError, { propsData: { value: 200 } });
    expect(wrapper.find('.icon').text()).toMatch("↕️");
  });

  it("should not display arrow icon when a value is null", () => {
    const wrapper = shallowMount(SamplingError, { propsData: { value: null } });
    expect(wrapper.find('.icon').text()).not.toMatch("↕️");
    expect(wrapper.find('.icon').text()).toMatch("-");
  });

  it("should not diplay arrow and number inline when a value is undefined", () => {
    const wrapper = shallowMount(SamplingError, { propsData: { value: undefined } });
    expect(wrapper.find('.icon').text()).not.toMatch("↕️");
    expect(wrapper.find('.icon').text()).toMatch("-");
  });
});
