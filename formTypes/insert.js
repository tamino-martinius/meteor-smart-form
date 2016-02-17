/* global AutoForm */

AutoForm.addFormType('insert', {
  onSubmit: function () {
    var c = this;

    // Prevent browser form submission
    this.event.preventDefault();

    // Make sure we have a model
    var model = this.model;
    if (!model) {
      throw new Error("AutoForm: You must specify a model when form type is insert.");
    }

    // Run "before.insert" hooks
    this.runBeforeHooks(this.insertDoc, function (doc) {
      // Perform insert
      model.create(doc, c.result);
    });
  },
  validateForm: function () {
    // Get SimpleSchema
    var ss = AutoForm.getFormSchema(this.form.id);
    // Validate
    return AutoForm._validateFormDoc(this.formDoc, false, this.form.id, ss, this.form);
  },
  shouldPrevalidate: function () {
    // Prevalidate only if there is both a `schema` attribute and a `model` attribute
    return !!this.formAttributes.model && !!this.formAttributes.schema;
  }
});
