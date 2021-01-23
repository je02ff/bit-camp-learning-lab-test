module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const now = new Date()
    const hours = now.getHours()
    const min = now.getMinutes()
    const date = now.getDate()
    const month = now.getMonth() + 1
    const year = now.getFullYear()
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = hours + ":" + min + " " + month + "-" + date + "-" + year

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}