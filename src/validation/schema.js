import * as yup from "yup";

const schema = yup.object().shape({
  customerName: yup.string().trim().required("Name is required").min(2, "name must be at least 2 characters"),
  size: yup.string().oneOf(["small", "medium", "large"]).required("Size is required"),
  sauce: yup.string().oneOf(["originalRed", "garlicRanch", "bbqSauce", "spinachAlfredo"]).required("Sauce is required"),
  special: yup.string().notRequired().max(60, "special request can not be more than 60 characters"),
  pepperoni: yup.boolean().notRequired(),
  sausage: yup.boolean().notRequired(),
  olives: yup.boolean().notRequired(),
  onions: yup.boolean().notRequired(),
  cheese: yup.boolean().notRequired(),
});

export default schema;
