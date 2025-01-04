const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cors = require('cors');  

const app = express();
const port = 5000;

app.use(cors({
    origin: 'http://localhost:5173' 
}));

app.use(express.json());


const GOOGLE_API_KEY = 'AIzaSyBpsEsyY3sxoFQ4ODuZd-jctmEbumF-HqM'; 


const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Endpoint to handle user queries
app.post('/generate', async (req, res) => {
    const { query } = req.body;

    try {
        const result = await model.generateContent(query);
        res.json({ response: result.response.text() });
    } catch (error) {
        console.error('Error generating content:', error);
        res.status(500).json({ error: 'Error generating content' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});