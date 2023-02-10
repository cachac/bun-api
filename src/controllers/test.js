export const TEST = async (c, next) => {
  const name = await c.req.json();
  console.log("name request :>> ", name);

  return c.json(name);
};

export const TEST_ERROR = async (c, next) => {
  // Simulates a custom Error Handler
  c.error = {
    status: 555,
    code: 2001,
    message: `Custom Server Error`,
    userMessage: `User Friendly Error`,
  };
  // next to Error Handler
  return next();
};
