const { Schema } = require('mongoose');

const UserSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

// eslint-disable-next-line func-names
UserSchema.virtual('fullname').get(function() {
    return `${this.firstname} ${this.lastname}`;
});

module.exports = UserSchema;
