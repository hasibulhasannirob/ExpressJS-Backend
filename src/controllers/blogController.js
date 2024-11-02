
exports.createBlog = (req, res) => {
    res.status(200).json({status:"Success", data: "Blog created successfully"});
}

exports.readBlog = (req, res) => {
    res.status(200).json({status:"Success", data: "Blog read successfully"});
}

exports.updateBlog = (req, res) => {
    res.status(200).json({status:"Success", data: "Blog update successfully"});
}

exports.deleteBlog = (req, res) => {
    res.status(200).json({status:"Success", data: "Blog delete successfully"});
}

