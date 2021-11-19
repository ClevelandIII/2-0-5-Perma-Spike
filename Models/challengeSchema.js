const mongoose = require('mongoose')

const challengeSchema = new mongoose.Schema (
    {
        Name: {
            type: String,
            required: [true, 'Must enter a name'],
            maxlength: 40
        },
        Map: {
            type: String,
            required: [true, 'Must enter a map'],
        },
        Difficulty: {
            type: String,
            default: "medium",
            match: [["easy", "medium", "hard"], "Must provide a valid difficulty"]
        },
        Lives: {
            type: Number,
            default: 150
        },
        Cash: {
            type: Number,
            default: 650
        },
        Extras: {
            type: Object,
            powers: {
                type: Boolean,
                default: true
            },
            selling: {
                type: Boolean,
                default: true
            },
            allCamo: {
                type: Boolean,
                default: false
            },
            doubleCashDisabled: {
                type: Boolean,
                default: false
            },
            monkeyKnowledge: {
                type: Boolean,
                default: true
            },
            continues: {
                type: Boolean,
                default: true
            },
            allRegrow: {
                type: Boolean,
                default: false
            },
            bloonSpeed: {
                type: Number,
                default: 100
            },
            moabSpeed: {
                type: Number,
                default: 100
            },
            ceramicHealth: {
                type: Number,
                default: 100
            },
            moabHealth: {
                type: Number,
                default: 100
            },
            regrowRate: {
                type: Number,
                default: 100
            },

        },
    }
)

module.exports = mongoose.model("challenge", challengeSchema)