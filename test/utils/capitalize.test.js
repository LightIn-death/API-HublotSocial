const test = require("ava");
const Capitalize = require("../../app/utils/capitalize");



test('Capitalize_nominal', async t => {
    const TEXT = Capitalize("Bonjour");
    t.is(TEXT, "BONJOUR")
})


test('Capitalize_number', async t => {
    const TEXT = Capitalize("B0njour2");
    t.is(TEXT, "B0NJOUR2")
})



test('Capitalize_special', async t => {
    const TEXT = Capitalize("B@njourń");
    t.is(TEXT, "B@NJOURŃ")
})