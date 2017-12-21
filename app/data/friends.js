// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer. 
// But you could have it be an empty array as well.
// ===============================================================================


var friendData= [
	{
		friendName: "Ahmed",
		friend_photo: "afhaque89@gmail.com",
		friendNumbers: [2,2,2,2,2,2,2,2,2,2],
	}
];

// Note how we export the array. This makes it accessible to other files using require. 
module.exports = friendData; 