smart-form
=========================

AutoForm is a smart package for Meteor that adds handlebars helpers to easily create basic
forms with automatic insert and update events, and automatic reactive validation.

## Change Log

### 1.0.0

Forked from aldeed's [AutoForm](https://github.com/aldeed/meteor-autoform) package. Look [there](https://github.com/aldeed/meteor-autoform/blob/master/CHANGELOG.md) for previous changes.

- removed `collection` attribute.
- added `model` attribute to pass an reference to an `SmartModel` instance.
- changed `insert` and `update` functions to work with the [smart-record](https://github.com/tamino-martinius/meteor-smart-record) package.
