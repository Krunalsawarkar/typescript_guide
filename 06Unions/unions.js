var score = 33;
score = "33";
var userType = { name: "krunal", id: 356 };
userType = { username: "iamkrunal68", userid: 52 };
function getDbId(id) {
    //some api calls
    console.log("Db id is ".concat(id));
}
getDbId(67);
getDbId("none");
function getId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
