import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .min(2, "name must be at least 2 characters"),
  size: yup.string().oneOf(["Small", "Medium", "Large"]),
  SpecialInstructions: yup.string().trim(),
  Pepperoni: yup.boolean(),
  Hamburger: yup.boolean(),
  Onions: yup.boolean(),
  Peppers: yup.boolean(),
  BlackOlives: yup.boolean(),
});

export default formSchema;
