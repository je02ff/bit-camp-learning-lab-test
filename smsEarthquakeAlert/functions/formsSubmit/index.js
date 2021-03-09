module.exports = async function (context, req) {
    
    const contact = req.body;
    context.bindings.outputDocument = contact;

}