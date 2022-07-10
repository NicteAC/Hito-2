export const getToken = async (user) => {
    try {
      const URL = "http://localhost:3020/api/login";
      const response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(user),
      });
      const { token } = await response.json();
      return token;
    } catch (error) {
      console.error(`Error ${error}`);
    }
  };