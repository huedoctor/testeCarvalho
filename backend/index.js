import express from "express";
import axios from "axios";
import { JSDOM } from "jsdom";
import cors from "cors";


const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/scrape", async (req, res) => {
    const { keyword } = req.query;
    if (!keyword) {
        return res.status(400).json({ error: "Keyword is required" });
    }

    try {
        const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
        const { data } = await axios.get(url, {
            headers: { "User-Agent": "Mozilla/5.0" }
        });

        const dom = new JSDOM(data);
        const document = dom.window.document;
        const products = [];

        document.querySelectorAll(".s-main-slot .s-result-item").forEach(item => {
            const title = item.querySelector("h2 a span")?.textContent || "No title";
            const rating = item.querySelector(".a-icon-alt")?.textContent?.split(" ")[0] || "No rating";
            const reviews = item.querySelector(".s-link-style")?.textContent || "No reviews";
            const image = item.querySelector("img")?.src || "No image";
            
            products.push({ title, rating, reviews, image });
        });

        res.json({ keyword, products });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));