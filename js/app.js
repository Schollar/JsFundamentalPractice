var player_name = "John Smith";
var player_number = 22;
var is_playing = true;
var player = {
    name: "John Jones",
    number: 24,
    is_playing: true
};
console.log(`Player Name: ${player.name} Player Number: ${player.number} Playing: ${player.is_playing}`);

var players = [{
    name: "Mick Jones",
    number: 88,
    is_playing: true,
    all_star_years: [2017, 2018, 2019],
    number_of_goals: 45
},
{
    name: "Jack Hinge",
    number: 9,
    is_playing: false,
    all_star_years: [2016, 2018, 2019],
    number_of_goals: 65
},
{
    name: "Mike stoop",
    number: 34,
    is_playing: true,
    all_star_years: [2015, 2016, 2017],
    number_of_goals: 26
},
{
    name: "Jim Lower",
    number: 12,
    is_playing: false,
    all_star_years: [2015, 2016, 2019],
    number_of_goals: 16
},
{
    name: "Wyat Jon",
    number: 25,
    is_playing: true,
    all_star_years: [2012, 2013, 2014],
    number_of_goals: 21
}];
console.log(`Player Name: ${players[2].name} Player Number: ${players[2].number} Playing: ${players[2].is_playing}`);
console.log(`Player Name: ${players[4].name} Player Number: ${players[4].number} Playing: ${players[4].is_playing}`);
console.log(`Player Name: ${players[0].name} Player Number: ${players[0].number} Playing: ${players[0].is_playing} First All Star Year: ${players[0].all_star_years[0]}`);


if (players[0].is_playing) {
    console.log(players[0].name)
}

if (players[2].all_star_years.length > 2) {
    console.log(`Repeat All Star ${players[2].name}`);
} else {
    console.log(`Not Repeat All Star`);
}

if (players[0].number < 10 || players[1].number < 10 || players[2].number < 10 || players[3].number < 10 || players[4].number < 10) {
    console.log(`At least one small number`);
} else if (players[0].number < 20 || players[1].number < 20 || players[2].number < 20 || players[3].number < 20 || players[4].number < 20) {
    console.log(`At least one medium number`);
} else {
    console.log(`All Large Numbers`);
}

if (players[0].number_of_goals < 10 || players[1].number_of_goals < 10 || players[2].number_of_goals < 10 || players[3].number_of_goals < 10 || players[4].number_of_goals < 10) {
    console.log(`At least one small number`);
} else if (players[0].number_of_goals < 20 || players[1].number_of_goals < 20 || players[2].number_of_goals < 20 || players[3].number_of_goals < 20 || players[4].number_of_goals < 20) {
    console.log(`At least one medium number`);
} else {
    console.log(`All Large Numbers`);
}