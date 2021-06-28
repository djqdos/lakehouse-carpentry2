import { extend } from "vee-validate";
import { required, alpha, email, numeric } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required"
});

extend("alpha", {
  ...alpha,
  message: "This field must only contain alphabetic characters"
});

extend("email", {
    ...email,
    message: "This field must be an email address"
});

extend("numeric", {
    ...numeric,
    message: "This field must contain numbers only"
});