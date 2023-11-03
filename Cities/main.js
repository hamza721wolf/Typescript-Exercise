"use strict";
function describeCity(city, country = "Unknown") {
    console.log(`${city} is in ${country}.`);
}
describeCity("Karachi", "Pakistan");
describeCity("New York");
describeCity("Tokyo", "Japan");
