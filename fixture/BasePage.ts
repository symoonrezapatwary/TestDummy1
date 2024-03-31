import{test as baseTest} from "@playwright/test"
import AmazonPage from "../Pages/AmazonPage.page"
const test = baseTest.extend<{
AmazonPage: AmazonPage;

}>({
AmazonPage:async({page},use)=>{
    await use(new AmazonPage(page));
},
})
export default test;
export const expect = test.expect;