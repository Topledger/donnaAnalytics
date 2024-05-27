import axios from "axios";

const APP_SCRIPT_ID =
  "AKfycbxlvja8uStuyNJ-AtGF78Any2DOvHH5TAWZ_0S2blnjBhyV6pLGL6Wzy81AMcYilmpqfA";

export const postFeedback = async (formData: any, scriptId = APP_SCRIPT_ID) => {
  const qs = new URLSearchParams();

  for (const key in formData) {
    qs.set(key, formData[key]);
  }

  const response = await axios.post(
    `https://script.google.com/macros/s/${scriptId}/exec`,
    qs.toString(),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  console.log("form response", response.data);
};
