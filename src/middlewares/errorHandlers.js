export const errorHandlers = async (c) => {
  console.error("📛 ERROR HANDLER 📛");
  console.error(c.error);

  c.status(500);

  return c.json({ ...c.error });
};
