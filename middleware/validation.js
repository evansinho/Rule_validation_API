const validateRule = (req, res, next) => {
  const {rule, data} = req.body;

  function isObject (item) {
    return (typeof item === "object" && !Array.isArray(item) && item !== null);
  }
  
  if (!rule) {
    return res
    .status(400)
    .json({
      message: "rule is required.",
      status: "error",
      data: null,
    })
  }

  if (!data.crew) {
    return res
    .status(400)
    .json({
      message: "field crew is required.",
      status: "error",
      data: null,
    })
  }

  if (!data.age) {
    return res
    .status(400)
    .json({
      message: `field age is required.`,
      status: "error",
      data: null,
    })
  }

  if (!data.position) {
    return res
    .status(400)
    .json({
      message: `field position is required.`,
      status: "error",
      data: null,
    })
  }

  if (isObject(rule) === false) {
    return res
    .status(400)
    .json({
      message: "rule should be an object.",
      status: "error",
      data: null,
    })
  }

  if (rule.field.includes(Object.keys(data)[3]) === false) {
    return res
    .status(400)
    .json({
      message: `field ${rule.field} is missing from data.`,
      status: "error",
      data: null,
    })
  }

  return next();
}

export default validateRule;
