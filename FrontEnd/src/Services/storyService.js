import axios from "axios";

const baseURL = "https://localhost:7078/Stories";
export async function registerUser(tittle, category, ageAppropiate, story) {
  try {
    await axios.post(`${baseURL}/create`, {
        title: title,
        category: category,
        ageAppropiate: ageAppropiate,
        story:story
      });
    return null;

  } catch (error) {
    if (error.response.status === 409) {
      return "Story already exists";
    }
    else {
      return "Unknown error";
    }
  }
}
