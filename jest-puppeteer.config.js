let jest_puppeteer_conf = {
    launch: {
        dumpio: true, // Whether to pipe the browser process stdout and stderr 
        headless: false,
        args: ['--start-maximized'], // Additional arguments to pass to the browser instance
        devtools: false,
        defaultViewport: null,
    }
 }

const isDebugMode = typeof v8debug === 'object' || /--debug|--inspect/.test(process.argv.join(' '));

if (isDebugMode) {
    jest_puppeteer_conf.launch.headless = false;
    jest_puppeteer_conf.launch.slowMo = 100;  // slow down in ms for each step
    jest_puppeteer_conf.launch.devtools = true; // This lets you debug code in the application code browser
    jest_puppeteer_conf.launch.args = ['--start-maximized'];
    jest_puppeteer_conf.launch.defaultViewport = null;
}

module.exports = jest_puppeteer_conf;