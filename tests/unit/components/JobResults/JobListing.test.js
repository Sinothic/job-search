import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing", () => {
  const createJobPros = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "AirBnB",
    locations: ["Dallas", "Toronto"],
    minimumQualifications: ["Code", "Develop"],
    ...jobProps,
  });
  const createConfig = (jobProps) => ({
    global: {
      stubs: {
        "router-link": RouterLinkStub,
        "font-awesome-icon": true,
      },
    },
    props: {
      job: {
        title: "Vue Developer",
        organization: "AirBnB",
        ...jobProps,
      },
    },
  });

  it("render job title", () => {
    const jobProps = createJobPros({ title: "React Developer" });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("React Developer");
  });

  it("render job organization", () => {
    const jobProps = createJobPros({ organization: "Meta" });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Meta");
  });

  it("render job locations", () => {
    const jobProps = createJobPros({ locations: ["Dallas", "Toronto"] });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Dallas");
    expect(wrapper.text()).toMatch("Toronto");
  });

  it("render job qualifications", () => {
    const jobProps = createJobPros({
      minimumQualifications: ["Code", "Develop"],
    });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Code");
    expect(wrapper.text()).toMatch("Develop");
  });

  it("links to individual job's page", () => {
    const id = 21;
    const jobProps = createJobPros({ id });
    const wrapper = mount(JobListing, createConfig(jobProps));
    const routerLink = wrapper.findComponent(RouterLinkStub);
    const routerLinkToProp = routerLink.props("to");
    expect(routerLinkToProp).toBe(`/jobs/results/${id}`);
  });
});
