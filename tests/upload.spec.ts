import {test,expect} from "@playwright/test";

test ("upload file", async ({page}) => {

await page.goto ('https://davidwalsh.name/demo/multiple-file-upload.php');


//After copying path , you should give the forward slash
await page.locator("#filesToUpload").setInputFiles("C:/Users/aa1n1/Downloads/PW-demo.worktrees/agents-acceptable-gecko/testdata/Ufile.png"); 
await expect (page.locator("#fileList li")).toContainText("Ufile.png")
});