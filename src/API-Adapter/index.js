const URL = "https://juicebox-amp7.onrender.com/";

export const getAllPosts = async () => {
  try {
    const response = await fetch(`${URL}api/posts`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    const postArray = result.posts;

    return postArray;
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${URL}api/users/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        }
      })
    })
    const {data} = await response.json();
    return data.token
  } catch (error) {
    console.error(error)
  }
}
