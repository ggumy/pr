import axios from "axios";

export const portfolioData = async () => {
    const data = await axios.get("http://localhost:8080/api/mainslide");
    return data;
};
