
const school = {results : []}
module.exports.getHandler = (req,res)=>{
      res.status(200).json(school)
}
module.exports.postHandler = (req,res)=>{
      school.results.push(req.body);
      res.status(201).send("prisoner added successfully");
}
module.exports.errorHandler = (req,res)=>{
res.status(404)
}
module.exports.updateHandler = (req, res) => {
    const { id } = req.params;
    const index = school.results.findIndex(record => record.id === id);
    if (index !== -1) {
      school.results[index] = { ...school.results[index], ...req.body };
      res.status(200).send("Record updated successfully");
    } else {
      res.status(404).send("Record not found");
    }
  };
  
  module.exports.deleteHandler = (req, res) => {
    const { id } = req.params;
    const index = school.results.findIndex(record => record.id === id);
    if (index !== -1) {
      school.results.splice(index, 1);
      res.status(200).send("Record deleted successfully");
    } else {
      res.status(404).send("Record not found");
    }
  };
  