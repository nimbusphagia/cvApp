const cvFields = {
  personal: [
    {
      name: "Name",
      id: "personalName",
      type: "text"
    },
    {
      name: "Email",
      id: "personalEmail",
      type: "email"
    },
    {
      name: "Phone",
      id: "personalPhone",
      type: "tel"
    },
    {
      name: "Address",
      id: "personalAddress",
      type: "text"
    },
    {
      name: "About me",
      id: "personalAbout",
      type: "textarea"
    }
  ],
  work: [
    {
      name: "Job Title",
      id: "jobTitle",
      type: "text"
    },
    {
      name: "Company",
      id: "jobCompany",
      type: "text"
    },
    {
      name: "Location",
      id: "jobLocation",
      type: "text"
    },
    {
      name: "From",
      id: "jobFrom",
      type: "date"
    },
    {
      name: "To",
      id: "jobTo",
      type: "date"
    },
    {
      name: "Description",
      id: "jobDescription",
      type: "textarea"
    }
  ],
  education: [
    {
      name: "Degree / Program",
      id: "eduDegree",
      type: "text"
    },
    {
      name: "Institution",
      id: "eduInstitution",
      type: "text"
    },
    {
      name: "Location",
      id: "eduLocation",
      type: "text"
    },
    {
      name: "From",
      id: "eduFrom",
      type: "date"
    },
    {
      name: "To",
      id: "eduTo",
      type: "date"
    },
  ]
}
export default cvFields;
