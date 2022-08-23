export const useHttp = async (url) => {
  try {
    const response = await fetch(`${url}`, { mode: "cors" });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
