module.exports = {
    verbose: true, //указывает на то, что каждый тест будет показан в отчете о процессе запуска 
     preset: "jest-puppeteer", //указываем, что будем использовать эту библиотеку
     launch: {
        // здесь можем указывать все глобальные параметры запуска браузера для функции launch()
        slowMo: 1000,
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized'] 
        }
}
