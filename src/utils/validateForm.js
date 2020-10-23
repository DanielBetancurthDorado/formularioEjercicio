export default function validateForm(values, props) {
  console.log("Validacion");
  console.log(props);
  const err = {};
  let confirm = "";
  let other = "";
  props.info.forEach((element) => {
    if (element.required === true) {
      if (values[element.id].length < element.length) {
        err[element.id] = `Length of ${element.id} is too short`;
      }
      if (element.type === "number" && values[element.id] < element.min) {
        err[element.id] = `${element.id} is too small`;
      }
      if (element.id.toString().includes("confirm")) {
        confirm = element.id;
        other = element.id.toString().split("confirm")[1].toLowerCase();
        console.log(confirm);
      }
    }
  });
  if (confirm.length !== 0) {
    if (values[confirm] !== values[other]) {
      err[other] = `${other}s must match`;
    }
  }
  //todos los campos del formulario
  return err;
}
