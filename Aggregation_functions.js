// $match
// $group
// $push
// $sum
// $project
// $sort
// $limit
// $skip
// $unwind
// $out

db.stu.aggregate([
    {$match:{sec:"A"}}
]).pretty()

db.stu.aggregate([
    {$match:{sec:"A"}},
    {$group: {_id:"$gender", count_label_xyz:{$sum:1}, label_2:{$push:"$name"}}},
    {$match: {_id:"male"}},
    {$project: {_id:0, label_2: 1}} 
])

// Line 20 --  _id: 0/1

db.stu.aggregate([
    {$group: {_id:"$sec", count:{$sum:1}}},
    {$sort: {_id:-1}}, 
    {$limit:2},
    {$skip:1},
    {$out: "new_collectioName"}
])
// Line 27 --  _id: 1/-1  1-sort by section, -1 -- sort by count
// Line 30 -- save result in new collection with name as new_collectionName

db.stu.aggregate([
    {$group:{_id:"address"}},
    {$unwind:"$address"}
])
// unwind -- break array elements as id of each document