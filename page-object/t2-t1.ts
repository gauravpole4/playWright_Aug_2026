import { t1 } from "./t1";

const greetClass = new t1("John", 15);
greetClass.greet("Playwright")


/**

const parentFrame = page.frame({url: "https://the-internet.herokuapp.com/iframe"})
    await parentFrame?.fill("[']",'This is in the content')

    await page.waitForTimeout(5000)
