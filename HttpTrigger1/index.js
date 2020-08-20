module.exports = async function (context, req) {
    // We need both name and task parameters.
  
    // const clickeditems = require("./clickeditems");
    // let clicked = clickeditems.clicked;
    // var checkclickedITems = ["Post", "Project", "Course"];
    // var checked = checkclickedITems.includes(clickeditems.type);
    // console.log(clickeditems);
    if (req.query.name && req.query.type /*&& clicked && checked*/) {
      // Set the output binding data from the query object.
      context.bindings.toDoItem = req.query;
  
      // Success.
      context.res = {
        status: 200,
        body: "Value has been stored to the database",
      };
    } else {
      context.res = {
        status: 400,
        body: "The query options 'name' and 'type' are required.",
      };
    }
  };
  