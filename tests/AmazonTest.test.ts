import test from "@playwright/test";

test("FirstTest",async({page, })=>{

await page.goto("https://www.youtube.com/watch?v=7tWVzIT5kzg&t=356s")
})
