import { ConvexHttpClient } from "convex/browser";
import { api } from "./convex/_generated/api";

const transformData = async () => {

// const client = new ConvexHttpClient('https://lovable-poodle-848.convex.cloud');
// const companies = await client.query(api.companies.getCompanies);
const companies = [ {
    name: 'Oscillo Biosciences',
}, {
    name: 'Fastlane.co'
}
]

for (const company of companies) {
    //.Be precise and concise. Include linkedin. List the founders and CSuite executives of the company between tags <founders> and </founders>. Do not include any other text.
  const response = await fetch('https://api.perplexity.ai/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer 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', // Replace <token> with your actual token
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'llama-3.1-sonar-large-128k-online',
      messages: [
        {
          role: 'system',
          content: 'Help find the C suite executives of the company. Be precise and concise. List the executives between tags <executives> and </executives>. Do not include any other text.'
        },
        {
          role: 'user',
          content: `What are C suite executives of ${company.name}?`
        }
      ],
      max_tokens: 100,
      temperature: 0.5
    })
  });

  const data = await response.json();
  console.log(data.choices[0].message.content);
  console.log('')
//   const founders = data.choices[0].message.content.match(/<founders>(.*?)<\/founders>/s)?.[1].split('\n').map(name => name.trim()).filter(name => name);

  const BROWSER_WS =
  "wss://brd-customer-hl_a1d094ec-zone-scraping_browser1:ywf5t9crsu67@brd.superproxy.io:9222";
  

//   const browser = await puppeteer.connect({
//     browserWSEndpoint: BROWSER_WS,
//   });
//   console.log("Connected! Navigate to site...");
//     const page = await browser.newPage();
//     await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
//     await page.screenshot({ path: "screenshot.png" });
//     console.log("Navigated! Fetching content...");
//     const html = await page.content();
//     await browser.close();

//     console.log("Parsing content...");
//     const $ = cheerio.load(html);
    


//   console.log(`Founders of ${company.name}:`, founders);
}


}

console.log(transformData());