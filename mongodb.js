db.getCollection("categories").aggregate([
  { $match: { totalRatings: { $gte: 170 } } },
  {
    $group: {
      _id: {
        zoneId: "$zoneId",
        displayName: "$displayName ",
        totalRatings: "$totalRatings",
      },
    },
  },
]);

db.getCollection("test-users").aggregate([{ $count: "allDocument" }]);
db.getCollection("subcategories").aggregate([
  { $group: { _id: "$subcategoryId" } },
]);
db.getCollection("test-users").aggregate([
  { $group: { _id: "$type" } },
  { $count: "type" },
]);

db.getCollection("categories").aggregate([
  { $match: { totalRatings: { $gte: 170 } } },
  { $group: { _id: { zoneId: "$zoneId", displayName: "$displayName " } } },
  { $count: "total" },
]);

db.getCollection("test-users").aggregate([
  { $group: { _id: "$mobile" } },
  { $sort: { _id: 1 } },
]);

db.orders.aggregate([
  // Stage 1: Filter pizza order documents by date range
  {
    $match: {
      date: { $gte: new ISODate("2020-01-30"), $lt: new ISODate("2022-01-30") },
    },
  },
  // Stage 2: Group remaining documents by date and calculate results
  {
    $group: {
      _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
      totalOrderValue: { $sum: { $multiply: ["$price", "$quantity"] } },
      averageOrderQuantity: { $avg: "$quantity" },
    },
  },
  // Stage 3: Sort documents by totalOrderValue in descending order
  {
    $sort: { totalOrderValue: -1 },
  },
]);

db.getCollection("categories").aggregate([
  { $project: { displayName: 1, webIcon: 1, _id: 0 } },
]);

db.getCollection("categories").aggregate([
  { $project: { name: "$displayName", webIcon: 1, _id: 0 } },
]);

db.getCollection("categories").aggregate([
  { $project: { name: "$displayName", webIcon: 1, _id: 0 } },
  { $sort: { name: -1 } },
]);
db.getCollection("customers").aggregate([{ $limit: 10 }]);

db.getCollection("customers").aggregate([
  { $limit: 40 },
  { $match: { ebusyMoney: { $gte: 0 } } },
  { $group: { _id: { email: "$email", mobile: "$mobile" } } },
  { $project: { mobile: 1, gender: 1 } },
  { $sort: { email: 1 } },
]);
db.getCollection("categories").aggregate([{ $unwind: "$faq" }]);

db.getCollection("categories").aggregate([
  { $unwind: "$faq" },
  { $project: { displayName: 1, isActive: 1, faq: 1 } },
]);

db.getCollection("categories").aggregate([
  { $unwind: "$faq" },
  { $group: { _id: "$feq" } },
]);

const booked = await this.reservationModel.aggregate([
  {
    $match: bookedCriteria,
  },
  {
    $lookup: {
      from: "propertyroomtypes",
      let: {
        roomTypeId: "$roomTypeId", //localField
      },
      pipeline: [
        {
          $match: {
            $and: [
              { $expr: { $eq: ["$_id", "$$roomTypeId"] } },
              { $expr: { $eq: ["$fullHouseRental", true] } },
            ],
          },
        },
      ],
      as: "fullHouseRental",
    },
  },
  {
    $group: {
      _id: "$roomTypeId",
      count: { $sum: "$quantity" },
      fullHouseRental: {
        $addToSet: { $size: "$fullHouseRental" },
      },
    },
  },
]);

// set use for update
db.getCollection("partner_dashboard_80").update(
  { _id: ObjectId("6014ee4f5f6a80e94b645628") },
  {
    $set: {
      name: "vinod",
      origin: "Partner",
      email: "vinod@gmail.com",
      domaininfo: { host: "devpartners.openapi.apop.id", domaininfo: [] },
    },
  }
);

db.getCollection("partner_dashboard_80").updateOne(
  { _id: ObjectId("6014ee4fadb988c6a84ea642") },
  { $set: { menu: "Transaction" } }
);

db.getCollection("partner_dashboard_80").replaceOne(
  { _id: ObjectId("6014ee4fadb988c6a84ea642") },
  { userid: 422 }
);
db.getCollection("partner_dashboard_80").updateMany(
  { _id: { $exists: true } },
  { $rename: { name: "fullName" } }
);

// find by any specif character
db.getCollection("partner_dashboard_80").find({ email: { $regex: /v/ } });

// Case insensitivity to match upper and lower cases. For an example, see
//Perform Case-Insensitive Regular Expression Match.

db.getCollection("partner_dashboard_80").find({ email: { $regex: /a/i } });

// ^ this means stop the i function

db.getCollection("partner_dashboard_80").find({ email: { $regex: /^a/i } });

db.getCollection("partner_dashboard_80").find({
  email: { $in: [/a/i, /ob/i] },
});

db.getCollection("partner_dashboard_80").find({
  email: { $nin: [/a/i, /ob/i] },
});

db.getCollection("customers").find({
  createdAt: { $lte: ISODate("2022-08-19T13:27:14.116Z") },
});
{ $expr: {$eq: ["2021-03-29", { $dateToString: {date: "$dateField", format: "%Y-%m-%d"}}]}}