import { Page } from "@playwright/test";
export default class AmazonPage{
    private page:Page
    constructor(page:Page){
        this.page=page;
    }

}